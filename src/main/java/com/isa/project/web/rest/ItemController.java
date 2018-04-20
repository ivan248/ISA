package com.isa.project.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Item;
import com.isa.project.bean.User;
import com.isa.project.repository.UserRepository;
import com.isa.project.security.jwt.TokenProvider;
import com.isa.project.service.ItemService;
import com.isa.project.service.UserService;

;


@RestController
@CrossOrigin
@RequestMapping("/item")
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired UserService userService;

	@PostMapping("/checkifok")
	public ResponseEntity<Boolean> checkIfOk(@RequestBody Item item,@RequestHeader("X-Auth-Token") String token) {
		TokenProvider p = new TokenProvider();
		User currentUser = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		Boolean userIsSystemAdmin = userService.checkIfUserHasRole(currentUser, "SYSTEM_ADMIN");
		Boolean userIsFanzoneAdmin = userService.checkIfUserHasRole(currentUser, "FANZONE_ADMIN");
		Boolean userIsOwner = currentUser.getUsername().equals(item.getOwner().getUsername());
		
		if (userIsOwner || userIsFanzoneAdmin || userIsSystemAdmin ) {
			System.out.println("usao true");
			return new ResponseEntity<Boolean>( true, HttpStatus.OK);
		} else {
			System.out.println("usao false");
			return new ResponseEntity<Boolean>( false, HttpStatus.BAD_REQUEST);
		}
		
		
	}
	
	@RequestMapping(value="/edit", method = RequestMethod.POST) //ovaj drugi korak edita zapravo menja item u BP
	public Item editItemStep(@RequestBody Item item, @RequestHeader("X-Auth-Token") String token) {
		TokenProvider p = new TokenProvider();
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		return itemService.editItem(item);
		
	}
	
	
	
	@RequestMapping(value="/approve", method = RequestMethod.POST, consumes="application/json")
	public Boolean approveItem(@RequestBody Item item,@RequestHeader("X-Auth-Token") String token) {
		TokenProvider p = new TokenProvider();
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		return itemService.approveItem(item);
	}



	
	@RequestMapping(value="/acceptbid/{id}", method = RequestMethod.POST) //promena ponude
	public Boolean acceptBid(@PathVariable("id") int id, @RequestHeader("X-Auth-Token") String token) {
		TokenProvider p = new TokenProvider();
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		logged.setActivity(logged.getActivity() + 20L);
		userRepository.save(logged);
		return itemService.acceptBid(id);
	}
	
}
