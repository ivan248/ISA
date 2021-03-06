package com.isa.project.service.implementation;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.isa.project.bean.Bid;
import com.isa.project.bean.Item;
import com.isa.project.repository.BidRepository;
import com.isa.project.repository.ItemRepository;
import com.isa.project.service.BidService;

@Service
public class BidServiceImpl implements BidService {

	@Autowired
	private BidRepository bidRepository;
	@Autowired 
	private ItemRepository itemRepository;
	
	@Override
	public Boolean acceptBid(Bid bid) {
		//Uzeti bid
		try {
			Item i = bid.getItem();
			i.setSold(true);
			
			itemRepository.save(i);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			System.out.println("Error while updating database");
			return false;
		}
		
		//Naci item
		//staviti item da je prodat
		//Na frontu staviti badge da je prodat i disableovati dugme bid
		//Ovbavestiti korisnike da je item prodat
		//obrisati ponude
		
		
	}

	@Override
	public Boolean addBid(Bid bid) {
		try {
			System.out.println("SAVEOVAO BID");
			Item i = bid.getItem();
			i = itemRepository.findOneByItemID(i.getItemID());
			if (i.getSold()) {
				return false;
			} else {
				bidRepository.saveAndFlush(bid);
				return true;
			}
			
			
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		
	}

	@Override
	public List<Bid> getAllItemBids(Item item) {
		
		return bidRepository.findAllByItemOrderByValueDesc(item);
	}

	@Override
	public Boolean changeBidValue(Bid bid) {
		
		try {
			
			Item i = bid.getItem();
			i = itemRepository.findOneByItemID(i.getItemID());
			if (i.getSold()) {
				return false;
			} else {
				
				bidRepository.save(bid);
				return true;
			}
			
			
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		
	}

}
