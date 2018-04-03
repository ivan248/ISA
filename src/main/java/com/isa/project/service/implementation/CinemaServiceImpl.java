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
	
	



}