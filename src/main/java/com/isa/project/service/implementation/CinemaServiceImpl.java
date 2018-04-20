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
import com.isa.project.bean.Movie;
import com.isa.project.bean.Projection;
import com.isa.project.bean.ProjectionSeats;
import com.isa.project.bean.ProjectionUserTicket;
import com.isa.project.bean.ProjectionUserTicketId;
import com.isa.project.bean.Ticket;
import com.isa.project.bean.User;
import com.isa.project.repository.CinemaRepository;
import com.isa.project.repository.FriendRepository;
import com.isa.project.repository.MovieRepository;
import com.isa.project.repository.ProjectionRepository;
import com.isa.project.repository.ProjectionSeatsRepository;
import com.isa.project.repository.ProjectionUserTicketRepository;
import com.isa.project.repository.TicketRepository;
import com.isa.project.repository.UserRepository;
import com.isa.project.service.CinemaService;
import com.isa.project.web.dto.MovieReservationDTO;

@Service
public class CinemaServiceImpl implements CinemaService{
	
	
	@Autowired
	private CinemaRepository cinemaRepository;
	

	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private ProjectionRepository projekcijaRepository;

	@Autowired
	private TicketRepository ticketRepository;

	@Autowired
	private EmailService emailService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ProjectionUserTicketRepository movieUserTicketRepository;
	
	@Autowired
	private ProjectionRepository projectionRepository;
	
	@Autowired
	private FriendRepository friendRepository;
	
	@Autowired
	private ProjectionSeatsRepository projectionSeatsRepository;
	
	@Override
	public ArrayList<Cinema> getAllCinemas() {
		
		return cinemaRepository.findAll();
	}


