package com.isa.project.service.implementation;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

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
	@Transactional(readOnly = false)
	public Boolean editItem(Item item) {
		try {
			Item i = itemRepository.findOneByItemID(item.getItemID());
			i.setCurrentBid(item.getCurrentBid());
			i.setDescription(item.getDescription());
			i.setEndDate(item.getEndDate());
			i.setName(item.getName());
			i.setImage(item.getImage());
			
			
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
	public Boolean checkApproved(int id) { //provera da li je item koji treba da se pormeni approvovan
		try {
			Item i = itemRepository.findOneByItemID(id);
			if (i.getApproved()) {
				return true;
			} else {
				return false;
			}
		}
		catch(Exception e) {
			System.out.println("Error occured while reading from  database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
	}
		

	@Override
	@Transactional(readOnly = false)
	public Boolean approveItem(int id) { 
		try {
			Item i = itemRepository.findOneByItemID(id);
			System.out.println(i.toString());
			i.setApproved(true);
			itemRepository.flush();
			return true;
		}
		catch(Exception e) {
			System.out.println("Error occured while reading from  database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
		
	}

	@Override
	@Transactional(readOnly = false, propagation = Propagation.REQUIRES_NEW)
	public Boolean bid(Item i, float value) {
		try {
			
			if(i.getApproved()) {
				if (value > i.getCurrentBid()) {
					System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
					System.out.println("Verzija itema pre update: " + i.getVersion());
					System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
					i.setCurrentBid(value);
					i.setSomeoneBid(true);
					
					System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
					System.out.println("Verzija itema za update: " + i.getVersion());
					System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
					itemRepository.save(i);
					//ovde treba rollback (runtimeexception)
					return true;
				} else { //nema smisla ostavljati ponudu manju od trenutne
					System.out.println("Ponuda je manja od trenutne");
					return false;
				}
				
			} else {
				return false;
			}
			
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Updated item was changed before your request.");
			
			return false;
		}
		
	}

	@Override
	@Transactional(readOnly = false)
	public Boolean acceptBid(int id) { //kada prodavac odluci da prihvati ponudu
		try {
			Item i = itemRepository.findOneByItemID(id);
			if(i.getApproved()) {
				if (i.getSomeoneBid()) {
					i.setSold(true);
					itemRepository.flush();
					return true; //obavesti korisnika koji je kupio bla bla bla
				} else { 
					System.out.println("Nije se moglo prodati jer ne postoji kupac");
					return false;
				}
				
			} else {
				return false;
			}
			
		}
		catch(Exception e) {
			System.out.println("Error occured while reading from  database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
	}


	
	
}
