package com.isa.project.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.User;
import com.isa.project.repository.UserRepository;
import com.isa.project.security.jwt.TokenProvider;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/profile")
public class ProfileController {

	@Autowired
	private UserRepository userRepository;
	
	@GetMapping
	@RequestMapping(value="/")
	public ResponseEntity<User> getLoggedUser(@RequestHeader(value="X-Auth-Token") String token) {
		
		System.out.println("Pogodio controller profile + ");
		System.out.println(token);
		
		TokenProvider p = new TokenProvider();
		System.out.println(p.getUsernameFromToken(token));
		
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		System.out.println("Trenutno ulogovan: Pogodio profile controller " + logged);
		
		return new ResponseEntity<User>(logged,HttpStatus.OK);
	}
	
	@GetMapping
	@RequestMapping(value="/get")
	@PreAuthorize("hasAuthority('REGISTERED_USER')")
	public ResponseEntity<String> getSomething(@RequestHeader(value="X-Auth-Token") String token,
			Authentication authentication) {
	
		System.out.println("pogodgio profile/get");
		
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();
		System.out.println("User has authorities: " + userDetails.getAuthorities());
		
		return new ResponseEntity<String>("blabla",HttpStatus.OK);
	}
	
}
