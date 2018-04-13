package com.isa.project.web.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Bid;
import com.isa.project.bean.Item;
import com.isa.project.bean.Notification;
import com.isa.project.bean.User;
import com.isa.project.repository.NotificationRepository;
import com.isa.project.repository.UserRepository;
import com.isa.project.security.jwt.TokenProvider;
import com.isa.project.service.BidService;
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
	
	
	@PostMapping("/add")
	public ResponseEntity<Boolean> addBid(@RequestBody BidDTO bid , @RequestHeader(value="X-Auth-Token") String token){
		TokenProvider p = new TokenProvider();
		User currentUser = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		
		if( bid.getBid() <= bid.getItem().getCurrentBid()) {
			System.out.println("Ponuda nije veca od trenutne ponude");
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		} else if( currentUser.getUsername().equals(bid.getItem().getOwner().getUsername())) {
			System.out.println("NE moze bidovati vlasnik itema");
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		}else {
			System.out.println("usao u addbid, parametri: " + bid.getBid());
			
			Bid b = new Bid();
			
			
			b.setBuyer(currentUser);
			b.setItem(bid.getItem());
			b.setValue(bid.getBid());
			
			bidService.addBid(b);
			
			return new ResponseEntity<Boolean>(bidService.addBid(b), HttpStatus.OK);
		}
	
	}
	
	@PostMapping("/getallbyitem")
	public ResponseEntity<List<Bid>> getAllByItem(@RequestBody Item item, @RequestHeader(value="X-Auth-Token") String token){
		
		List<Bid> list = new ArrayList<Bid>();
		list = bidService.getAllItemBids(item);
		
		for(Bid b : list) {
			System.out.println(b.getValue());
			
		}
		
		return new ResponseEntity<List<Bid>>(list,HttpStatus.OK);
	}
	
	@PostMapping("/accept")
	public ResponseEntity<Boolean> acceptBid(@RequestBody Bid bid, @RequestHeader(value="X-Auth-Token") String token){
		
		TokenProvider p = new TokenProvider();
		User currentUser = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		ArrayList<User> list = new ArrayList<User>( userRepository.findDistinctUsersThatBidOnItem(bid.getItem().getItemID()));
		
		
		
		if(currentUser.getUsername().equals(bid.getItem().getOwner().getUsername())) { 
																				
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
	
	
	
	
	
	
}
