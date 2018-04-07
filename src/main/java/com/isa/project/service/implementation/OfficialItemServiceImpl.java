package com.isa.project.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isa.project.bean.OfficialItem;
import com.isa.project.repository.OfficialItemRepository;
import com.isa.project.service.OfficialItemService;

@Service
public class OfficialItemServiceImpl implements OfficialItemService {

	@Autowired
	private OfficialItemRepository officialItemRepository;
	
	@Override
	public Boolean editItem(OfficialItem item) {
		try {
			OfficialItem i = officialItemRepository.findOneByItemID(item.getItemID());
			System.out.println("AAAAAAAAAAAAAAAAAAAA " + item.getPrice() );
			i.setPrice(item.getPrice());
			i.setDescription(item.getDescription());
			i.setImage(item.getImage());
			i.setName(item.getName());
			i.setCinemaOwner(item.getCinemaOwner());
			i.setTheatreOwner(item.getTheatreOwner());
			
			officialItemRepository.flush();
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
		
		
		return true;
	}

	@Override
	public Boolean reserve(int id) {
		try {
			OfficialItem i = officialItemRepository.findOneByItemID(id);
			i.setReserved(true);
			officialItemRepository.flush();
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
		
		
		return true;
	}

	@Override
	public Boolean setSold(int id) {
		try {
			OfficialItem i = officialItemRepository.findOneByItemID(id);
			i.setSold(true);
			officialItemRepository.flush();
			return true;
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
	}

}
