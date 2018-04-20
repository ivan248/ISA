package com.isa.project.web.rest;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.isa.project.bean.Cinema;
import com.isa.project.bean.Movie;
import com.isa.project.bean.Play;
import com.isa.project.bean.Projection;
import com.isa.project.bean.ProjectionSeats;
import com.isa.project.bean.Theatre;
import com.isa.project.bean.Ticket;
import com.isa.project.bean.User;
import com.isa.project.repository.CinemaRepository;
import com.isa.project.repository.MovieRepository;
import com.isa.project.repository.PlayRepository;
import com.isa.project.repository.ProjectionRepository;
import com.isa.project.repository.ProjectionSeatsRepository;
import com.isa.project.repository.TheatreRepository;
import com.isa.project.repository.UserRepository;
import com.isa.project.security.jwt.TokenProvider;
import com.isa.project.service.CinemaService;
import com.isa.project.service.TheatreService;
import com.isa.project.service.UserService;
import com.isa.project.web.Converter;
import com.isa.project.web.dto.CinemaDTO;
import com.isa.project.web.dto.MovieReservationDTO;
import com.isa.project.web.dto.TheatreDTO;



@Controller // This means that this class is a Controller
@CrossOrigin
@RequestMapping(value = "/api/home") // This means URL's start with /home	
public class HomeController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired 
	private TheatreService theatreService;
	
	@Autowired 
	private CinemaService cinemaService;
	

	@Autowired 
	private TheatreRepository theatreRepository;
	
	@Autowired 
	private MovieRepository movieRepository;
	
	@Autowired 
	private CinemaRepository cinemaRepository;
	
	@Autowired 
	private ProjectionRepository projectionRepository;
	


	@Autowired
	private PlayRepository playRepository;
	

	@Autowired
	private UserService userService;
	
	
	@Autowired
	private ProjectionSeatsRepository projectionSeatsRepository;

	
	@RequestMapping(value = "/getTheatres", method = RequestMethod.GET,
			produces="application/json")
	public ResponseEntity<ArrayList<Theatre>> getThetres(){
		ArrayList<Theatre> listaPozorista = new ArrayList<>();
		listaPozorista = theatreService.getAllTheatres();
		return new ResponseEntity<>(listaPozorista, HttpStatus.OK);
		
	}

	@RequestMapping(value = "/getCinemas", method = RequestMethod.GET,
			produces="application/json")
	public ResponseEntity<ArrayList<Cinema>> getCinemas(){
		ArrayList<Cinema> listaBioskopa = new ArrayList<>();
		listaBioskopa = cinemaService.getAllCinemas();
		System.out.println(listaBioskopa);
		return new ResponseEntity<>(listaBioskopa, HttpStatus.OK);
		
	}
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value = "/editCinema", method = RequestMethod.GET,
			produces="application/json")
	public ResponseEntity editCinema(@RequestBody Cinema cinema){
		
		System.out.println("Edit cinema");
		ArrayList<Cinema> listaBioskopa = new ArrayList<>();
		listaBioskopa = cinemaService.getAllCinemas();
		System.out.println(listaBioskopa);
		return new ResponseEntity<>(cinema, HttpStatus.OK);
		
	}
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value = "/editTheatre", method = RequestMethod.GET,
			produces="application/json")
	public ResponseEntity<Theatre> editTheatre(@RequestBody Theatre theatre){

		ArrayList<Theatre> listaPozorista= new ArrayList<>();
		listaPozorista = theatreService.getAllTheatres();
		System.out.println(listaPozorista);
		return new ResponseEntity<>(theatre, HttpStatus.OK);
		
	}
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value="/editC", method = RequestMethod.POST) 
	public ResponseEntity editCinemaPost(@RequestBody Cinema cinema) {
		System.out.println("Editovanje");
		return new ResponseEntity<>(cinemaService.editCinema(cinema), HttpStatus.OK);
	}
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value="/editTh", method = RequestMethod.POST) 
	public ResponseEntity editTheatrePost(@RequestBody Theatre theatre) {
		System.out.println("Editovanje");
		return new ResponseEntity<>(theatreService.editTheatre(theatre), HttpStatus.OK);
	}
	
	
	@GetMapping
	@RequestMapping(value = "/getMovies")
	public ResponseEntity getMovies(
			@RequestParam("cinema") String cinemaId) {

		Cinema c = new Cinema();
		c = cinemaService.getCinemaById(Long.parseLong(cinemaId));
		return new ResponseEntity(cinemaService.getMovies(Long.parseLong(cinemaId)), HttpStatus.OK);

	}
	
	

	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value = "/deleteMovie", method = RequestMethod.DELETE,
			produces="application/json", consumes="application/json")
	public ResponseEntity deleteMovie(
			@RequestParam("movieid") String movieId, @RequestParam("cinemaid") String cinemaId ) {

		Cinema c = new Cinema();
		c = cinemaService.getCinemaById(Long.parseLong(cinemaId));
		System.out.println("Foreign key constraint");
		//cinemaService.deleteMovie(Long.parseLong(movieId), Long.parseLong(cinemaId));
		return new ResponseEntity(cinemaService.getMovies(Long.parseLong(cinemaId)), HttpStatus.FORBIDDEN);

	}
	
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value = "/deleteProjection", method = RequestMethod.DELETE,
	produces="application/json", consumes="application/json")
	public ResponseEntity deleteProjection(
	@RequestParam("movieid") String movieid, @RequestParam("projekcijaid") String projekcijaid, @RequestParam("cinemaid") String cinemaid ) {


		Cinema c = new Cinema();
		c = cinemaService.getCinemaById(Long.parseLong(cinemaid));
		cinemaService.deleteProjection(Long.parseLong(movieid), Long.parseLong(projekcijaid), Long.parseLong(cinemaid));
		
		return new ResponseEntity(cinemaService.getMovies(Long.parseLong(cinemaid)), HttpStatus.OK);
	}
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value = "/deleteProjectionTheatre", method = RequestMethod.DELETE,
			produces="application/json", consumes="application/json")
			public ResponseEntity deleteProjectionTheatre(
			@RequestParam("playid") String playid, @RequestParam("projekcijaid") String projekcijaid, @RequestParam("theatreid") String theatreid ) {


				Theatre t = theatreRepository.findOneById(Long.parseLong(theatreid));
				theatreService.deleteProjection(Long.parseLong(playid), Long.parseLong(projekcijaid), Long.parseLong(theatreid));
				
				return new ResponseEntity(theatreService.getAllPlays(Long.parseLong(theatreid)), HttpStatus.OK);
			}
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value="/editProjection", method = RequestMethod.POST) 
	public ResponseEntity editProjection(@RequestBody Projection projekcija) {
		System.out.println("Editovanje"+projekcija);
		
		return new ResponseEntity<>(cinemaService.editProjection(projekcija), HttpStatus.OK);
	}
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value="/addProjection", method = RequestMethod.POST) 
	public ResponseEntity addProjection(@RequestBody Projection projekcija, @RequestParam("movieid") String movieid, @RequestParam("cinemaid") String cinemaid) {
		
		return new ResponseEntity<>(cinemaService.addProjection(projekcija, Long.parseLong(movieid), Long.parseLong(cinemaid)), HttpStatus.OK);
	}
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value="/addProjectionTheatre", method = RequestMethod.POST) 
	public ResponseEntity addProjectionT(@RequestBody Projection projekcija, @RequestParam("playid") String playid, @RequestParam("theatreid") String theatreid) {
	
		return new ResponseEntity<>(theatreService.addProjection(projekcija, Long.parseLong(playid), Long.parseLong(theatreid)), HttpStatus.OK);
	}
	

	
	@GetMapping
	@RequestMapping(value = "/getProjectionById")
	public ResponseEntity<Projection> getProjectionById(
			@RequestParam("projectionId") Long projectionId) {

		return new ResponseEntity<Projection>(cinemaService.getProjection(projectionId),HttpStatus.OK);

	}
	

	@GetMapping
	@RequestMapping(value = "/getFastProjectionTicketsCinema")
	public ResponseEntity getFastProjectionsByCinemaId(
			@RequestParam("cinemaid") String cinemaid) {

		System.out.println(cinemaid);
		Cinema c  = cinemaService.getCinemaById(Long.parseLong(cinemaid));
		List<Ticket> ResTickets = new ArrayList<>();
		for (Projection p: c.getProjekcije()) {
			System.out.println(p);
			for (Ticket t: p.getTickets()) {
				if (!t.isFastRes() && !t.isSold() && !t.isDeleted()){
					ResTickets.add(t);
				}

			}
		}
		
		System.out.println(ResTickets);
		return new ResponseEntity(ResTickets, HttpStatus.OK);

	}
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value="/addProjectionToFast", method = RequestMethod.POST) 
	public ResponseEntity addTicketToFast(@RequestBody Ticket ticket, @RequestParam("cinemaid") String cinemaid) {
		return new ResponseEntity<>(cinemaService.changeTicket(ticket, Long.parseLong(cinemaid)) ,HttpStatus.OK);
	}
	
	

	@PostMapping
	@RequestMapping(value = "/makeCinemaReservation", consumes = "application/json")
	public ResponseEntity makeCinemaReservation(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestBody MovieReservationDTO movieReservationDTO) {

		TokenProvider p = new TokenProvider();
		
		System.out.println("pogodio makecinema reservation controller");


		if(cinemaService.makeReservation(movieReservationDTO, p.getUsernameFromToken(token)))
			return new ResponseEntity<>(HttpStatus.OK);

		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}
	
