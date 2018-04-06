package com.isa.project.service.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isa.project.bean.Item;
import com.isa.project.bean.OfficialItem;
import com.isa.project.repository.ItemRepository;
import com.isa.project.repository.OfficialItemRepository;
import com.isa.project.service.FanZoneService;

@Service
public class FanZoneServiceImpl implements FanZoneService{
	
	
	@Autowired
	private ItemRepository itemRepository;
	
	@Autowired
	private OfficialItemRepository officialItemRepository;
	
	@Override
	public List<Item> getAllApprovedItems() {
		return itemRepository.findAllByApproved(true);
	}
	
	@Override
	public List<Item> getAllUnApprovedItems(){
		return itemRepository.findAllByApproved(false);
	}

	@Override
	public Boolean addItem(Item item) {
		try {
			itemRepository.saveAndFlush(item);
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
		
		
		return true;
	}

	@Override
	public Boolean deleteItem(int id) {
		try {
			//obavesti autora da mu je ponuda odbijena.. nema brisanja radi evidencije
			itemRepository.delete(id);
		}
		catch(Exception e) {
			System.out.println("Error occured while deleting item from database.");
			e.printStackTrace();
			return false;
		}	
		
		return true;
	}

	

	@Override
	public Boolean addOfficialItem(OfficialItem item) {
		try {
			officialItemRepository.saveAndFlush(item);
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
		
		
		return true;
	}

	@Override
	public Boolean deleteOfficialItem(int id) {
		try {
			//obavesti autora da mu je ponuda odbijena.. nema brisanja radi evidencije
			officialItemRepository.delete(id);
		}
		catch(Exception e) {
			System.out.println("Error occured while deleting item from database.");
			e.printStackTrace();
			return false;
		}	
		
		return true;
	}

	@Override
	public List<OfficialItem> getAllOfficialItems() {
		return officialItemRepository.findAll();
	}

	



}
