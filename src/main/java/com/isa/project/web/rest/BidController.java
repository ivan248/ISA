package com.isa.project.web.rest;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Bid;
import com.isa.project.bean.Item;
import com.isa.project.bean.Notification;
import com.isa.project.bean.User;
import com.isa.project.repository.BidRepository;
import com.isa.project.repository.NotificationRepository;
import com.isa.project.repository.UserRepository;
import com.isa.project.security.jwt.TokenProvider;
import com.isa.project.service.BidService;
import com.isa.project.service.UserService;
import com.isa.project.web.dto.BidDTO;

@RestController
@CrossOrigin
@RequestMapping(value = "/bid")
public class BidController {
	
	
	
	@Autowired
	private BidService bidService;
	
	@Autowired 
	private UserRepository userRepository;
	
	@Autowired 
	private NotificationRepository notificationRepository;
	
	@Autowired
	private UserService userService;
	
	@Autowired 
	private BidRepository bidRepository;
	
	
	
	@PostMapping("/add")
	public ResponseEntity<Boolean> addBid(@RequestBody BidDTO bid ){

			System.out.println("usao u addbid, parametri: " + bid.getBid());
			
			Bid b = new Bid();
			
			
			b.setBuyer(new User());
			b.setItem(bid.getItem());
			b.setValue(bid.getBid());
			
			bidService.addBid(b);
			
			return new ResponseEntity<Boolean>(bidService.addBid(b), HttpStatus.OK);
		
	}



	
	

	@PostMapping("/checkallbids")
	public ResponseEntity<Boolean> checkAllBids(@RequestHeader(value="X-Auth-Token") String token,@RequestBody Item i){
		TokenProvider p = new TokenProvider();
		User u = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		u.setActivity(u.getActivity() + 20L);
		userRepository.save(u);
		
		Boolean isAdmin = userService.checkIfUserHasRole(u, "FANZONE_ADMIN");
		Boolean isSysAdmin =  userService.checkIfUserHasRole(u, "SYSTEM_ADMIN");;
		Boolean isOwner = i.getOwner().getUsername().equals(u.getUsername());
		
		System.out.println(isAdmin + " " + isSysAdmin+ " " +  isOwner);
		
		
		if( isAdmin || isSysAdmin || isOwner) {
			System.out.println("PRosao user proveru");
			return new ResponseEntity<Boolean>(true,HttpStatus.OK);
		}
		System.out.println("Nije prosao user proveru");
		return new ResponseEntity<Boolean>(false,HttpStatus.OK);
	}
	
	@PostMapping("/getallbyitem")
	public ResponseEntity<List<Bid>> getAllByItem(@RequestBody Item item, @RequestHeader(value="X-Auth-Token") String token){
		
		TokenProvider p = new TokenProvider();
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		logged.setActivity(logged.getActivity() + 1L);
		userRepository.save(logged);
		
		
		List<Bid> list = new ArrayList<Bid>();
		list = bidService.getAllItemBids(item);
		
		for(Bid b : list) {
			System.out.println(b.getValue());
			
		}
		
		return new ResponseEntity<List<Bid>>(list,HttpStatus.OK);
	}
	
	@PostMapping("/accept")
	public ResponseEntity<Boolean> acceptBid(@RequestBody Bid bid, @RequestHeader(value="X-Auth-Token") String token){
		if (bid.getItem().getSold()) {
			System.out.println("Item is already sold");
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		} else {
			TokenProvider p = new TokenProvider();
			User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
			logged.setActivity(logged.getActivity() + 20L);
			userRepository.save(logged);
			
			ArrayList<User> list = new ArrayList<User>( userRepository.findDistinctUsersThatBidOnItem(bid.getItem().getItemID()));
			
			
			
			if(logged.getUsername().equals(bid.getItem().getOwner().getUsername())) { 
																					
				if (sendNotifications(list,bid.getBuyer(),bid.getItem().getName())) {
					Boolean b = bidService.acceptBid(bid);
					if (b) {
						
						return new ResponseEntity<Boolean>(b,HttpStatus.OK);
					} else {
						return new ResponseEntity<Boolean>(b,HttpStatus.BAD_REQUEST);
					}
				} 
				else {
					System.out.println("Notifications were not sent correctly");
					return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);	
				}
			} else {
				System.out.println("Only the owner of the item can accept bids");	
				return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
			}
			
		}
		
		
		
	}
	
	public Boolean sendNotifications(ArrayList<User> list, User buyer, String itemName ) {
		
		for(User u : list) {
			if (!u.getUsername().equals(buyer.getUsername())) {
				Notification n = new Notification("Your bid on item: " + itemName + " has not been accepted. ", u);
				notificationRepository.saveAndFlush(n);
			} else {
				Notification n = new Notification("Your bid on item: " + itemName + " has been accepted. Congratulations!", buyer);
				notificationRepository.saveAndFlush(n);
			}
		}
		
		
		return true;
		
	}
	
	@PostMapping("/getbid")
	public Bid getBid(@RequestHeader(value="X-Auth-Token") String token, @RequestBody Item item) {
		TokenProvider p = new TokenProvider();
		User currentUser = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		currentUser.setActivity(currentUser.getActivity() + 20L);
		userRepository.save(currentUser);
		
		Bid bid = bidRepository.findBidValue(item.getItemID(), currentUser.getUsername());
		if (bid == null) {
			Bid b = new Bid();
			b.setBuyer(currentUser);
			b.setItem(item);
			b.setValue(0);
			System.out.println("PRAVIMO NOVI BID!");
			
			return b;
			
		} else 
			return bid;
		
	}
	
	@PostMapping("/changevalue")
	public Boolean changeBidValue(@RequestHeader(value="X-Auth-Token") String token, @RequestBody Bid bid) {
		java.util.Date date = new java.util.Date();
		Date nowDate = new java.sql.Date(date.getTime());
		int status = bid.getItem().getEndDate().compareTo(nowDate);  //provera da li je unesen krajnji datum stariji ili mladji od danasnjeg
	    if (status <=0) {
	    	System.out.println("Time on placing bids expired");
	      	return  false;
	    }
		
		TokenProvider p = new TokenProvider();
		User currentUser = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		currentUser.setActivity(currentUser.getActivity() + 20L);
		userRepository.save(currentUser);
		
		
		if (currentUser.getUsername().equals(bid.getItem().getOwner().getUsername())) {
			return false;
		} else {
			//Bid b = bidRepository.findBidValue(bid.getItem().getItemID(), currentUser.getUsername());
			
			//todo: Trebalo bi da provri da ne biduje opet isti lik vec samo da promeni
			return bidService.changeBidValue(bid); 
		}
	}
	
	@GetMapping("/getallbyuser")
	public ResponseEntity<List<Bid>> getAllBtUser(@RequestHeader("X-Auth-Token") String token){
		TokenProvider p = new TokenProvider();
		User currentUser = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		return new ResponseEntity<List<Bid>> (bidRepository.findAllByBuyer(currentUser),HttpStatus.OK); 
	}
	
}
