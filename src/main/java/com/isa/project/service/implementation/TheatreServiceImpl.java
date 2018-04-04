package com.isa.project.service.implementation;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		System.out.println("theatre service impl");
		return theatreRepository.findAll();
	}
	
	



}
