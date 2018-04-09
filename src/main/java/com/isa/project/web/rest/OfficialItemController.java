package com.isa.project.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Cinema;
import com.isa.project.bean.OfficialItem;
import com.isa.project.bean.Theatre;
import com.isa.project.bean.User;
import com.isa.project.repository.CinemaRepository;
import com.isa.project.repository.TheatreRepository;
import com.isa.project.repository.UserRepository;
import com.isa.project.security.jwt.TokenProvider;
import com.isa.project.service.OfficialItemService;
import com.isa.project.web.Converter;
import com.isa.project.web.dto.OfficialItemDTO;

@RestController
@CrossOrigin
@RequestMapping("/officialitem")
public class OfficialItemController {
	
	@Autowired
	private OfficialItemService officialItemService;
	@Autowired
	private CinemaRepository cinemaRepository;
	@Autowired
	private TheatreRepository theatreRepository;
	@Autowired
	private UserRepository userRepository;
	
	
	@RequestMapping(value="/edit", method = RequestMethod.POST) //ovaj drugi korak edita zapravo menja item u BP
	public ResponseEntity<Boolean> editItemStep(@RequestBody OfficialItemDTO i) {
		
		OfficialItem item = new OfficialItem();
		item = Converter.convertOfficialItemDTO(i);
		item.setItemID(i.getItemID());
		
		if(i.getPlace().equals("Cinema")) {
			Cinema c = cinemaRepository.findOneById(new Long(i.getPlaceID()));
			item.setCinemaOwner(c);
		} else if (i.getPlace().equals("Theatre")) {
			Theatre t = theatreRepository.findOneById(new Long(i.getPlaceID()));
			item.setTheatreOwner(t);
		} else {
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		}
		
		
		
		
		
		Boolean b = officialItemService.editItem(item);
		System.out.println("Promenio!");
		return new ResponseEntity<Boolean>(b,HttpStatus.OK);
	}
	
	
	
	@RequestMapping(value="/sell", method = RequestMethod.POST) //ovaj drugi korak edita zapravo menja item u BP
	public Boolean sellItem(@RequestParam("id")int id) {
		System.out.println("Rezervisao!");
		return officialItemService.setSold(id);
	}
	
	@PostMapping(value="/reserve")
	public ResponseEntity<Boolean> reserveItem(@RequestParam("id") int id, @RequestHeader(value="X-Auth-Token") String token) {
		
		
		TokenProvider p = new TokenProvider();
		User u = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		Boolean b = officialItemService.reserve(id, u);
		
		if( b ) {
			return new ResponseEntity<Boolean>(b,HttpStatus.OK);
		} else {
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		}
		
		
	}
	
}


