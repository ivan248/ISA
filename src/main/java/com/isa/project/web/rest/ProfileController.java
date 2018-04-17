package com.isa.project.web.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Friend;
import com.isa.project.bean.Notification;
import com.isa.project.bean.Role;
import com.isa.project.bean.User;
import com.isa.project.repository.NotificationRepository;
import com.isa.project.repository.UserRepository;
import com.isa.project.security.jwt.TokenProvider;
import com.isa.project.service.UserService;
import com.isa.project.web.dto.RegistrationUserDto;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/profile")
public class ProfileController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserService userService;
	
	@Autowired 
	private NotificationRepository notificationRepository;

	@GetMapping
	@RequestMapping(value = "/")
	public ResponseEntity<User> getLoggedUser(@RequestHeader(value = "X-Auth-Token") String token) {

		TokenProvider p = new TokenProvider();
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();

		return new ResponseEntity<User>(logged, HttpStatus.OK);
	}

	@PostMapping
	@RequestMapping(value = "/editUser", consumes = "application/json")
	public ResponseEntity<User> editUser(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestBody RegistrationUserDto editedUser) {

		TokenProvider p = new TokenProvider();

		return new ResponseEntity<User>(userService.editUser(editedUser, p.getUsernameFromToken(token)), HttpStatus.OK);
	}

	@GetMapping
	@RequestMapping(value = "/getFriends")
	public ResponseEntity getFriends(@RequestHeader(value = "X-Auth-Token") String token) {

		TokenProvider p = new TokenProvider();

		return new ResponseEntity(userService.getFriends(p.getUsernameFromToken(token)), HttpStatus.OK);
	}

	@GetMapping
	@RequestMapping(value = "/removeFriend")
	public ResponseEntity removeFriend(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestParam("friendId") int id) {

		TokenProvider p = new TokenProvider();

		return new ResponseEntity(userService.removeFriend(id, p.getUsernameFromToken(token)), HttpStatus.OK);

	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@GetMapping
	@RequestMapping(value = "/getAllUsers")
	public ResponseEntity getAllUsers(@RequestHeader(value = "X-Auth-Token") String token) {

		TokenProvider p = new TokenProvider();

		return new ResponseEntity(userService.getAllUsers(p.getUsernameFromToken(token)), HttpStatus.OK);

	}

	@SuppressWarnings("rawtypes")
	@PostMapping
	@RequestMapping(value = "/friendRequest", consumes = "application/json")
	public ResponseEntity friendRequest(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestBody String username) {

		TokenProvider p = new TokenProvider();

		return new ResponseEntity(userService.handleFriendRequest(p.getUsernameFromToken(token), username),HttpStatus.OK);
		

	}

	@GetMapping
	@RequestMapping(value = "/getFriendRequests")
	public ResponseEntity<List<Friend>> getFriendRequests(@RequestHeader(value = "X-Auth-Token") String token) {

		TokenProvider p = new TokenProvider();

		return new ResponseEntity<List<Friend>>(userService.getFriendRequests(p.getUsernameFromToken(token)), HttpStatus.OK);

	}

	@GetMapping
	@RequestMapping(value = "/acceptFriend")
	public ResponseEntity<List<Friend>> acceptFriend(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestParam("friendId") String id) {

		TokenProvider p = new TokenProvider();
		
		return new ResponseEntity<List<Friend>>(userService.acceptFriend(p.getUsernameFromToken(token), Integer.parseInt(id)),HttpStatus.OK);

	

	}
	
	@GetMapping
	@RequestMapping(value = "/declineFriend")
	public ResponseEntity<List<Friend>> declineFriend(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestParam("friendId") String id) {

		TokenProvider p = new TokenProvider();
	
		return new ResponseEntity<List<Friend>>(userService.declineFriend(p.getUsernameFromToken(token), Integer.parseInt(id)),HttpStatus.OK);


	}
	
	@GetMapping(value= "/getnotifications")
	public ResponseEntity<List<Notification>> getAllNotifications(@RequestHeader(value = "X-Auth-Token") String token) {
		TokenProvider p = new TokenProvider();
		User currentUser = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		try {
			ArrayList<Notification> list = new ArrayList<Notification>(notificationRepository.findAllByUser(currentUser));
			return new ResponseEntity<List<Notification>>(list,HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			System.out.println("Error while reading from database");
			return null;
		}
	}
	
	@PostMapping(value = "/readnotification")
	public ResponseEntity<Boolean> readNotification(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestParam("id") int id){
		
		try {
			Notification n = notificationRepository.findOneByNotificationID(id);
			n.setSeen(true);
			notificationRepository.flush();
			
			return new ResponseEntity<Boolean>(true,HttpStatus.OK);
			
		} catch(Exception e) {
			e.printStackTrace();
			System.out.println("Error while writing to database");
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@GetMapping
	@RequestMapping(value = "/changePassword")
	public ResponseEntity changePassword(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestParam("password") String password) {

		TokenProvider p = new TokenProvider();
		
		if(userService.changePassword(p.getUsernameFromToken(token), password))
			return new ResponseEntity(HttpStatus.OK);
		
		return new ResponseEntity(HttpStatus.BAD_REQUEST); 
	}
	
	@GetMapping
	@RequestMapping(value = "/searchUsers")
	public ResponseEntity searchUsers(@RequestHeader(value = "X-Auth-Token") String token,
			@RequestParam("searchName") String searchName,
			@RequestParam("searchLastName") String searchLastName) {

		TokenProvider p = new TokenProvider();
		
		String name = "%" + searchName + "%";
		String lastName = "%" + searchLastName + "%";
		
		return new ResponseEntity
		(userService.searchUsers(p.getUsernameFromToken(token),name,lastName), HttpStatus.OK);


	}
	
	@GetMapping
	@RequestMapping(value = "/getReservations")
	public ResponseEntity getReservations(@RequestHeader(value = "X-Auth-Token") String token) {

		TokenProvider p = new TokenProvider();
		
		return new ResponseEntity
		(userService.getReservations(p.getUsernameFromToken(token)), HttpStatus.OK);


	}
	
	@PostMapping("/addrole")
	public User addRole(@RequestHeader(value = "X-Auth-Token") String token,@RequestBody User u, @RequestParam("role") String role) {
		
		User user = userRepository.findByUsername(u.getUsername()).get();
		
		Role r = new Role();
		r.setRole(role);
		for(Role ro : user.getRoles()) {
			if (ro.getRole().equals(role)) {
				
				System.out.println("User already has that role");
				return null;
			}
		}
		
		
		
		user.getRoles().add(r);
		
//		u.getRoles().clear();
//		u.getRoles().add(r);
		
		userRepository.saveAndFlush(user);
		
		return u;
	}
}
