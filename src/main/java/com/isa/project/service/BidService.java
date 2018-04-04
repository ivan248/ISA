package com.isa.project.service;

import org.springframework.stereotype.Service;

import com.isa.project.bean.Bid;

@Service
public interface BidService {
	public Boolean acceptBid(Bid bid);
	public Boolean addBid(Bid bid);
}
