package com.isa.project.service.implementation;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isa.project.bean.Cinema;
import com.isa.project.repository.CinemaRepository;
import com.isa.project.service.CinemaService;

@Service
public class CinemaServiceImpl implements CinemaService{
	
	
	@Autowired
	private CinemaRepository cinemaRepository;


	@Override
	public ArrayList<Cinema> getAllCinemas() {
		return cinemaRepository.findAll();
	}


	@Override
	public Boolean editCinema(Cinema cinema) {
		System.out.println("Editovanje bioskopa.");
		System.out.println("cinema: "+cinema.getName());
		try {
			Cinema c = cinemaRepository.findOne(cinema.getCinema_id());
			c.setName(cinema.getName());
			c.setDescription(cinema.getDescription());
			c.setAddress(cinema.getAddress());
			c.setCinema_id(cinema.getCinema_id());
			
			
			cinemaRepository.flush();
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.********");
			e.printStackTrace();
			return false;
		}
		
		
		return true;
	}


	



}
