package com.isa.project.service;

import org.springframework.stereotype.Service;

import com.isa.project.bean.Item;

@Service
public interface ItemService {

	Boolean editItem(Item item);
	Boolean approveItem(int id);
	Boolean bid(int id);
	Boolean acceptBid(int id); //korisnik koji je okacio oglas prihvata ponudu(prodaje)
	
	//TODO: vraca sve ponude prijavljenog korisnika
	
}
