package com.isa.project.service;

import org.springframework.stereotype.Service;

import com.isa.project.bean.Item;

@Service
public interface ItemService {

	Boolean editItem(Item item);
	Boolean approveItem(int id);
<<<<<<< HEAD
<<<<<<< HEAD
	Boolean bid(Item i, float value) throws Exception;
=======
	//Boolean bid(Item i, float value) throws Exception;
>>>>>>> 702bf42071cb3a497b78007bdaa08761088d94bd
=======
	//Boolean bid(Item i, float value) throws Exception;
>>>>>>> 702bf42071cb3a497b78007bdaa08761088d94bd
	Boolean acceptBid(int id); //korisnik koji je okacio oglas prihvata ponudu(prodaje)
	Boolean checkApproved(int id); //provera da li je rekvizit odobren pre nego sto se izmeni
	
	
	//TODO: vraca sve ponude prijavljenog korisnika
	
}
