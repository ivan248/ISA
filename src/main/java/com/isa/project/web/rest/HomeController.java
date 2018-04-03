package com.isa.project.web.rest;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	
	
	@RequestMapping(value = "/getTheatres", method = RequestMethod.GET,
			produces="application/json")
	public ResponseEntity<ArrayList<Theatre>> getThetres(){
		/*Theatre t1 = new Theatre((long) 1, "SNP", "Adresa1", "opis1");
		Theatre t2 = new Theatre((long) 2, "NP", "Adresa2", "opis2");
		
		ArrayList<Theatre> listaPozorista = new ArrayList<>();
		listaPozorista.add(t1);
		listaPozorista.add(t2); */
		ArrayList<Theatre> listaPozorista = new ArrayList<>();
		listaPozorista = theatreService.getAllTheatres();
		return new ResponseEntity<>(listaPozorista, HttpStatus.OK);
		
	}

	@RequestMapping(value = "/getCinemas", method = RequestMethod.GET,
			produces="application/json")
	public ResponseEntity<ArrayList<Cinema>> getCinemas(){
		/*Cinema c1 = new Cinema((long) 1, "Arena", "Adresa1", "opis1");
		Cinema c2 = new Cinema((long) 2, "Neki bioskop", "Adresa2", "opis2");
		
		ArrayList<Cinema> listaBioskopa = new ArrayList<>();
		listaBioskopa.add(c1);
		listaBioskopa.add(c2);*/
		ArrayList<Cinema> listaBioskopa = new ArrayList<>();
		listaBioskopa = cinemaService.getAllCinemas();
		return new ResponseEntity<>(listaBioskopa, HttpStatus.OK);
		
	}

}
