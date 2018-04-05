package com.isa.project.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isa.project.bean.Bid;
import com.isa.project.repository.BidRepository;

import com.isa.project.service.BidService;

@Service
public class BidServiceImpl implements BidService {

	@Autowired
	private BidRepository bidRepository;
	
	@Override
	public Boolean acceptBid(Bid bid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean addBid(Bid bid) {
		try {
			System.out.println("SAVEOVAO BID");
			bidRepository.saveAndFlush(bid);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		
	}

}
