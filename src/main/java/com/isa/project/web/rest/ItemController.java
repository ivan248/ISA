package com.isa.project.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Bid;
import com.isa.project.bean.Item;
import com.isa.project.bean.User;
import com.isa.project.repository.UserRepository;
import com.isa.project.security.jwt.TokenProvider;
import com.isa.project.service.ItemService;
import com.isa.project.web.dto.BidDTO;
;


@RestController
@CrossOrigin
@RequestMapping("/item")
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	
	@Autowired
	private UserRepository userRepository;

	
	
	@RequestMapping(value="/edit", method = RequestMethod.POST) //ovaj drugi korak edita zapravo menja item u BP
	public Boolean editItemStep(@RequestBody Item item) {
		System.out.println("Promenio!");
		return itemService.editItem(item);
	}
	
	@RequestMapping(value="/approve", method = RequestMethod.GET)
	public Boolean approveItem(@RequestParam("id") int id) {
		return itemService.approveItem(id);
	}
	
	@RequestMapping(value="/bid", method = RequestMethod.POST) //promena ponude
	public Boolean bid(@RequestBody BidDTO bid,  @RequestHeader(value="X-Auth-Token") String token) {
		
		
		if( bid.getBid() <= bid.getItem().getCurrentBid()) {
			return false;
		} else {
			
			
			Bid b = new Bid();
			TokenProvider p = new TokenProvider();
			User currentUser = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
			
			b.setBuyer(currentUser);
			b.setItem(bid.getItem());
			b.setValue(bid.getBid());
			
			try {
				return itemService.bid(bid.getItem(),bid.getBid());
			} catch(Exception e) {
				e.printStackTrace();
				System.out.println("Exception happened");
				return false;
			}
			
			
		}
		
	}
	
	@RequestMapping(value="/acceptbid/{id}", method = RequestMethod.POST) //promena ponude
	public Boolean acceptBid(@PathVariable("id") int id) {
		return itemService.acceptBid(id);
	}
	
}
