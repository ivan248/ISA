package com.isa.project.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.OfficialItem;
import com.isa.project.service.OfficialItemService;

@RestController
@CrossOrigin
@RequestMapping("/officialitem")
public class OfficialItemController {
	
	@Autowired
	private OfficialItemService officialItemService;
	
	@RequestMapping(value="/edit", method = RequestMethod.POST) //ovaj drugi korak edita zapravo menja item u BP
	public Boolean editItemStep(@RequestBody OfficialItem item) {
		System.out.println("Promenio!");
		return officialItemService.editItem(item);
	}
	
	@RequestMapping(value="/reserve", method = RequestMethod.POST) //ovaj drugi korak edita zapravo menja item u BP
	public Boolean reserveItem(@RequestParam("id")int id) {
		System.out.println("Rezervisao!");
		return officialItemService.reserve(id);
	}
	
	@RequestMapping(value="/sell", method = RequestMethod.POST) //ovaj drugi korak edita zapravo menja item u BP
	public Boolean sellItem(@RequestParam("id")int id) {
		System.out.println("Rezervisao!");
		return officialItemService.setSold(id);
	}
	
}


