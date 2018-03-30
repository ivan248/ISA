package com.isa.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Item;

import com.isa.project.repository.ItemRepository;
import com.isa.project.service.implementation.ItemServiceImpl;

@RestController
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
	
}
