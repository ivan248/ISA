package com.isa.project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.isa.project.bean.Item;
import com.isa.project.bean.OfficialItem;

@Service
public interface FanZoneService {

	List<Item> getAllApprovedItems();
	List<Item> getAllUnApprovedItems();
	Boolean addItem(Item item);
	Boolean deleteItem(int id);
	
	List<OfficialItem> getAllOfficialItems();
	Boolean addOfficialItem(OfficialItem item);
	Boolean deleteOfficialItem(int id);
	
	
	
	//TODO: vraac sve iteme prijavljenog korisnika
	//TODO: vraca sve ponude prijavljenog korisnika
	

}
