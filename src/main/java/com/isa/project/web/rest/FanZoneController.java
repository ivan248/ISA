package com.isa.project.web.rest;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Cinema;
import com.isa.project.bean.Item;
import com.isa.project.bean.OfficialItem;
import com.isa.project.bean.Theatre;
import com.isa.project.bean.User;
import com.isa.project.repository.CinemaRepository;
import com.isa.project.repository.ItemRepository;
import com.isa.project.repository.TheatreRepository;
import com.isa.project.repository.UserRepository;
import com.isa.project.security.jwt.TokenProvider;
import com.isa.project.service.FanZoneService;
import com.isa.project.web.Converter;
import com.isa.project.web.dto.AddNewItemDto;
import com.isa.project.web.dto.OfficialItemDTO;


@RestController
@CrossOrigin
@RequestMapping(value = "/fanzone")
public class FanZoneController {
	
	@Autowired
	private ItemRepository itemRepository;
	@Autowired 
	private FanZoneService fanZoneService;
	@Autowired
	private UserRepository userRepository;
	@Autowired 
	private CinemaRepository cinemaRepository;
	@Autowired
	private TheatreRepository theatreRepository;
	

	
	@RequestMapping(value="/", method= RequestMethod.GET)
	public List<Item> getAllItems(){
		return fanZoneService.getAllApprovedItems();
	}
	
	@RequestMapping(value="/new", method= RequestMethod.GET)
	public List<OfficialItem> getAllOfficialItems(){
		
		return fanZoneService.getAllOfficialItems();
	}
	
	@RequestMapping(value="/unapproved", method= RequestMethod.GET)
	public List<Item> getAllUnApprovedItems(){
		return fanZoneService.getAllUnApprovedItems();
	}
	
	@RequestMapping(value="/additem", method=RequestMethod.POST, consumes="application/json")
	public  ResponseEntity<Item> addItem( @RequestBody AddNewItemDto newItemDTO, @RequestHeader(value="X-Auth-Token") String token) {
		
		TokenProvider p = new TokenProvider();
		User logged = userRepository.findByUsername(p.getUsernameFromToken(token)).get();
		
		Item i = Converter.convertAddNewItemToItem(newItemDTO);
		int status = i.getEndDate().compareTo(i.getBeginDate());  //provera da li je unesen krajnji datum stariji ili mladji od danasnjeg
	    if (status <=0) {
	    	System.out.println("Can't enter end date from the past.");
	      	return  new ResponseEntity<Item>(i,HttpStatus.BAD_REQUEST);
	    }
	    i.setOwner(logged);
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
	
	@RequestMapping(value="/addofficialitem", method=RequestMethod.POST)
	public  ResponseEntity<Boolean> addOfficialItem( @RequestBody OfficialItemDTO i) {
		
		OfficialItem item = new OfficialItem();
		item = Converter.convertOfficialItemDTO(i);
		
		if(i.getPlace().equals("Cinema")) {
			Cinema c = cinemaRepository.findOneById(new Long(i.getPlaceID()));
			item.setCinemaOwner(c);
		} else if (i.getPlace().equals("Theatre")) {
			Theatre t = theatreRepository.findOneById(new Long(i.getPlaceID()));
			item.setTheatreOwner(t);
		} else {
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
		}
		
		System.out.println(item);
		
		Boolean b = fanZoneService.addOfficialItem(item);
      
		return new ResponseEntity<Boolean>(b,HttpStatus.OK);
		
		

	}
	
	@RequestMapping(value = "/deleteofficialitem", method= RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteOfficialItem(@RequestParam("id") int id) {
		System.out.println("Usao u delete official");
		return new ResponseEntity<Boolean>(fanZoneService.deleteOfficialItem(id),HttpStatus.OK);
		
		
	}
	
	
}
