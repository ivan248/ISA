package com.isa.project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.isa.project.bean.Item;

@Service
public interface FanZoneService {

	List<Item> getAllApprovedItems();
	List<Item> getAllUnApprovedItems();
	Boolean addItem(Item item);
	Boolean deleteItem(int id);
	
	//TODO: vraac sve iteme prijavljenog korisnika
	//TODO: vraca sve ponude prijavljenog korisnika
	

}
