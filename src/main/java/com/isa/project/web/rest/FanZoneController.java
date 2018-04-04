package com.isa.project.web.rest;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Item;
import com.isa.project.repository.ItemRepository;
import com.isa.project.repository.UserRepository;
import com.isa.project.service.FanZoneService;
import com.isa.project.web.Converter;
import com.isa.project.web.dto.AddNewItemDto;


@RestController
@CrossOrigin
@RequestMapping(value = "/fanzone")
public class FanZoneController {
	
	@Autowired
	private ItemRepository itemRepository;
	
	@Autowired 
	private FanZoneService fanZoneService;
	//TODO: Obrisi
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(value="/", method= RequestMethod.GET)
	public List<Item> getAllItems(){
		return fanZoneService.getAllApprovedItems();
	}
	
	@RequestMapping(value="/unapproved", method= RequestMethod.GET)
	public List<Item> getAllUnApprovedItems(){
		return fanZoneService.getAllUnApprovedItems();
	}
	
	@RequestMapping(value="/additem", method=RequestMethod.POST, consumes="application/json")
	public  ResponseEntity<Item> addItem( @RequestBody AddNewItemDto newItemDTO) {
		
		
		
		System.out.println("ONO STO JE SIGLO: " + newItemDTO.toString());
		Item i = Converter.convertAddNewItemToItem(newItemDTO);
		int status = i.getEndDate().compareTo(i.getBeginDate());  //provera da li je unesen krajnji datum stariji ili mladji od danasnjeg
	    if (status <=0) {
	    	System.out.println("Can't enter end date from the past.");
	      	return  new ResponseEntity<Item>(i,HttpStatus.BAD_REQUEST);
	    }
	    //TODO: i.setAuthor= session.thisuser;
	    i.setOwner(userRepository.findByUsername("fpetrovic@ymail.com").get());
	    fanZoneService.addItem(i);
      
		return new ResponseEntity<Item>(i,HttpStatus.OK);

		

	}
	
	@RequestMapping(value = "/deleteitem", method= RequestMethod.GET)
	public ResponseEntity<Boolean> deleteItem(@RequestParam("id") int id) {
		System.out.println("Usao u delete");
		return new ResponseEntity<Boolean>(fanZoneService.deleteItem(id),HttpStatus.OK);
		
		
	}
	
	@GetMapping("/getitem")
	public ResponseEntity<Item> getItem(@RequestParam("id") int id) {
		System.out.println("Usao u getitem");
		return new ResponseEntity<Item>(itemRepository.findOneByItemID(id),HttpStatus.OK);
		
		
	}
	
	
}
