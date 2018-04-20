package com.isa.project.service.implementation;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.isa.project.bean.Cinema;
import com.isa.project.bean.Play;
import com.isa.project.bean.Projection;
import com.isa.project.bean.ProjectionSeats;
import com.isa.project.bean.ProjectionUserTicket;
import com.isa.project.bean.ProjectionUserTicketId;
import com.isa.project.bean.Theatre;
import com.isa.project.bean.Ticket;
import com.isa.project.bean.User;
import com.isa.project.repository.FriendRepository;
import com.isa.project.repository.PlayRepository;
import com.isa.project.repository.ProjectionRepository;
import com.isa.project.repository.ProjectionSeatsRepository;
import com.isa.project.repository.ProjectionUserTicketRepository;
import com.isa.project.repository.TheatreRepository;
import com.isa.project.repository.UserRepository;
import com.isa.project.service.TheatreService;
import com.isa.project.web.dto.MovieReservationDTO;

@Service
public class TheatreServiceImpl implements TheatreService {

	@Autowired
	private TheatreRepository theatreRepository;

	@Autowired
	private PlayRepository playRepository;
	
	@Autowired
	private ProjectionRepository projectionRepository;
	
	@Autowired
	private EmailService emailService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ProjectionUserTicketRepository movieUserTicketRepository;
	
	@Autowired
	private FriendRepository friendRepository;
	
	@Autowired
	private ProjectionSeatsRepository projectionSeatsRepository;

	@Override
	public ArrayList<Theatre> getAllTheatres() {
		// TODO Auto-generated method stub
		return theatreRepository.findAll();
	}

	@Override
	public Boolean editTheatre(Theatre theatre) {

		try {
			Theatre t = theatreRepository.findOne(theatre.getId());
			t.setName(theatre.getName());
			t.setDescription(theatre.getDescription());
			t.setAddress(theatre.getAddress());
			t.setId(theatre.getId());

			theatreRepository.flush();
		} catch (Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.********");
			e.printStackTrace();
			return false;
		}

		return true;
	}

	@Override
	public ArrayList<Theatre> findByNameContaining(String theatre) {

		return theatreRepository.findByNameContaining(theatre);
	}

	@Override
	public ArrayList<Play> getPlays(int theatreId) {

		ArrayList<Play> playsList = new ArrayList();

		for (Projection pt : theatreRepository.findOneById((long) theatreId).getProjekcije()) {
			for (Play p : playRepository.findAll()) {
				for (Projection pp : p.getProjekcije()) {
					if (pp.getId().equals(pt.getId())) {
						if (!playsList.contains(p))
							playsList.add(p);
					}
				}
			}
		}

		return playsList;
	}

	@Override
	public ArrayList<Projection> getPlayDates(int parseInt) {

		System.out.println(playRepository.findProjectionsByPlayId((long) parseInt));

		return playRepository.findProjectionsByPlayId((long) parseInt);
	}

