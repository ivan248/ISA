package com.isa.project.web.rest;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.isa.project.bean.Cinema;
import com.isa.project.bean.Theatre;
import com.isa.project.bean.User;
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

}