//	@RequestMapping(value = "/sendFriendTheatreInvitation", consumes = "application/json")
//	public ResponseEntity sendFriendTheatreInvitation(@RequestHeader(value = "X-Auth-Token") String token,
//			@RequestBody MovieReservationDTO movieReservationDTO,
//			@RequestParam("friendId") String friendId) {
//
//		TokenProvider p = new TokenProvider();
//
//		if(theatreService.sendFriendTheatreInvitation(movieReservationDTO, Integer.parseInt(friendId)))
//			return new ResponseEntity<>(HttpStatus.OK);
//
//		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//	}
	
	
	
	
	@PostMapping
	@RequestMapping(value = "/makeTheatreReservation", consumes = "application/json")
	public ResponseEntity makeTheatreReservation(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestBody MovieReservationDTO movieReservationDTO) {

		TokenProvider p = new TokenProvider();

		System.out.println("pogodio maketheartre reservation controller");
		
		if(theatreService.makeReservation(movieReservationDTO, p.getUsernameFromToken(token)))
			return new ResponseEntity<>(HttpStatus.OK);

		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}
	

	@RequestMapping(value="/reserveFast", method = RequestMethod.POST) 
	public ResponseEntity reserveFast(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestBody Ticket t,
			@RequestParam("ticketid") String ticketid,
			@RequestParam("projectionId") String projectionId) {
		
		TokenProvider p = new TokenProvider();
		
		if(cinemaService.setTicketToSold(t, p.getUsernameFromToken(token), (long)Integer.parseInt(projectionId)))
			return new ResponseEntity<>(HttpStatus.OK);
		
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}
	


	@GetMapping
	@RequestMapping(value = "/searchTheatres")
	public ResponseEntity searchTheatres(
			@RequestParam("theatre") String theatre) {
		
		
		return new ResponseEntity<>(theatreService.findByNameContaining(theatre),HttpStatus.OK);
	}
	
	@GetMapping
	@RequestMapping(value = "/searchCinemas")
	public ResponseEntity searchCinemas(
			@RequestParam("cinema") String cinema) {
		
		System.out.println(cinemaService.findByNameContaining(cinema));
		
		return new ResponseEntity<>(cinemaService.findByNameContaining(cinema),HttpStatus.OK);
	}
	

	
	@GetMapping
	@RequestMapping(value = "/getPlays")
	public ResponseEntity getPlays(
			@RequestParam("theatreId") String theatreId) {
			
		return new ResponseEntity<>(theatreService.getPlays(Integer.parseInt(theatreId)),HttpStatus.OK);
	}
	
	
	@GetMapping
	@RequestMapping(value = "/getPlayDates")
	public ResponseEntity getPlayDates(
			@RequestParam("playId") String playId) {
			
		return new ResponseEntity<>(theatreService.getPlayDates(Integer.parseInt(playId)),HttpStatus.OK);
	}
	
	@GetMapping
	@RequestMapping(value = "/getMovieDates")
	public ResponseEntity getMovieDates(
			@RequestParam("movieId") String movieId) {
			
		return new ResponseEntity<>(cinemaService.getPlayDates(Integer.parseInt(movieId)),HttpStatus.OK);
	}
	
	
	

	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value="/deleteSeats", method = RequestMethod.POST) 
	public ResponseEntity deleteSeats(@RequestBody Projection projection, @RequestParam("seat") String seat) {
		System.out.println(projection.getId());
		System.out.println(seat);
		cinemaService.setTicketToDeleted(projection, seat);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value="/addFastTicket", method = RequestMethod.POST) 
	public ResponseEntity addFastTicket(@RequestBody Projection projection, @RequestParam("seat") String seat, 
			@RequestParam("price") String price, @RequestParam("cid") String cid, @RequestParam("mid") String mid) {
		System.out.println("PROJEKCIJA ID"+projection.getId());
		System.out.println("SEAT "+seat);
		System.out.println(price);
		cinemaService.addTicketToFast(price, seat, Long.parseLong(cid), Long.parseLong(mid), projection.getId());
	return new ResponseEntity<>(HttpStatus.OK);
	}
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value="/deleteFast", method = RequestMethod.POST) 
	public ResponseEntity deleteFast(@RequestParam("ticketid") String ticketid) {
		return new ResponseEntity<>(cinemaService.deleteTicket(Long.parseLong(ticketid)) ,HttpStatus.OK);
	}

	
	@GetMapping(value="/getcinema")
	public ResponseEntity<Cinema> getCinema(@RequestHeader("X-Auth-Token") String token, @RequestParam("id") int id) {
		return new ResponseEntity<Cinema>(cinemaService.getCinemaById(new Long(id)),HttpStatus.OK);
	}
	
	@GetMapping(value="/gettheatre")
	public ResponseEntity<Theatre> getTheatre(@RequestHeader("X-Auth-Token") String token, @RequestParam("id") int id) {
		return new ResponseEntity<Theatre>( theatreRepository.findOneById((long)id) ,HttpStatus.OK);
	}
	

	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN')")
	@PostMapping("/addtheatre")
	public ResponseEntity<Boolean> addTheatre(@RequestHeader("X-Auth-Token") String token, @RequestBody TheatreDTO t) {
		
		
		TokenProvider p = new TokenProvider();
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		
		Theatre theatre = Converter.convertTheatreDTO(t);
		
		Boolean b = theatreService.addTheatre(theatre);
		
		if (b) {
			return new ResponseEntity<Boolean>(true,HttpStatus.OK);
		} else {
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		}
		
		
	}
	
	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN')")
	@PostMapping("/addcinema")
	public ResponseEntity<Boolean> addCinema(@RequestHeader("X-Auth-Token") String token, @RequestBody CinemaDTO c) {
		
		TokenProvider p = new TokenProvider();
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		
		Cinema cinema = Converter.convertCinemaDTO(c);
		
		Boolean b = cinemaService.addCinema(cinema);
		
		if (b) {
			return new ResponseEntity<Boolean>(true,HttpStatus.OK);
		} else {
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		}
		
	}	

	@GetMapping(value="/getProjectionSeats")
	public ResponseEntity getProjectionSeats(@RequestHeader("X-Auth-Token") String token,
			@RequestParam("projectionId") String projectionId,
			@RequestParam("movieORplayId") String movieORplayId) {
		
		
		System.out.println("pogodio getprojseats");
		System.out.println(projectionSeatsRepository.findByProjectionIdAndMovieId(
						(long)Integer.parseInt(projectionId), (long)Integer.parseInt(movieORplayId)) );
		
		return new ResponseEntity( 
				projectionSeatsRepository.findByProjectionIdAndMovieId(
						(long)Integer.parseInt(projectionId), (long)Integer.parseInt(movieORplayId)) 
				,HttpStatus.OK);
	}
	
	@PostMapping
	@RequestMapping(value = "/reserveSeat", consumes = "application/json")
	public ResponseEntity reserveSeat(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestBody ProjectionSeats projectionSeat) {

		TokenProvider p = new TokenProvider();

		System.out.println("pogodio reserveSeat");
		
		if(userService.makeReservation(projectionSeat))
			return new ResponseEntity<>(HttpStatus.OK);

		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

	}
	@PreAuthorize("hasAuthority('ADMIN')")
	@PostMapping
	@RequestMapping(value = "/addmovie", consumes = "application/json")
	public ResponseEntity addMovie(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestBody Movie movie, @RequestParam("cinemaid") String cinemaid) {

		System.out.println(movie);
		Projection defaultP = new Projection();
		defaultP.setPlace("0");
		defaultP.setPrice(0);
		java.util.Date date = new java.util.Date();
		Date sqlDate = new java.sql.Date(date.getTime());
		defaultP.setDate((java.sql.Date) sqlDate);
		defaultP.setTime("18:00");
		projectionRepository.save(defaultP);
		List<Projection> listaProjekcija = new ArrayList<>();
		listaProjekcija.add(defaultP);
		movie.setProjekcije(listaProjekcija);
		movieRepository.save(movie);
		Cinema c = cinemaRepository.findOneById(Long.parseLong(cinemaid));
		List<Projection> listaprojekcija2;
		if (c.getProjekcije()==null) {
			listaprojekcija2 = new ArrayList<>();
		}else
		{
			listaprojekcija2 = c.getProjekcije();
		}
		listaprojekcija2.add(defaultP);
		c.setProjekcije(listaprojekcija2);
		cinemaRepository.save(c);
		return new ResponseEntity<>(HttpStatus.OK);

	}
	@PreAuthorize("hasAuthority('ADMIN')")
	@PostMapping
	@RequestMapping(value = "/addplay", consumes = "application/json")
	public ResponseEntity addPlay(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestBody Play play, @RequestParam("theatreid") String theatreid) {

		System.out.println(play);
		Projection defaultP = new Projection();
		defaultP.setPlace("0");
		defaultP.setPrice(0);
		java.util.Date date = new java.util.Date();
		Date sqlDate = new java.sql.Date(date.getTime());
		defaultP.setDate((java.sql.Date) sqlDate);
		defaultP.setTime("00");
		projectionRepository.save(defaultP);
		List<Projection> listaProjekcija = new ArrayList<>();
		listaProjekcija.add(defaultP);
		play.setProjekcije(listaProjekcija);
		playRepository.save(play);
		Theatre t = theatreRepository.findOneById(Long.parseLong(theatreid));
		List<Projection> listaprojekcija2;
		if (t.getProjekcije()==null) {
			listaprojekcija2 = new ArrayList<>();
		}else
		{
			listaprojekcija2 = t.getProjekcije();
		}
		listaprojekcija2.add(defaultP);
		t.setProjekcije(listaprojekcija2);
		theatreRepository.save(t);
		return new ResponseEntity<>(HttpStatus.OK);

	}
	
	
	@GetMapping
	@RequestMapping(value = "/getAllPlays")
	public ResponseEntity getAllPlays(
			@RequestParam("theatreId") String theatreId) {
			
		return new ResponseEntity<>(theatreService.getAllPlays(Long.parseLong(theatreId)),HttpStatus.OK);
	}
	
	
	
	
	
}
