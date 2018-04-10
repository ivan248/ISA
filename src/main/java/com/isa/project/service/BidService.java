package com.isa.project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.isa.project.bean.Bid;
import com.isa.project.bean.Item;

@Service
public interface BidService {
	public Boolean acceptBid(Bid bid);
	public Boolean addBid(Bid bid);
	public List<Bid> getAllItemBids(Item item);
}
