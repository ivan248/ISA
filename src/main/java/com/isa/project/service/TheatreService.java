package com.isa.project.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.isa.project.bean.Play;
import com.isa.project.bean.Theatre;

@Service
public interface TheatreService {

	ArrayList<Theatre> getAllTheatres();

	Boolean editTheatre(Theatre theatre);

	ArrayList<Theatre> findByNameContaining(String theatre);

	ArrayList<Play> getPlays(int theatreId);


	

}
