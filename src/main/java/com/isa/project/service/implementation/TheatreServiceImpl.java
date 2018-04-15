package com.isa.project.service.implementation;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isa.project.bean.Play;
import com.isa.project.bean.Theatre;
import com.isa.project.repository.TheatreRepository;
import com.isa.project.service.TheatreService;

@Service
public class TheatreServiceImpl implements TheatreService{
	
	
	@Autowired
	private TheatreRepository theatreRepository;


	@Override
	public ArrayList<Theatre> getAllTheatres() {
		// TODO Auto-generated method stub
		return theatreRepository.findAll();
	}
	
	@Override
	public Boolean editTheatre(Theatre theatre) {

		try {
			Theatre t = theatreRepository.findOne(theatre.getId());
			t.setName(theatre.getName());
			t.setDescription(theatre.getDescription());
			t.setAddress(theatre.getAddress());
			t.setId(theatre.getId());
			
			
			theatreRepository.flush();
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.********");
			e.printStackTrace();
			return false;
		}
		
		
		return true;
	}

	@Override
	public ArrayList<Theatre> findByNameContaining(String theatre) {

		
	
		return theatreRepository.findByNameContaining(theatre);
	}

	@Override
	public ArrayList<Play> getPlays(int theatreId) {
		
		
		
		return null;
	}


	
	



}