	@Override
	@Transactional(readOnly=false, propagation = Propagation.REQUIRES_NEW)
	public boolean makeReservation(MovieReservationDTO movieReservationDTO, String usernameFromToken) {

		try {
			
			for(ProjectionSeats projectionSeat : movieReservationDTO.getSeats())
			{
				System.out.println("Evo me u makeres + " + projectionSeat.getVersion());
				projectionSeat.setSeatTaken(true);
				projectionSeatsRepository.save(projectionSeat);
				
			}
			
			Projection projection = projectionRepository.findOneById(movieReservationDTO.getProjectionId());
			User u = userRepository.findByUsername(usernameFromToken).get();
			
			System.out.println(movieReservationDTO + "    iz makeReservation");


			for (int i = 0; i < movieReservationDTO.getSeatsTaken().size(); i++) {
				projection.getTickets().add(new Ticket(movieReservationDTO.getSeatsTaken().get(i), false,
						(int) projection.getPrice(), true, false));
				
			}
			
			projectionRepository.save(projection);

			// recimo da imamo ukupno 2 karte, a ja sam rez 3, to je jednako 5
			// razlika je 5-3-1 = 1
			// znaci 0 i 1 su stare karte, 2 3 4 su nove
			// razlika ++ => razlika = 2
			// ubacim mene na tu kartu
			// razlika ++
			// ubacim usera iz niza usera na ostale kartu
			int razlika = projection.getTickets().size()-1-movieReservationDTO.getSeatsTaken().size();
			razlika++;
			ProjectionUserTicket projectionUserTicket1 =
					new ProjectionUserTicket(
							new ProjectionUserTicketId(projection.getId(), u.getId(), projection.getTickets().get(razlika).getId()));
			System.out.println(projectionUserTicket1);
			razlika++;
			
			projectionUserTicket1.setMovie(false);
			projectionUserTicket1.setEnabled(true);
			projectionUserTicket1.setApproved(true);
			
			movieUserTicketRepository.save(projectionUserTicket1);
			
			int invitedIndex = 0;
			
			for(int i = razlika; i < projection.getTickets().size(); i++)	
			{
				// prijatelj je u pitanju
				if(movieReservationDTO.getInvitedFriends().size()!=0)
				{
					
					User newUser = userRepository.findByUsername((
							friendRepository.findByFriendId(
									Integer.parseInt(
											movieReservationDTO.getInvitedFriends().get(invitedIndex))).getFriendUsername())).get();

					ProjectionUserTicket projectionUserTicket =
							new ProjectionUserTicket(
									new ProjectionUserTicketId(projection.getId(), newUser.getId(), projection.getTickets().get(i).getId()));
					System.out.println(projectionUserTicket);
					
					projectionUserTicket.setMovie(false);
					projectionUserTicket.setEnabled(false);
					projectionUserTicket.setApproved(false);
					
					invitedIndex++;
					
					movieUserTicketRepository.save(projectionUserTicket);
					
					SimpleMailMessage registrationEmail = new SimpleMailMessage();
					registrationEmail.setTo(newUser.getUsername());
					registrationEmail.setSubject("Invitation");
					registrationEmail.setText("You have been invited for the following projection:\n" + "Title: "
							+ movieReservationDTO.getMovieName() + " \n" + "Date: " + movieReservationDTO.getDate() + " \n"
							+ "Time: " + movieReservationDTO.getTime() + " \n" + "Place: " + movieReservationDTO.getPlace() + " \n"
							+ "Seats reserved: " +  projection.getTickets().get(i).getSeatNumber() + " \n"
							+"To confirm your reservation, please follow the link below:\n"
							+ "http://localhost:4200/invitation?"
							+ "projection_id=" +  projection.getId()
							+ "&user_id=" + newUser.getId()
							+ "&ticket_id=" + projection.getTickets().get(i).getId());
					registrationEmail.setFrom("noreply@domain.com");

					emailService.sendEmail(registrationEmail);
					
				} // rezervisao je 3 karte ali nije pozvao ni 1 prijatelja
				else
				{
					ProjectionUserTicket projectionUserTicket =
							new ProjectionUserTicket(
									new ProjectionUserTicketId(projection.getId(), u.getId(), projection.getTickets().get(i).getId()));
					System.out.println(projectionUserTicket);
					
					projectionUserTicket.setMovie(false);
					projectionUserTicket.setEnabled(true);
					projectionUserTicket.setApproved(true);
					
					invitedIndex++;
					
					movieUserTicketRepository.save(projectionUserTicket);

					
				}
				
			}
			
			

			SimpleMailMessage registrationEmail = new SimpleMailMessage();
			registrationEmail.setTo(usernameFromToken);
			registrationEmail.setSubject("Ticket reservation confirmation");
			registrationEmail.setText("You have reserved ticked for the following projection:\n" + "Title: "
					+ movieReservationDTO.getMovieName() + " \n" + "Date: " + movieReservationDTO.getDate() + " \n"
					+ "Time: " + movieReservationDTO.getTime() + " \n" + "Place: " + movieReservationDTO.getPlace() + " \n"
					+ "Seats reserved: " + movieReservationDTO.getSeatsTaken() + " \n");
			registrationEmail.setFrom("noreply@domain.com");

			emailService.sendEmail(registrationEmail);

			return true;
			
		} catch(Exception e)
		{
			System.out.println("Usao u catch!!!!!! transactional");
			System.out.println(e);
			return false;
		}
		
	}



	@Override
	public Boolean addTheatre(Theatre t) {
		try {
			theatreRepository.save(t);
			return true;
		}catch (Exception e) {
			e.printStackTrace();
			System.out.println("Error occured");
			return false;
		}
		
	}


	@Override
	public Boolean addProjection(Projection projekcija, Long playid, Long theatreid) {
		java.util.Date date = new java.util.Date();
		Date sqlDate = new java.sql.Date(date.getTime());
		if (projekcija.getDate().before((java.sql.Date) sqlDate)){
			System.out.println("Eroooor");
			return true;
		}
		try {

			List<Projection> projekcijePoz = theatreRepository.findOneById(theatreid).getProjekcije();
			if (projekcijePoz==null) {
				projekcijePoz = new ArrayList<>();
			}
			
			projectionRepository.saveAndFlush(projekcija);
			projekcijePoz.add(projekcija);
			Theatre t = theatreRepository.findOneById(theatreid);
			t.setProjekcije(projekcijePoz);
			theatreRepository.save(t);
			theatreRepository.flush();
			
			List<Projection> projekcijePred = playRepository.findOne(playid).getProjekcije();
			System.out.println(")))"+projekcijePred); 
			if (projekcijePred==null) {
				projekcijePred = new ArrayList<>();
			}
			projekcijePred.add(projekcija);
			
			Play pl = playRepository.findOne(playid);
			pl.setProjekcije(projekcijePred);
			playRepository.save(pl);
			playRepository.flush();
			return true;
			
			
			
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
		

	}

	@Override
	public boolean setTicketToSold(Long ticketid) {
		// TODO Auto-generated method stub
		return false;
	}



}
