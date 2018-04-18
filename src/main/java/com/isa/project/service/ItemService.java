package com.isa.project.service;

import org.springframework.stereotype.Service;

import com.isa.project.bean.Item;

@Service
public interface ItemService {

	Item editItem(Item item);
	Boolean approveItem(Item item);
	//Boolean bid(Item i, float value) throws Exception;
	//Boolean bid(Item i, float value) throws Exception;
	//Boolean bid(Item i, float value) throws Exception;
	//Boolean bid(Item i, float value) throws Exception;
	//Boolean bid(Item i, float value) throws Exception;
	Boolean acceptBid(int id); //korisnik koji je okacio oglas prihvata ponudu(prodaje)
	Boolean checkApproved(int id); //provera da li je rekvizit odobren pre nego sto se izmeni
	
	
	//TODO: vraca sve ponude prijavljenog korisnika
	
}
