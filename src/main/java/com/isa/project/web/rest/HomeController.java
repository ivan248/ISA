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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.isa.project.bean.Cinema;
import com.isa.project.bean.Projection;
import com.isa.project.bean.Theatre;
import com.isa.project.bean.Ticket;
import com.isa.project.bean.User;
import com.isa.project.repository.CinemaRepository;
import com.isa.project.security.jwt.TokenProvider;
import com.isa.project.service.CinemaService;
import com.isa.project.service.TheatreService;



@Controller // This means that this class is a Controller
@CrossOrigin
@RequestMapping(value = "/api/home") // This means URL's start with /home	
public class HomeController {
	
	@Autowired 
	private TheatreService theatreService;
	
	@Autowired 
	private CinemaService cinemaService;
	
	
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
	
	@RequestMapping(value="/addProjection", method = RequestMethod.POST) 
	public ResponseEntity addProjection(@RequestBody Projection projekcija, @RequestParam("movieid") String movieid, @RequestParam("cinemaid") String cinemaid) {
		System.out.println("************"+projekcija);
		
		return new ResponseEntity<>(cinemaService.addProjection(projekcija, Long.parseLong(movieid), Long.parseLong(cinemaid)), HttpStatus.OK);
	}
	
	@GetMapping
	@RequestMapping(value = "/getProjectionById")
	public ResponseEntity getProjectionById(
			@RequestParam("projectionId") int projectionId) {

		System.out.println(projectionId);

		return new ResponseEntity(HttpStatus.OK);

	}
	
	@GetMapping
	@RequestMapping(value = "/getFastProjectionTickets")
	public ResponseEntity getFastProjectionsByCinemaId(
			@RequestParam("cinemaid") String cinemaid) {

		System.out.println(cinemaid);
		Cinema c  = cinemaService.getCinemaById(Long.parseLong(cinemaid));
		List<Ticket> ResTickets = new ArrayList<>();
		for (Projection p: c.getProjekcije()) {
			System.out.println(p);
			for (Ticket t: p.getTickets()) {
				if (!t.isFastRes()){
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
	
	
	
}
