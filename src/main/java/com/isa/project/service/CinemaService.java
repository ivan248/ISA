package com.isa.project.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.isa.project.bean.Cinema;

@Service
public interface CinemaService {

	ArrayList<Cinema> getAllCinemas();
	Boolean editCinema(Cinema cinema);

	

}
