package com.isa.project.web.rest;

import java.util.ArrayList;
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
import com.isa.project.bean.Projection;
import com.isa.project.bean.ProjectionSeats;
import com.isa.project.bean.Theatre;
import com.isa.project.bean.Ticket;
import com.isa.project.bean.User;
import com.isa.project.repository.PlayRepository;
import com.isa.project.repository.ProjectionSeatsRepository;
import com.isa.project.repository.TheatreRepository;
import com.isa.project.security.jwt.TokenProvider;
import com.isa.project.service.CinemaService;
import com.isa.project.service.TheatreService;
<<<<<<< HEAD
import com.isa.project.web.Converter;
import com.isa.project.web.dto.CinemaDTO;
=======
import com.isa.project.service.UserService;
>>>>>>> b8a08ae148a236d90ee9af3b934e6510ef3069d0
import com.isa.project.web.dto.MovieReservationDTO;
import com.isa.project.web.dto.TheatreDTO;



@Controller // This means that this class is a Controller
@CrossOrigin
@RequestMapping(value = "/api/home") // This means URL's start with /home	
public class HomeController {
	
	@Autowired 
	private TheatreService theatreService;
	
	@Autowired 
	private CinemaService cinemaService;
	

	@Autowired 
	private TheatreRepository theatreRepository;
	

	@Autowired
	private PlayRepository playRepository;
	

	@Autowired
	private UserService userService;
	
	
	@Autowired
	private ProjectionSeatsRepository projectionSeatsRepository;

	
	@RequestMapping(value = "/test", method = RequestMethod.POST,
			consumes="application/json",
			produces="application/json")
	public ResponseEntity<User> test(@RequestBody Object uu){
		System.out.println(uu);
		User u = new User();
		return new ResponseEntity<>(u, HttpStatus.OK);
		
	}
	
	//@PreAuthorize("hasAuthority('REGISTERED_USER')")
	@RequestMapping(value = "/getTheatres", method = RequestMethod.GET,
			produces="application/json")
	public ResponseEntity<ArrayList<Theatre>> getThetres(){
		ArrayList<Theatre> listaPozorista = new ArrayList<>();
		listaPozorista = theatreService.getAllTheatres();
		return new ResponseEntity<>(listaPozorista, HttpStatus.OK);
		
	}
	
	//@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value = "/getCinemas", method = RequestMethod.GET,
			produces="application/json")
	public ResponseEntity<ArrayList<Cinema>> getCinemas(){
		ArrayList<Cinema> listaBioskopa = new ArrayList<>();
		listaBioskopa = cinemaService.getAllCinemas();
		System.out.println(listaBioskopa);
		return new ResponseEntity<>(listaBioskopa, HttpStatus.OK);
		
	}
	
	//@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value = "/editCinema", method = RequestMethod.GET,
			produces="application/json")
	public ResponseEntity editCinema(@RequestBody Cinema cinema){
		
		System.out.println("Edit cinema");
		ArrayList<Cinema> listaBioskopa = new ArrayList<>();
		listaBioskopa = cinemaService.getAllCinemas();
		System.out.println(listaBioskopa);
		return new ResponseEntity<>(cinema, HttpStatus.OK);
		
	}
	
	@RequestMapping(value = "/editTheatre", method = RequestMethod.GET,
			produces="application/json")
	public ResponseEntity<Theatre> editTheatre(@RequestBody Theatre theatre){

		ArrayList<Theatre> listaPozorista= new ArrayList<>();
		listaPozorista = theatreService.getAllTheatres();
		System.out.println(listaPozorista);
		return new ResponseEntity<>(theatre, HttpStatus.OK);
		
	}
	

	@RequestMapping(value="/editC", method = RequestMethod.POST) 
	public ResponseEntity editCinemaPost(@RequestBody Cinema cinema) {
		System.out.println("Editovanje");
		return new ResponseEntity<>(cinemaService.editCinema(cinema), HttpStatus.OK);
	}
	
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
		return new ResponseEntity(cinemaService.getMovies(c.getName()), HttpStatus.OK);

	}
	
	

	
	@RequestMapping(value = "/deleteMovie", method = RequestMethod.DELETE,
			produces="application/json", consumes="application/json")
	public ResponseEntity deleteMovie(
			@RequestParam("movieid") String movieId, @RequestParam("cinemaid") String cinemaId ) {

		Cinema c = new Cinema();
		c = cinemaService.getCinemaById(Long.parseLong(cinemaId));
		System.out.println("Foreign key constraint");
		//cinemaService.deleteMovie(Long.parseLong(movieId), Long.parseLong(cinemaId));
		return new ResponseEntity(cinemaService.getMovies(c.getName()), HttpStatus.FORBIDDEN);

	}
	
	
	
	@RequestMapping(value = "/deleteProjection", method = RequestMethod.DELETE,
	produces="application/json", consumes="application/json")
	public ResponseEntity deleteProjection(
	@RequestParam("movieid") String movieid, @RequestParam("projekcijaid") String projekcijaid, @RequestParam("cinemaid") String cinemaid ) {


		Cinema c = new Cinema();
		c = cinemaService.getCinemaById(Long.parseLong(cinemaid));
		cinemaService.deleteProjection(Long.parseLong(movieid), Long.parseLong(projekcijaid), Long.parseLong(cinemaid));
		
		return new ResponseEntity(cinemaService.getMovies(c.getName()), HttpStatus.OK);
	}
	
	@RequestMapping(value="/editProjection", method = RequestMethod.POST) 
	public ResponseEntity editProjection(@RequestBody Projection projekcija) {
		System.out.println("Editovanje"+projekcija);
		
		return new ResponseEntity<>(cinemaService.editProjection(projekcija), HttpStatus.OK);
	}
	
	@RequestMapping(value="/addProjectionCinema", method = RequestMethod.POST) 
	public ResponseEntity addProjection(@RequestBody Projection projekcija, @RequestParam("movieid") String movieid, @RequestParam("cinemaid") String cinemaid) {
		System.out.println("************"+projekcija);
		
		return new ResponseEntity<>(cinemaService.addProjection(projekcija, Long.parseLong(movieid), Long.parseLong(cinemaid)), HttpStatus.OK);
	}
	
