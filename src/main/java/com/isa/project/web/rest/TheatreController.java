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
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Cinema;
import com.isa.project.bean.Projection;
import com.isa.project.bean.Theatre;
import com.isa.project.bean.Ticket;
import com.isa.project.bean.User;
import com.isa.project.repository.PlayRepository;
import com.isa.project.repository.TheatreRepository;
import com.isa.project.security.jwt.TokenProvider;
import com.isa.project.service.CinemaService;
import com.isa.project.service.TheatreService;
import com.isa.project.web.dto.MovieReservationDTO;



@RestController // This means that this class is a Controller
@CrossOrigin
@RequestMapping(value = "api/theatres") 	
public class TheatreController {
	
	@Autowired 
	private TheatreService theatreService;
	
	@Autowired 
	private CinemaService cinemaService;
	

	@Autowired 
	private TheatreRepository theatreRepository;
	



	
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
	
	
	
	@RequestMapping(value = "/deleteProjection", method = RequestMethod.DELETE,
	produces="application/json", consumes="application/json")
	public ResponseEntity deleteProjection(
	@RequestParam("movieid") String movieid, @RequestParam("projekcijaid") String projekcijaid, @RequestParam("cinemaid") String cinemaid ) {


		Cinema c = new Cinema();
		c = cinemaService.getCinemaById(Long.parseLong(cinemaid));
		cinemaService.deleteProjection(Long.parseLong(movieid), Long.parseLong(projekcijaid), Long.parseLong(cinemaid));
		
		return new ResponseEntity(cinemaService.getMovies(Long.parseLong(cinemaid)), HttpStatus.OK);

	}
	

	
	@GetMapping
	@RequestMapping(value = "/getProjectionById")
	public ResponseEntity<Projection> getProjectionById(
			@RequestParam("projectionId") Long projectionId) {

		return new ResponseEntity<Projection>(cinemaService.getProjection(projectionId),HttpStatus.OK);

	}
	

	@GetMapping(value = "/getFastProjectionTicketsTheatre")
	public ResponseEntity getFastProjectionsByTheatreId(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestParam("theatreid") String theatreid) {
		System.out.println("(((((((((((("+theatreid);
		Theatre t  = theatreRepository.findOneById(Long.parseLong(theatreid));
		List<Ticket> ResTickets = new ArrayList<>();
		for (Projection p: t.getProjekcije()) {
			System.out.println(p);
			for (Ticket ti: p.getTickets()) {
				if (!ti.isFastRes() && !ti.isSold() && !ti.isDeleted()){
					ResTickets.add(ti);
				}

			}
		}
		
		System.out.println(ResTickets);
		return new ResponseEntity(ResTickets, HttpStatus.OK);

	}
	
	@RequestMapping(value="/addProjectionToFast", method = RequestMethod.POST) 
	public ResponseEntity addTicketToFast(@RequestBody Ticket ticket, @RequestParam("theatreid") String theatreid) {
		return new ResponseEntity<>(cinemaService.changeTicket(ticket, Long.parseLong(theatreid)) ,HttpStatus.OK);
	}
	
	

	@PostMapping
	@RequestMapping(value = "/makeCinemaReservation", consumes = "application/json")
	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN') or hasAuthority('ADMIN') or hasAuthority('FANZONE_ADMIN') or hasAuthority('REGISTERED_USER')")
	public ResponseEntity makeCinemaReservation(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestBody MovieReservationDTO movieReservationDTO) {

		TokenProvider p = new TokenProvider();

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
	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN') or hasAuthority('ADMIN') or hasAuthority('FANZONE_ADMIN') or hasAuthority('REGISTERED_USER')")
	public ResponseEntity makeTheatreReservation(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestBody MovieReservationDTO movieReservationDTO) {

		TokenProvider p = new TokenProvider();

		System.out.println("pogodio maketheartre");
		
		if(theatreService.makeReservation(movieReservationDTO, p.getUsernameFromToken(token)))
			return new ResponseEntity<>(HttpStatus.OK);

		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}
	

/*	@RequestMapping(value="/reserveFast", method = RequestMethod.POST) 
	public ResponseEntity reserveFast(@RequestParam("ticketid") String ticketid) {
		return new ResponseEntity<>(cinemasService.setTicketToSold(Long.parseLong(ticketid)) ,HttpStatus.OK);
	}*/
	


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
			@RequestParam("price") String price, @RequestParam("tid") String tid, @RequestParam("plid") String plid) {
		System.out.println("PROJEKCIJA ID"+projection.getId());
		System.out.println("SEAT "+seat);
		System.out.println(price);
		theatreService.addTicketToFast(price, seat, Long.parseLong(tid), Long.parseLong(plid), projection.getId());
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
	
}
