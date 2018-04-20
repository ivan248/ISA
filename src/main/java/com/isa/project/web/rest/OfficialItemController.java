package com.isa.project.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.OfficialItem;

import com.isa.project.bean.User;

import com.isa.project.repository.UserRepository;
import com.isa.project.security.jwt.TokenProvider;
import com.isa.project.service.OfficialItemService;


@RestController
@CrossOrigin
@RequestMapping("/officialitem")
public class OfficialItemController {
	
	@Autowired
	private OfficialItemService officialItemService;

	@Autowired
	private UserRepository userRepository;

	@PreAuthorize(value="hasAuthority('SYSTEM_ADMIN') or hasAuthority('FANZONE_ADMIN')")
	@RequestMapping(value="/edit", method = RequestMethod.POST) //ovaj drugi korak edita zapravo menja item u BP
	public ResponseEntity<Boolean> editItemStep(@RequestBody OfficialItem i,@RequestHeader("X-Auth-Token") String token) {
		
		if ( i.getReserved()) {
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		} else {
			TokenProvider p = new TokenProvider();
			User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
			logged.setActivity(logged.getActivity() + 20L);
			userRepository.save(logged);
			System.out.println("Verzija: " + i.getVersion());
			Boolean b = officialItemService.editItem(i);
			System.out.println("Promenio!");
			
			if(i.getCinemaOwner() == null) {
				System.out.println("Cinema je null");
			}
			if (i.getTheatreOwner() == null) {
				System.out.println("theatre je null");
			}
			return new ResponseEntity<Boolean>(b,HttpStatus.OK);
		}
		
	}
	
	
	
	@RequestMapping(value="/sell", method = RequestMethod.POST) //ovaj drugi korak edita zapravo menja item u BP
	public Boolean sellItem(@RequestParam("id")int id, @RequestHeader(value="X-Auth-Token") String token) {
		
		TokenProvider p = new TokenProvider();
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		logged.setActivity(logged.getActivity() + 10L);
		userRepository.save(logged);
		System.out.println("Rezervisao!");
		return officialItemService.setSold(id);
	}
	
	
	@PostMapping(value="/reserve")
	public ResponseEntity<Boolean> reserveItem(@RequestBody OfficialItem item, @RequestHeader(value="X-Auth-Token") String token) {
		
		
		
		TokenProvider p = new TokenProvider();
		User u = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		u.setActivity(u.getActivity() + 20L);
		
		userRepository.save(u);
		item.setBuyer(u);
		
		Boolean b = officialItemService.reserve(item);
		
		if( b ) {
			return new ResponseEntity<Boolean>(b,HttpStatus.OK);
		} else {
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		}
		
		
	}
	
}


