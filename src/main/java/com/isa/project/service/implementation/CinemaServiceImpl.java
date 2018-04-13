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
		System.out.println("Editovanje bioskopa.");
		System.out.println("cinema: "+cinema.getName());
		try {
			Cinema c = cinemaRepository.findOne(cinema.getId());
			c.setName(cinema.getName());
			c.setDescription(cinema.getDescription());
			c.setAddress(cinema.getAddress());
			c.setId(cinema.getId());
			
			
			cinemaRepository.flush();
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.********");
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
		// TODO Auto-generated method stub
		return cinemaRepository.findOneById(id);
	}


	@Override
	public Boolean deleteMovie(Long movieid, Long cinemaid) {
		// TODO Auto-generated method stub
		Movie m = new Movie();
		m =  movieRepository.findOneById(movieid);
		Cinema c = new Cinema();
		c = cinemaRepository.findOneById(cinemaid);
		
		try {
			//c.getMovies().remove(m); 
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
		//for (Projection p: c.getProjekcije()) {
		//	for (Ticket tt: p.getTickets()) {
		//		if (tt.getId()==ticket.getId()) {
					//tt.setSalePrice(100);
					//tt.setFastRes(true);
				//	listaKarata=p.getTickets();
				//	p.setTickets(listaKarata);
				//	List<Projection> listaProjekcija = new ArrayList<>();
				//	c.setProjekcije(listaProjekcija);
			//	}
			//}
		//}
		Ticket t = ticketRepository.findOneById(ticket.getId());
		t.setSalePrice(100);
		t.setFastRes(true);
		
		try {
			ticketRepository.flush();
			//projekcijaRepository.flush();
			//cinemaRepository.flush();
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
							movieReservationDTO.getSeatsTaken().get(i), false, (int)projection.getPrice(), true));
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


	

	



}
