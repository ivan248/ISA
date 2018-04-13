package com.isa.project.web.rest;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.security.JWTTokenResponse;
import com.isa.project.security.jwt.TokenProvider;
import com.isa.project.service.UserService;
import com.isa.project.web.dto.LoginDto;
import com.isa.project.web.dto.RegistrationUserDto;

@RestController // This means that this class is a Controller
@CrossOrigin
@RequestMapping(value = "/api/login") // This means URL's start with /login (after									// Application path)
public class LoginController {

	// This means to get the bean called userRepository
	// Which is auto-generated by Spring, we will use it to handle the data
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private TokenProvider tokenProvider;
	

	@RequestMapping(value = "/registrationMessage", method = RequestMethod.POST, consumes="application/json")
	public ResponseEntity<String> displayregistrationMessage(
			@RequestBody RegistrationUserDto registrationUserDto,
			HttpServletRequest request) {
		
		System.out.println(registrationUserDto  + " ovo je user dobijen DTO");
		
		
		if(userService.registerUser(registrationUserDto, request))
			return new ResponseEntity<String>("Activation link has been sent to your email address!",HttpStatus.OK);
		
		return new ResponseEntity<String>("Registration failed!",HttpStatus.BAD_REQUEST);
		
		
	}
	
	// Process confirmation link
	@RequestMapping(value="/confirm", method = RequestMethod.GET)
	public ResponseEntity<String> showConfirmationPage(@RequestParam("token") String token) {
			
		if(userService.confirmAccountRegistrationToken(token))
			return new ResponseEntity<String>("Account activated!",HttpStatus.OK);
		
		return new ResponseEntity<String>("Coudln`t find the token.",HttpStatus.NOT_FOUND);
			
		
	}
	

	
	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes="application/json", produces="application/json")
    public ResponseEntity<JWTTokenResponse> signUp(@RequestBody LoginDto loginDTO) {
    	
		System.out.println("pogodio login");
		
		try {
		UserDetails details = userDetailsService.loadUserByUsername(loginDTO.getUsername());
		
		if(details == null)
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		
		UsernamePasswordAuthenticationToken authenticationToken =
				new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword());
		
		Authentication authentication = authenticationManager.authenticate(authenticationToken);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String jwt = tokenProvider.generateToken(details);
		
		return new ResponseEntity<>(new JWTTokenResponse(jwt),HttpStatus.OK);
		} catch(Exception e) {
			
			e.printStackTrace();
			System.out.println("usao u catch login ");
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		
	
		
			

    }
	


// janca@janca sifra 123

}
