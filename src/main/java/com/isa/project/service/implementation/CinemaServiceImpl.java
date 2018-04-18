package com.isa.project.service.implementation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import com.isa.project.bean.Cinema;
import com.isa.project.bean.Movie;
import com.isa.project.bean.Projection;
import com.isa.project.bean.Ticket;
import com.isa.project.repository.CinemaRepository;
import com.isa.project.repository.MovieRepository;
import com.isa.project.repository.ProjectionRepository;
import com.isa.project.repository.TicketRepository;
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
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
				
		return true;
	}


	@Override
	public List<Movie> getMovies(String name) {
		// TODO Auto-generated method stub
		List<Projection> projekcije = cinemaRepository.findOneByName(name).getProjekcije();
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


	@Override
	public Cinema addProjection(Projection projekcija, Long movieid, Long cinemaid) {
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
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.");
			e.printStackTrace();
			return null;
		}
		
		
		return cinemaRepository.findOneById(cinemaid);
	}


	@Override
	public Boolean changeTicket(Ticket ticket, Long cinemaid) {
		
		Cinema c = cinemaRepository.findOneById(cinemaid);
		List<Ticket> listaKarata = new ArrayList<>();

		Ticket t = ticketRepository.findOneById(ticket.getId());
		t.setSalePrice(100); // make parameter
		t.setFastRes(true);
		
		try {
			ticketRepository.flush();
		}catch(Exception e) {
			
		}
		return true;
	}

	public Projection getProjection(Long projectionId) {
		
		return projekcijaRepository.findOneById(projectionId);
	}


	@Override
	public boolean makeReservation(MovieReservationDTO movieReservationDTO, String username) {
		
		Projection projection = projekcijaRepository.findOneById(movieReservationDTO.getProjectionId());
		
		for(int i=0; i<movieReservationDTO.getSeatsTaken().size(); i++)
		{
			projection.getTickets().add(
					new Ticket(
							movieReservationDTO.getSeatsTaken().get(i), false, (int)projection.getPrice(), true, false));
		}
		
		projekcijaRepository.save(projection);
		
		//TODO : obelezi ko je kupio kartu !!!
		
		SimpleMailMessage registrationEmail = new SimpleMailMessage();
		registrationEmail.setTo(username);
		registrationEmail.setSubject("Ticket reservation confirmation");
		registrationEmail.setText("You have reserved ticked for the following projection:\n"
		+ "Title: " + movieReservationDTO.getMovieName() + " \n"
		+ "Date: " + movieReservationDTO.getDate() + " \n"
		+ "Time: " + movieReservationDTO.getTime() + " \n"
		+ "Place: " + movieReservationDTO.getPlace() + " \n"
		+ "Seats reserved: " + movieReservationDTO.getSeatsTaken() + " \n");
		registrationEmail.setFrom("noreply@domain.com");

		emailService.sendEmail(registrationEmail);
		

		
		return true;
	}


	@Override
	public boolean setTicketToSold(Long ticketid) {
		Ticket t = ticketRepository.findOneById(ticketid);
		t.setSold(true);
		
		try {
			ticketRepository.flush();

		}catch(Exception e) {
			
		}
		return true;
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


	

	



}