/*	@RequestMapping(value="/addProjectionTheatre", method = RequestMethod.POST) 
	public ResponseEntity addProjectionTheatre(@RequestBody Projection projekcija, @RequestParam("playid") String playid, @RequestParam("theatreid") String theatreid) {
		System.out.println("************"+projekcija);
		
		return new ResponseEntity<>(cinemaService.addProjection(projekcija, Long.parseLong(movieid), Long.parseLong(cinemaid)), HttpStatus.OK);
	}*/
	
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
	public ResponseEntity reserveFast(@RequestParam("ticketid") String ticketid) {
		return new ResponseEntity<>(cinemaService.setTicketToSold(Long.parseLong(ticketid)) ,HttpStatus.OK);
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
	
	
	

	
	@RequestMapping(value="/deleteSeats", method = RequestMethod.POST) 
	public ResponseEntity deleteSeats(@RequestBody Projection projection, @RequestParam("seat") String seat) {
		System.out.println(projection.getId());
		System.out.println(seat);
		cinemaService.setTicketToDeleted(projection, seat);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	

	@RequestMapping(value="/addFastTicket", method = RequestMethod.POST) 
	public ResponseEntity addFastTicket(@RequestBody Projection projection, @RequestParam("seat") String seat, 
			@RequestParam("price") String price, @RequestParam("cid") String cid, @RequestParam("mid") String mid) {
		System.out.println("PROJEKCIJA ID"+projection.getId());
		System.out.println("SEAT "+seat);
		System.out.println(price);
		cinemaService.addTicketToFast(price, seat, Long.parseLong(cid), Long.parseLong(mid), projection.getId());
	return new ResponseEntity<>(HttpStatus.OK);
	}
	
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
	
<<<<<<< HEAD
	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN')")
	@PostMapping("/addtheatre")
	public ResponseEntity<Boolean> addTheatre(@RequestHeader("X-Auth-Token") String token, @RequestBody TheatreDTO t) {
		
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
		
		Cinema cinema = Converter.convertCinemaDTO(c);
		
		Boolean b = cinemaService.addCinema(cinema);
		
		if (b) {
			return new ResponseEntity<Boolean>(true,HttpStatus.OK);
		} else {
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		}
		
		
=======
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
>>>>>>> b8a08ae148a236d90ee9af3b934e6510ef3069d0
	}
	
	
}
