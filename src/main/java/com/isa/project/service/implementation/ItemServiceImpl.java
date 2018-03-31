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
	public Boolean approveItem(int id) { 
		try {
			Item i = itemRepository.findOneByItemID(id);
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
	public Boolean bid(int id,float bid) {
		try {
			Item i = itemRepository.findOneByItemID(id);
			if(i.getApproved()) {
				if (bid > i.getCurrentBid()) {
					i.setCurrentBid(bid);
					i.setSomeoneBid(true);
					itemRepository.flush();
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
			System.out.println("Error occured while reading from  database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
		
	}

	@Override
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
