package com.isa.project.web.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Friend;
import com.isa.project.bean.Notification;
import com.isa.project.bean.Play;
import com.isa.project.bean.Projection;
import com.isa.project.bean.ProjectionUserTicket;
import com.isa.project.bean.ProjectionUserTicketId;
import com.isa.project.bean.Role;
import com.isa.project.bean.Theatre;
import com.isa.project.bean.User;
import com.isa.project.repository.CinemaRepository;
import com.isa.project.repository.MovieRepository;
import com.isa.project.repository.NotificationRepository;
import com.isa.project.repository.PlayRepository;
import com.isa.project.repository.ProjectionRepository;
import com.isa.project.repository.ProjectionSeatsRepository;
import com.isa.project.repository.ProjectionUserTicketRepository;
import com.isa.project.repository.TheatreRepository;
import com.isa.project.repository.UserRepository;
import com.isa.project.security.jwt.TokenProvider;
import com.isa.project.service.TheatreService;
import com.isa.project.service.UserService;
import com.isa.project.web.dto.RegistrationUserDto;
import com.isa.project.web.dto.ReservationDTO;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/profile")
@SuppressWarnings({ "rawtypes", "unchecked" })
public class ProfileController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private TheatreRepository theatreRepository;
	
	@Autowired
	private PlayRepository playRepository;
	
	@Autowired
	private ProjectionUserTicketRepository projectionUserTicketRepository;

	@Autowired
	private UserService userService;
	
	@Autowired
	private TheatreService theatreService;
	
	@Autowired 
	private NotificationRepository notificationRepository;
	
	@Autowired
	private ProjectionRepository projectionRepository;
	
	@Autowired
	private ProjectionSeatsRepository projectionSeatsRepository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private CinemaRepository cinemaRepository;
	
	

	@GetMapping
	@RequestMapping(value = "/")
	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN') or hasAuthority('ADMIN') or hasAuthority('FANZONE_ADMIN') or hasAuthority('REGISTERED_USER')")
	public ResponseEntity<User> getLoggedUser(@RequestHeader(value = "X-Auth-Token") String token) {

		TokenProvider p = new TokenProvider();
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);

		return new ResponseEntity<User>(logged, HttpStatus.OK);
	}

	@PostMapping
	@RequestMapping(value = "/editUser", consumes = "application/json")
	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN') or hasAuthority('ADMIN') or hasAuthority('FANZONE_ADMIN') or hasAuthority('REGISTERED_USER')")
	public ResponseEntity<User> editUser(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestBody RegistrationUserDto editedUser) {

		TokenProvider p = new TokenProvider();
		
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);


		return new ResponseEntity<User>(userService.editUser(editedUser, p.getUsernameFromToken(token)), HttpStatus.OK);
	}

	@GetMapping
	@RequestMapping(value = "/getFriends")
	public ResponseEntity getFriends(@RequestHeader(value = "X-Auth-Token") String token) {

		TokenProvider p = new TokenProvider();
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);

		return new ResponseEntity(userService.getFriends(p.getUsernameFromToken(token)), HttpStatus.OK);
	}

	@GetMapping
	@RequestMapping(value = "/removeFriend")
	public ResponseEntity removeFriend(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestParam("friendId") int id) {

		TokenProvider p = new TokenProvider();
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);

		return new ResponseEntity(userService.removeFriend(id, p.getUsernameFromToken(token)), HttpStatus.OK);

	}


	@GetMapping
	@RequestMapping(value = "/getAllUsers")
	public ResponseEntity getAllUsers(@RequestHeader(value = "X-Auth-Token") String token) {
		
		TokenProvider p = new TokenProvider();
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);

		return new ResponseEntity(userService.getAllUsers(p.getUsernameFromToken(token)), HttpStatus.OK);

	}
	
	@GetMapping
	@RequestMapping(value = "/getallusers")
	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN')")
	public ResponseEntity<List<User>> getAllUsersForAllUsers(@RequestHeader(value = "X-Auth-Token") String token) {
		
		TokenProvider p = new TokenProvider();
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		// points for visiting certain page
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		
		return new ResponseEntity<List<User>> (userService.getAllUsersForAllUsers(logged),HttpStatus.OK);

	}
	
	

	@SuppressWarnings("rawtypes")
	@PostMapping
	@RequestMapping(value = "/friendRequest", consumes = "application/json")
	public ResponseEntity friendRequest(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestBody String username) {

		TokenProvider p = new TokenProvider();
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);

		return new ResponseEntity(userService.handleFriendRequest(p.getUsernameFromToken(token), username),HttpStatus.OK);
		

	}

	@GetMapping
	@RequestMapping(value = "/getFriendRequests")
	public ResponseEntity<List<Friend>> getFriendRequests(@RequestHeader(value = "X-Auth-Token") String token) {

		TokenProvider p = new TokenProvider();
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);

		return new ResponseEntity<List<Friend>>(userService.getFriendRequests(p.getUsernameFromToken(token)), HttpStatus.OK);

	}

	@GetMapping
	@RequestMapping(value = "/acceptFriend")
	public ResponseEntity<List<Friend>> acceptFriend(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestParam("friendId") String id) {

		TokenProvider p = new TokenProvider();
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		
		return new ResponseEntity<List<Friend>>(userService.acceptFriend(p.getUsernameFromToken(token), Integer.parseInt(id)),HttpStatus.OK);

	

	}
	
	@GetMapping
	@RequestMapping(value = "/declineFriend")
	public ResponseEntity<List<Friend>> declineFriend(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestParam("friendId") String id) {

		TokenProvider p = new TokenProvider();
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
	
		return new ResponseEntity<List<Friend>>(userService.declineFriend(p.getUsernameFromToken(token), Integer.parseInt(id)),HttpStatus.OK);


	}
	
	@GetMapping(value= "/getnotifications")
	public ResponseEntity<List<Notification>> getAllNotifications(@RequestHeader(value = "X-Auth-Token") String token) {
		TokenProvider p = new TokenProvider();
		User currentUser = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		// points for visiting certain page
		
		currentUser.setActivity(currentUser.getActivity() + 20L);
		userRepository.save(currentUser);
		
		
		try {
			ArrayList<Notification> list = new ArrayList<Notification>(notificationRepository.findAllByUser(currentUser));
			return new ResponseEntity<List<Notification>>(list,HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			System.out.println("Error while reading from database");
			return null;
		}
	}
	
	@PostMapping(value = "/readnotification")
	public ResponseEntity<Boolean> readNotification(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestParam("id") int id){
		
		TokenProvider p = new TokenProvider();
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		
		
		try {
			Notification n = notificationRepository.findOneByNotificationID(id);
			n.setSeen(true);
			notificationRepository.flush();
			
			return new ResponseEntity<Boolean>(true,HttpStatus.OK);
			
		} catch(Exception e) {
			e.printStackTrace();
			System.out.println("Error while writing to database");
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@GetMapping
	@RequestMapping(value = "/changePassword")
	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN') or hasAuthority('ADMIN') or hasAuthority('FANZONE_ADMIN') or hasAuthority('REGISTERED_USER')")
	public ResponseEntity changePassword(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestParam("password") String password,
			@RequestParam("passwordRepeat") String passwordRepeat) {

		System.out.println(password);
		System.out.println(passwordRepeat);
		
		TokenProvider p = new TokenProvider();
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		
		if(!password.equals(passwordRepeat))
		{
			System.out.println("Passwords don`t match!");
			return new ResponseEntity(HttpStatus.BAD_REQUEST); 
		}
		
		System.out.println("Passwords match!");
		
		
		if(userService.changePassword(p.getUsernameFromToken(token), password))
			return new ResponseEntity(HttpStatus.OK);
		
		return new ResponseEntity(HttpStatus.BAD_REQUEST); 
	}
	
	@GetMapping
	@RequestMapping(value = "/searchUsers")
	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN') or hasAuthority('ADMIN') or hasAuthority('FANZONE_ADMIN') or hasAuthority('REGISTERED_USER')")
	public ResponseEntity searchUsers(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestParam("searchName") String searchName,
			@RequestParam("searchLastName") String searchLastName) {

		TokenProvider p = new TokenProvider();
		
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		
		String name = "%" + searchName + "%";
		String lastName = "%" + searchLastName + "%";
		
		return new ResponseEntity
		(userService.searchUsers(p.getUsernameFromToken(token),name,lastName), HttpStatus.OK);


	}
	
	@GetMapping
	@RequestMapping(value = "/getReservations")
	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN') or hasAuthority('ADMIN') or hasAuthority('FANZONE_ADMIN') or hasAuthority('REGISTERED_USER')")
	public ResponseEntity getReservations(@RequestHeader(value = "X-Auth-Token") String token) {

		TokenProvider p = new TokenProvider();
		
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		
		
//		for(Play m : playRepository.findAll())
//		{
//			for(Projection proj : m.getProjekcije())
//			{
//				for(ProjectionSeats projectionSeats : projectionSeatsRepository.findAll())
//				{
//					if(proj.getId() == projectionSeats.getProjectionId())
//					{
//						projectionSeats.setMovieId(m.getId());
//						projectionSeatsRepository.save(projectionSeats);
//					}
//					
////					for(int i=1; i<85; i++)
////					{
////						ProjectionSeats ps =
////								new ProjectionSeats(i, projection.getId());
////					
////						projectionSeatsRepository.save(ps);
////					}
//				}
//			}
//
//		}

		
		
		return new ResponseEntity
		(userService.getReservations(p.getUsernameFromToken(token)), HttpStatus.OK);


	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@GetMapping
	@RequestMapping(value = "/cancelProjectionReservation")
	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN') or hasAuthority('ADMIN') or hasAuthority('FANZONE_ADMIN') or hasAuthority('REGISTERED_USER')")
	public ResponseEntity cancelProjectionReservation(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestParam("projectionId") String projectionId,
			@RequestParam("seatNumber") String seatNumber) {

		TokenProvider p = new TokenProvider();
		
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		
		
		if(userService.cancelProjectionReservation(
				p.getUsernameFromToken(token),
				Integer.parseInt(projectionId),
				Integer.parseInt(seatNumber)))
		return new ResponseEntity(userService.getReservations(p.getUsernameFromToken(token)),HttpStatus.OK);
				
		
		return new ResponseEntity
				(HttpStatus.BAD_REQUEST); 


	}
	
	
	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN')")
	@PostMapping("/addrole")
	public User addRole(@RequestHeader(value = "X-Auth-Token") String token,@RequestBody User u, @RequestParam("role") String role) {
		
		
		TokenProvider p = new TokenProvider();
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		logged.setActivity(logged.getActivity() + 10L);
		userRepository.save(logged);
		
		User user = userRepository.findByUsername(u.getUsername()).get();
		
		Role r = new Role();
//		r.setRole("REGISTERED_USER");
		r.setRole(role);
		for(Role ro : user.getRoles()) {
			if (ro.getRole().equals(role)) {
				
				System.out.println("User already has that role");
				return null;
			}
		}
		
		
		if (role.equals("FANZONE_ADMIN")) {
			user.setFirstTimeLogged(true);
		}
		user.getRoles().add(r);
		
//		user.getRoles().clear();
//		user.getRoles().add(r);
		
		userRepository.saveAndFlush(user);
		
		return user;
	}
	

	@PostMapping(value = "/ratePlay")
	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN') or hasAuthority('ADMIN') or hasAuthority('FANZONE_ADMIN') or hasAuthority('REGISTERED_USER')")
	public ResponseEntity ratePlay(@RequestHeader(value = "X-Auth-Token") String token, @RequestBody ReservationDTO reservation,
			@RequestParam("ratevalue") String ratevalue){
		
		Long playid = reservation.getIdPlay();
		Play p = playRepository.findOne(playid);
		

		
		
		
		TokenProvider prov = new TokenProvider();
		User logged = userRepository.findByUsername(prov.getUsernameFromToken(token)).get() ;
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		
		ProjectionUserTicketId putid = new ProjectionUserTicketId(reservation.getId(), logged.getId(), reservation.getIdTicket());
		ProjectionUserTicket put = projectionUserTicketRepository.findOne(putid); 
		put.setGradeMov(Integer.parseInt(ratevalue));
		projectionUserTicketRepository.save(put);
		int brojOcena;

		brojOcena = p.getNumberOfGrades()+1;
		p.setNumberOfGrades(brojOcena);
		if (p.getSum()==0) {
			p.setRating(Integer.parseInt(ratevalue));
			p.setSum(Integer.parseInt(ratevalue));
		}else {
			p.setSum(p.getSum()+Integer.parseInt(ratevalue));
			p.setRating(p.getSum()/brojOcena);
		}
		playRepository.save(p);
		return new ResponseEntity(HttpStatus.OK);
		
	}
	
	@PostMapping(value = "/rateAmb")
	public ResponseEntity rateAmb(@RequestHeader(value = "X-Auth-Token") String token, @RequestBody ReservationDTO reservation,
			@RequestParam("ratevalue") String ratevalue){
		
		System.out.println(ratevalue);
		

		
		Theatre t=null;
		for (Theatre te: theatreRepository.findAll()) {
			for (Projection p: te.getProjekcije()) {
				if (p.getId()==reservation.getId()) {
					t = te;
					System.out.println(t.getName());
					int brojOcena;

					brojOcena = t.getNumberOfGrades()+1;
					t.setNumberOfGrades(brojOcena);
					if (t.getSum()==0) {
						t.setRating(Integer.parseInt(ratevalue));
						t.setSum(Integer.parseInt(ratevalue));
					}else {
						t.setSum(t.getSum()+Integer.parseInt(ratevalue));
						t.setRating(t.getSum()/brojOcena);
					}
					theatreRepository.save(t);
					
				}
			}
		}
		TokenProvider prov = new TokenProvider();
		User logged = userRepository.findByUsername(prov.getUsernameFromToken(token)).get() ;
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		
		ProjectionUserTicketId putid = new ProjectionUserTicketId(reservation.getId(), logged.getId(), reservation.getIdTicket());
		ProjectionUserTicket put = projectionUserTicketRepository.findOne(putid); 
		
		put.setGradeAmb(Integer.parseInt(ratevalue));
		projectionUserTicketRepository.save(put);
		System.out.println("grade: "+put.getGradeAmb());
		
		return new ResponseEntity(HttpStatus.OK);
	}
	

	@PostMapping
	@RequestMapping(value = "/acceptORdeclineInvitation", consumes = "application/json")
	public ResponseEntity acceptORdeclineInvitation(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestBody ProjectionUserTicketId projectionUserTicketId,
			@RequestParam("accept") String accept) {

		TokenProvider p = new TokenProvider();
		
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);

		System.out.println("pogodio acceptORdeclineInvitation");
		System.out.println(projectionUserTicketId);
		System.out.println(accept);
		
		if(userService.acceptORdeclineInvitation(projectionUserTicketId, accept))
			return new ResponseEntity<>(HttpStatus.OK);

		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

	}
	
	
	
	@GetMapping
	@RequestMapping(value = "/getCinemasSorted")
	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN') or hasAuthority('ADMIN') or hasAuthority('FANZONE_ADMIN') or hasAuthority('REGISTERED_USER')")
	public ResponseEntity getCinemasSorted(@RequestHeader(value = "X-Auth-Token") String token) {

		
		
		TokenProvider p = new TokenProvider();
		
		// points for visiting certain page
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		

		
		
		return new ResponseEntity
		(cinemaRepository.findAllByOrderByName(), HttpStatus.OK);


	}
}
