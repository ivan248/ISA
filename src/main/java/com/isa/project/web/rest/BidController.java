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
import com.isa.project.bean.User;
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
	
	@PostMapping("/add")
	public ResponseEntity<Boolean> addBid(@RequestBody BidDTO bid , @RequestHeader(value="X-Auth-Token") String token){
		if( bid.getBid() <= bid.getItem().getCurrentBid()) {
			System.out.println("Ponuda nije veca od trenutne ponude");
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		} else {
			System.out.println("usao u addbid, parametri: " + bid.getBid());
			
			Bid b = new Bid();
			TokenProvider p = new TokenProvider();
			User currentUser = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
			
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
		//TODO: Samo autor oglasa moze da prihvati ponudu
		TokenProvider p = new TokenProvider();
		User currentUser = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		System.out.println("USAO U ACCEPT");
		if(currentUser.getUsername().equals(bid.getItem().getOwner().getUsername())) { //ako je ulogovani 
																					//korisnik vlasnik  itema
			Boolean b = bidService.acceptBid(bid);
			if (b) {
				return new ResponseEntity<Boolean>(b,HttpStatus.OK);
			} else {
				return new ResponseEntity<Boolean>(b,HttpStatus.BAD_REQUEST);
			}
			
		} else {
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		}
		
		
		
	}
	
	
	
}
