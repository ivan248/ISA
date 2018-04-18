package com.isa.project.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.isa.project.bean.OfficialItem;
import com.isa.project.bean.User;
import com.isa.project.repository.OfficialItemRepository;
import com.isa.project.service.OfficialItemService;



@Service
public class OfficialItemServiceImpl implements OfficialItemService {

	@Autowired
	private OfficialItemRepository officialItemRepository;
	
	@Override
	public Boolean editItem(OfficialItem i) {
		try {
			
			officialItemRepository.save(i);
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
		
		
		return true;
	}

	@Override
	public Boolean reserve(OfficialItem i) {
		try {
			
			i.setReserved(true);
			officialItemRepository.save(i);
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

	@Override
	@Transactional(readOnly=false, propagation = Propagation.REQUIRES_NEW)
	public Boolean reserve(int id, User u) {
		try {
		
		OfficialItem i = officialItemRepository.findOneByItemID(id);
		i.setReserved(true);
		i.setBuyer(u);
		
		officialItemRepository.flush();
		return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
