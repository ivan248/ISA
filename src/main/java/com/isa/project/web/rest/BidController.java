package com.isa.project.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Bid;
import com.isa.project.service.BidService;
import com.isa.project.web.dto.BidDTO;

@RestController
@CrossOrigin
@RequestMapping(value = "/bid")
public class BidController {
	
	@Autowired
	private BidService bidService;
	
	@PostMapping("/add")
	public ResponseEntity<Boolean> addBid(BidDTO bid){
		//TODO: Provera da li je bid za dodati veci od postojeceg
		System.out.println("Usao bid add" + bid);
		return null; //new ResponseEntity<Boolean>(bidService.addBid(bid),HttpStatus.OK);
	}
}
