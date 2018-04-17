package com.isa.project.service.implementation;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.isa.project.bean.Friend;
import com.isa.project.bean.Play;
import com.isa.project.bean.Projection;
import com.isa.project.bean.ProjectionUserTicket;
import com.isa.project.bean.User;
import com.isa.project.repository.FriendRepository;
import com.isa.project.repository.PlayRepository;
import com.isa.project.repository.ProjectionRepository;
import com.isa.project.repository.ProjectionUserTicketRepository;
import com.isa.project.repository.TicketRepository;
import com.isa.project.repository.UserRepository;
import com.isa.project.service.UserService;
import com.isa.project.web.Converter;
import com.isa.project.web.dto.RegistrationUserDto;
import com.isa.project.web.dto.ReservationDTO;

@Service
public class UserSeviceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private EmailService emailService;

	@Autowired
	private FriendRepository friendRepository;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private ProjectionUserTicketRepository projectionUserTicketRepository;
	
	@Autowired
	private ProjectionRepository projectionRepository;
	
	@Autowired
	private PlayRepository playRepository;
	
	@Autowired
	private TicketRepository ticketRepository;
	
	@Override
	public boolean registerUser(RegistrationUserDto userDto, HttpServletRequest request) {

		User u = Converter.RegistrationDtoToUser(userDto);

		if (u == null)
			return false;

		u.setConfirmationToken(UUID.randomUUID().toString());

		userRepository.save(u);

		String appUrl = request.getScheme() + "://" + request.getServerName();

		SimpleMailMessage registrationEmail = new SimpleMailMessage();
		registrationEmail.setTo(u.getUsername());
		registrationEmail.setSubject("Registration Confirmation");
		registrationEmail.setText("To confirm your e-mail address, please click the link below:\n" + appUrl
				+ ":8080/api/login/confirm?token=" + u.getConfirmationToken());
		registrationEmail.setFrom("noreply@domain.com");

		emailService.sendEmail(registrationEmail);

		// SLANJE KONFIRMACIONOG MAILA

		// userRepository.save(u);

		System.out.println("Pokupljeni ovi podaci: " + u);
		System.out.println("A confirmation e-mail has been sent to " + u.getUsername());
		return true;

	}

	@Override
	public boolean confirmAccountRegistrationToken(String token) {
		User user = userRepository.findByConfirmationToken(token);
		System.out.println("Pogodio confirm!");

		if (user == null) { // No token found in DB
			System.out.println("Nije pronadjen token!");
			return false;
		}

		// Token found
		System.out.println("Pronasao usera sa datim tokenom!");
		user.setEnabled(true);
		userRepository.save(user);

		return true;

	}

	@Override
	public User editUser(RegistrationUserDto userDto, String username) {

		User logged = userRepository.findByUsername(username).get();
		logged.setCity(userDto.getCity());
		logged.setFirstName(userDto.getFirstName());
		logged.setLastName(userDto.getLastName());
		logged.setPhoneNumber(userDto.getPhoneNumber());

		userRepository.save(logged);

		return logged;
	}

	@Override
	public List<Friend> getFriends(String username) {

		return userRepository.findByUsername(username).get().getFriends();
	}

	@Override
	public List<Friend> removeFriend(int id, String username) {

		User otherUser = userRepository.findByUsername(friendRepository.findByFriendId(id).getFriendUsername()).get();
		int friendId = 0;

		for (Friend f : otherUser.getFriends()) {
			if (f.getFriendUsername().equals(username)) {
				friendId = f.getFriendId();
				otherUser.getFriends().remove(f);
				break;
			}
		}

		userRepository.save(otherUser);
		friendRepository.delete(friendId);
		friendRepository.delete(id);

		return getEnabledFriends(username);
	}

	@Override
	public List<User> getAllUsers(String usernameFromToken) {

		List<User> allUsers = userRepository.findAll();
		//List<User> returnUsers = new ArrayList<User>();
		int index = 0;

		// remove currently logged user from all users
		for (User u : allUsers) {
			if (u.getUsername().equals(usernameFromToken)) {
				break;
			}

			index++;
		}

		allUsers.remove(index);

		for (Friend f : userRepository.findByUsername(usernameFromToken).get().getFriends()) {
			for (int i = 0; i < allUsers.size(); i++) {
				if (allUsers.get(i).getUsername().equals(f.getFriendUsername())) {
					allUsers.remove(i);
				}
			}
		}

		return allUsers;
	}

	@Override
	public List<User> handleFriendRequest(String currentUser, String friendUsername) {

		// provera da li vec ima njega u listi prijatelja da ne moze opet da ga doda
		for (Friend f : userRepository.findByUsername(currentUser).get().getFriends()) {
			if (f.getFriendUsername().equals(friendUsername))
				return null;
		}

		User curUser = userRepository.findByUsername(currentUser).get();
		User friendUser = userRepository.findByUsername(friendUsername).get();

		Friend currentUserFriend = new Friend(currentUser, curUser.getFirstName(), curUser.getLastName());
		Friend friendUserFriend = new Friend(friendUsername, friendUser.getFirstName(), friendUser.getLastName());

		// dodat prijatelj u friend-u
		friendUser.getFriends().add(currentUserFriend);
		userRepository.save(friendUser);

		// dodat prijatelj u current user-u
		friendUserFriend.setSender(true);
		curUser.getFriends().add(friendUserFriend);
		userRepository.save(curUser);

		// ako se potvrdi kod friend-a onda ide enabled na 1 kod oba
		// ako se odbije onda se brise na oba mesta
		// dok se nesto od ova 2 ne desi stoji na 0
		
		System.out.println(getAllUsers(currentUser));
		
		return getAllUsers(currentUser);
	}

	@Override
	public List<Friend> getFriendRequests(String usernameFromToken) {

		List<Friend> friendRequests = new ArrayList<Friend>();

		for (Friend f : userRepository.findByUsername(usernameFromToken).get().getFriends()) {
			if (!f.isEnabled()) {
				friendRequests.add(f);
			}
		}

		return friendRequests;
	}

	@Override
	public List<Friend> acceptFriend(String usernameFromToken, int id) {

		// enable-uj kod mene onog usera kojeg sam privation
		Friend friend = friendRepository.findByFriendId(id);
		friend.setEnabled(true);
		friendRepository.save(friend);

		// enable-uj kod njega mene, prihvatio sam ga sad moze da me vidi
		for (Friend f : userRepository.findByUsername(friendRepository.findByFriendId(id).getFriendUsername()).get()
				.getFriends()) {
			if (f.getFriendUsername().equals(usernameFromToken)) {
				f.setEnabled(true);
				friendRepository.save(f);
				break;
			}
		}

		return getEnabledFriends(usernameFromToken);
	}

	@Override
	public List<Friend> declineFriend(String usernameFromToken, int id) {

		// delete usera kojeg sam decline-ovao kod mene
		Friend friend = friendRepository.findByFriendId(id);
		Friend friendDelete = null;
		String username = friendRepository.findByFriendId(id).getFriendUsername();

		User user = userRepository.findByUsername(username).get();

		for (Friend f : user.getFriends()) {
			if (f.getFriendUsername().equals(usernameFromToken)) {

				friendDelete = friendRepository.findByFriendId(f.getFriendId());
				user.getFriends().remove(f);
				break;
			}
		}

		friendRepository.delete(friendDelete);
		friendRepository.delete(friend);

		return getEnabledFriends(usernameFromToken);
	}

	private List<Friend> getEnabledFriends(String usernameFromToken) {
		List<Friend> friends = new ArrayList<>();

		for (Friend f : userRepository.findByUsername(usernameFromToken).get().getFriends()) {
			if (f.isEnabled())
				friends.add(f);
		}

		return friends;
	}

	@Override
	public boolean changePassword(String usernameFromToken, String password) {

		userRepository.findByUsername(usernameFromToken).get().setPassword(passwordEncoder.encode(password));
		userRepository.findByUsername(usernameFromToken).get().setFirstTimeLogged(false);
		userRepository.flush();

		return true;
	}

	@Override
	public void addActivityPoints(Long points,String username) {
		User u = userRepository.findByUsername(username).get();
		u.setActivity(u.getActivity() + points);
		
	}
	
	

	public List<User> searchUsers(String usernameFromToken, String searchName, String searchLastName) {
		return userRepository.findByFirstNameAndLastName(searchName, searchLastName);
	}

	@Override
	public List<ReservationDTO> getReservations(String usernameFromToken) {
		
		User u = userRepository.findByUsername(usernameFromToken).get();
		List<ReservationDTO> lista = new ArrayList<ReservationDTO>();
	
		for(ProjectionUserTicket put : projectionUserTicketRepository.findByMovieUserTicketIdUserId(u.getId()))
		{
			
			if(put.isMovie())
			{
				
			}
			else
			{
				for(Play p : playRepository.findAll())
				{
					for(Projection proj : p.getProjekcije())
					{
						if(proj.getId().equals(put.getMovieUserTicketId().getProjectionId()))
						{
							lista.add(new ReservationDTO(
									p.getName(), 
									proj.getDate(), 
									proj.getTime(), 
									proj.getPlace(), 
									proj.getPrice(), 
									ticketRepository.findOneById(put.getMovieUserTicketID().getTicketId()).getSeatNumber()));
						}
					}
				}
			}
			
		}
		
		
		
		
		System.out.println("Nadjeno je sledece: \n");
		System.out.println(lista);
		System.out.println("\n");
		
		return lista;
	}


}