	@Override
	public Boolean editCinema(Cinema cinema) {
		
		try {
			Cinema c = cinemaRepository.findOne(cinema.getId());
			c.setName(cinema.getName());
			c.setDescription(cinema.getDescription());
			c.setAddress(cinema.getAddress());
			c.setId(cinema.getId());
			
			cinemaRepository.flush();
			return true;
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
				
	
	}


	@Override
	public List<Movie> getMovies(Long id) {
		// TODO Auto-generated method stub
		List<Projection> projekcije = cinemaRepository.findOneById(id).getProjekcije();
		List<Movie> filmovi = movieRepository.findAll();
		List<Movie> filmoviUBioskopu = new ArrayList<>();
		
		for (Movie m: filmovi) {
			for (Projection p: m.getProjekcije()) {
				if (!filmoviUBioskopu.contains(m)) {
					for (int i =0; i<projekcije.size(); i++) {
						if (projekcije.get(i).getId().equals(p.getId())) {
							filmoviUBioskopu.add(m);
						}
					}		
					
				}
			}
		}
		
		return filmoviUBioskopu;
	}


	@Override
	public Cinema getCinemaById(Long id) {
		return cinemaRepository.findOneById(id);
	}


	@Override
	public Boolean deleteMovie(Long movieid, Long cinemaid) {
		Movie m = new Movie();
		m =  movieRepository.findOneById(movieid);
		Cinema c = new Cinema();
		c = cinemaRepository.findOneById(cinemaid);
		
		try {
			cinemaRepository.flush();
			movieRepository.delete(m);
			movieRepository.flush();
			
			
		}catch (Exception e) {
			return false;

		}
		return true;
	}


	@Override
	public Boolean deleteProjection(Long movieid, Long projectionid, Long cinemaid) {
		
		Cinema c = cinemaRepository.findOneById(cinemaid);
		Movie m = movieRepository.findOne(movieid);
		Projection p = projekcijaRepository.findOneById(projectionid);
		c.getProjekcije().remove(p); 
		m.getProjekcije().remove(p);
		
		
		projekcijaRepository.delete(p);
		cinemaRepository.flush();
		projekcijaRepository.flush();
		movieRepository.flush();
		
		return true;
	}


	@Override
	public Boolean editProjection(Projection projekcija) {
		java.util.Date date = new java.util.Date();
		Date sqlDate = new java.sql.Date(date.getTime());
		if (projekcija.getDate().before((java.sql.Date) sqlDate)){
			System.out.println("Eroooor");
			return false;
		}
		try {
			projekcijaRepository.findOneById(projekcija.getId()).setDate(projekcija.getDate());
			projekcijaRepository.findOneById(projekcija.getId()).setPlace(projekcija.getPlace());
			projekcijaRepository.findOneById(projekcija.getId()).setPrice(projekcija.getPrice());
			projekcijaRepository.findOneById(projekcija.getId()).setTime(projekcija.getTime());
			
			projekcijaRepository.flush();
		} catch (Exception e) {
			System.out.println("Error!");
			return false;
		}
		return true;
	}

// TODO: IVANE AKO OVO ZABORAVIS SVE JE PROPALO !!! 
	@Override
	public Boolean addProjection(Projection projekcija, Long movieid, Long cinemaid) {
		java.util.Date date = new java.util.Date();
		Date sqlDate = new java.sql.Date(date.getTime());
		if (projekcija.getDate().before((java.sql.Date) sqlDate)){
			System.out.println("Eroooor");
			return false;
		}
		try {
			
			List<Projection> projekcijeBioskop = cinemaRepository.findOneById(cinemaid).getProjekcije();
			if (projekcijeBioskop==null) {
				projekcijeBioskop = new ArrayList<>();
			}
			projekcijeBioskop.add(projekcija);
			cinemaRepository.findOneById(cinemaid).setProjekcije(projekcijeBioskop);
			cinemaRepository.flush();
			
			List<Projection> projekcijeFilmovi = movieRepository.findOneById(movieid).getProjekcije();
			if (projekcijeFilmovi==null) {
				projekcijeFilmovi = new ArrayList<>();
			}
			projekcijeFilmovi.add(projekcija);
			movieRepository.findOneById(movieid).setProjekcije(projekcijeFilmovi);
			movieRepository.flush();
			
			
			
			projekcijaRepository.saveAndFlush(projekcija);
			
			
			// FOR TRANSACTIONAL RESERVATION OF TICKET
			Projection p = movieRepository.findOne(movieid).getProjekcije().get(movieRepository.findOne(movieid).getProjekcije().size()-1);
	
			for(int i=1; i<85; i++)
			{
				ProjectionSeats ps = new ProjectionSeats(i, p.getId(), movieid);
				projectionSeatsRepository.save(ps);
			}
			
			return true;
			
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
		
		
		
	}


	
	@Override
	@Transactional(readOnly=false, propagation = Propagation.REQUIRES_NEW)
	public boolean makeReservation(MovieReservationDTO movieReservationDTO, String username) {
		
		System.out.println("Make reservation servis + ");
		System.out.println(movieReservationDTO.getSeats());
		System.out.println(movieReservationDTO);
		
		
		try {
			
			// TRANSACTIONAL PROVERA 
			for(ProjectionSeats projectionSeat : movieReservationDTO.getSeats())
			{
				System.out.println("Evo me u makeres + " + projectionSeat.getVersion());
				projectionSeat.setSeatTaken(true);
				projectionSeatsRepository.save(projectionSeat);
				
			}
			
			
			Projection projection = projectionRepository.findOneById(movieReservationDTO.getProjectionId());
			User u = userRepository.findByUsername(username).get();
			
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
			
			projectionUserTicket1.setMovie(true);
			projectionUserTicket1.setEnabled(false);
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
					
					projectionUserTicket.setMovie(true);
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
					
					projectionUserTicket.setMovie(true);
					projectionUserTicket.setEnabled(false);
					projectionUserTicket.setApproved(true);
					
					invitedIndex++;
					
					movieUserTicketRepository.save(projectionUserTicket);

					
				}
				
			}
			
			

			SimpleMailMessage registrationEmail = new SimpleMailMessage();
			registrationEmail.setTo(username);
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
	@Transactional(readOnly=false, propagation = Propagation.REQUIRES_NEW)
	public boolean setTicketToSold(Ticket t, String username, Long projectionId) {

		try {
			
			t.setSold(true);
			System.out.println("Usao u ticket transtaciontal 1  before save" + t.getVersion());
			ticketRepository.save(t);
			ticketRepository.flush();
			
			
			
			ProjectionUserTicket put = 
					new ProjectionUserTicket(
							new ProjectionUserTicketId(projectionId,
									userRepository.findByUsername(username).get().getId(),
									t.getId()));
			
			put.setApproved(true);
			
			movieUserTicketRepository.save(put);
			
			System.out.println("Usao u ticket transtaciontal 2" + t.getVersion());
			
			return true;

		}catch(Exception e) {
			System.out.println(e);
			e.printStackTrace();
			
			return false;
			
		}
		
	}


	@Override
	public boolean setTicketToDeleted(Projection projection, String seat) {
		Ticket t = new Ticket(Integer.parseInt(seat), false, 0, false, true);
		ticketRepository.save(t);
		Projection p = projekcijaRepository.findOne(projection.getId());
		List<Ticket> listaKarata;
		if (p.getTickets() == null) {
			listaKarata = new ArrayList<>();
		}else {
			listaKarata  = p.getTickets();
		}
		listaKarata.add(t);
			
		p.setTickets(listaKarata);
		projekcijaRepository.saveAndFlush(p);
		return false;
	}


	@Override
	public boolean addTicketToFast(String price, String seat, Long cinemaid, Long movieid, Long projectionid) {
		

		Projection p = projekcijaRepository.findOneById(projectionid);
		List<Ticket> listaKarata;
		if (p.getTickets()==null) {
			listaKarata = new ArrayList<>();
			Ticket t = new Ticket(Integer.parseInt(seat), true, Integer.parseInt(price), false, false );
			try{
				ticketRepository.save(t);
			} catch (Exception e) {
				System.out.println("Constraints violated!");
			}
			
			listaKarata.add(t);
		}else {
			listaKarata = p.getTickets();
			for (Ticket t1: listaKarata) {
				if (t1.getSeatNumber()==Integer.parseInt(seat)) {
					System.out.println("Forbidden!");
					return false;
				}
			}
			
			Ticket t = new Ticket(Integer.parseInt(seat), true, Integer.parseInt(price), false, false );
			try{
				ticketRepository.save(t);
			} catch (Exception e) {
				System.out.println("Constraints violated!");
			}
			
			listaKarata.add(t);
			
		}
		projekcijaRepository.save(p);
		return true;
	}


	@Override
	public boolean deleteTicket(Long ticketid) {
		Ticket t = ticketRepository.findOneById(ticketid);
		t.setFastRes(false);
		try {
			ticketRepository.save(t);
			return true;
			
		}catch(Exception e) {
			System.out.println("Exception occured while deleting from fast res");
			return false;
		}

	}


	@Override
	public ArrayList<Cinema> findByNameContaining(String cinema) {
	
		
		
		return cinemaRepository.findByNameContaining(cinema);
	}


	@Override
	public ArrayList<Projection> getPlayDates(int movieId) {
		// TODO Auto-generated method stub
		return movieRepository.findProjectionsByMovieId((long) movieId);
	}


	@Override
	public Boolean addCinema(Cinema c) {
		try {
			this.cinemaRepository.save(c);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			System.out.println("error occured");
			return false;
		}
		
	}


	@Override
	public Projection getProjection(Long projectionId) {
		// TODO Auto-generated method stub
		return null;
	}


	

	



}
