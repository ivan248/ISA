package com.isa.project.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Item;

import com.isa.project.repository.ItemRepository;
import com.isa.project.service.implementation.ItemServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/item")
public class ItemController {
	
	@Autowired
	private ItemServiceImpl itemService;
	
	@Autowired 
	private ItemRepository itemRepository;
	
	@RequestMapping(value="/edit1/{id}", method = RequestMethod.GET) //mozda ce biti lakse da se ovo uradi ako posaljem ceo Objekat item
	public Item editItemStep1(@PathVariable("id")int id) { //Kada se klikne edit dugme da se nadje odgovarajuci item i polja forme da se napune odgovarajucim vrednostima
		return itemRepository.findOneByItemID(id);
	}
	
	@RequestMapping(value="/edit2", method = RequestMethod.POST) //ovaj drugi korak edita zapravo menja item u BP
	public Boolean editItemStep2(@RequestBody Item item) {
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
