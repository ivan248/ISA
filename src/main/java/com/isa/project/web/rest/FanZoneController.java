package com.isa.project.web.rest;


import java.sql.Date;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.isa.project.bean.Item;


import com.isa.project.service.implementation.FanZoneServiceImpl;

@RestController
@RequestMapping("/fanzone")
public class FanZoneController {
	
	@Autowired 
	private FanZoneServiceImpl fanZoneService;
	
	@RequestMapping("/")
	public List<Item> getAllItems(){
		return fanZoneService.getAllApprovedItems();
	}
	
	@RequestMapping(value= "/additem/{name}/{description}/{currentBid}/{endDate}", method=RequestMethod.POST)
	public Boolean addItem( @PathVariable("currentBid") float currentBid, @PathVariable("description") String description,
							@PathVariable("endDate") String endDate, @PathVariable("name") String name) 
	{

		
		
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");  //Konverzija datuma u pogodan format
        java.util.Date parsed = null;
		try {
			parsed = format.parse(endDate);
		} catch (ParseException e) {
			System.out.println("An error occured while parsing entered end date.");
			e.printStackTrace();
		}
        Date sqlDate = new java.sql.Date(parsed.getTime()); //kraj konverzje datuma
       
        
        
        Item i = new Item(name,description,currentBid,sqlDate);
        
        int status = sqlDate.compareTo(i.getBeginDate());  //provera da li je unesen krajnji datum stariji ili mladji od danasnjeg
        if (status <=0) {
        	System.out.println("Can't enter end date from the past.");
        	return false;
        }
        
		return fanZoneService.addItem(i);

	}
	
	@RequestMapping(value = "/deleteitem/{id}")
	public Boolean deleteItem(@PathVariable("id") int id) {
		
		return fanZoneService.deleteItem(id);
		
		
	}
	
	
}
