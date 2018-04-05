package com.isa.project.web.rest;

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
import com.isa.project.bean.User;
import com.isa.project.repository.UserRepository;
import com.isa.project.security.jwt.TokenProvider;
import com.isa.project.service.implementation.BidServiceImpl;
import com.isa.project.web.dto.BidDTO;

@RestController
@CrossOrigin
@RequestMapping(value = "/bid")
public class BidController {
	
	@Autowired
	private BidServiceImpl bidService;
	
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
}
