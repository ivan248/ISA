package com.isa.project.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isa.project.bean.Item;
import com.isa.project.repository.ItemRepository;
import com.isa.project.service.ItemService;

@Service
public class ItemServiceImpl implements ItemService {
	
	@Autowired
	private ItemRepository itemRepository;

	@Override
	public Boolean editItem(Item item) {
		try {
			Item i = itemRepository.findOneByItemID(item.getItemID());
			i.setCurrentBid(item.getCurrentBid());
			i.setDescription(item.getDescription());
			i.setEndDate(item.getEndDate());
			i.setName(item.getName());
			
			
			itemRepository.flush();
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
		
		
		return true;
	}
		

	@Override
	public Boolean approveItem(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean bid(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean acceptBid(int id) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
