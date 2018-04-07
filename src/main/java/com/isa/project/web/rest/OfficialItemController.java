package com.isa.project.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Cinema;
import com.isa.project.bean.OfficialItem;
import com.isa.project.bean.Theatre;
import com.isa.project.repository.CinemaRepository;
import com.isa.project.repository.TheatreRepository;
import com.isa.project.service.OfficialItemService;
import com.isa.project.web.Converter;
import com.isa.project.web.dto.OfficialItemDTO;

@RestController
@CrossOrigin
@RequestMapping("/officialitem")
public class OfficialItemController {
	
	@Autowired
	private OfficialItemService officialItemService;
	@Autowired
	private CinemaRepository cinemaRepository;
	@Autowired
	private TheatreRepository theatreRepository;
	
	@RequestMapping(value="/edit", method = RequestMethod.POST) //ovaj drugi korak edita zapravo menja item u BP
	public ResponseEntity<Boolean> editItemStep(@RequestBody OfficialItemDTO i) {
		
		OfficialItem item = new OfficialItem();
		item = Converter.convertOfficialItemDTO(i);
		item.setItemID(i.getItemID());
		
		if(i.getPlace().equals("Cinema")) {
			Cinema c = cinemaRepository.findOneById(new Long(i.getPlaceID()));
			item.setCinemaOwner(c);
		} else if (i.getPlace().equals("Theatre")) {
			Theatre t = theatreRepository.findOneById(new Long(i.getPlaceID()));
			item.setTheatreOwner(t);
		} else {
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		}
		
		
		
		
		
		Boolean b = officialItemService.editItem(item);
		System.out.println("Promenio!");
		return new ResponseEntity<Boolean>(b,HttpStatus.OK);
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


