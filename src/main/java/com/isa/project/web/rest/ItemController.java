package com.isa.project.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Item;


import com.isa.project.service.ItemService;


@RestController
@CrossOrigin
@RequestMapping("/item")
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	

	
	
	@RequestMapping(value="/edit", method = RequestMethod.POST) //ovaj drugi korak edita zapravo menja item u BP
	public Boolean editItemStep(@RequestBody Item item) {
		System.out.println("Promenio!");
		return itemService.editItem(item);
	}
	
	@RequestMapping(value="/approve/{id}", method = RequestMethod.GET)
	public Boolean approveItem(@PathVariable("id") int id) {
		return itemService.approveItem(id);
	}
	
	@RequestMapping(value="/bid/{id}/{bid}", method = RequestMethod.POST) //promena ponude
	public Boolean bid(@PathVariable("id") int id , @PathVariable("bid") float bid) {
		return itemService.bid(id, bid);
	}
	
	@RequestMapping(value="/acceptbid/{id}", method = RequestMethod.POST) //promena ponude
	public Boolean acceptBid(@PathVariable("id") int id) {
		return itemService.acceptBid(id);
	}
	
}
