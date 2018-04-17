package com.isa.project.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.isa.project.bean.Play;
import com.isa.project.bean.Projection;
import com.isa.project.bean.Theatre;
import com.isa.project.web.dto.MovieReservationDTO;

@Service
public interface TheatreService {

	ArrayList<Theatre> getAllTheatres();

	Boolean editTheatre(Theatre theatre);

	ArrayList<Theatre> findByNameContaining(String theatre);

	ArrayList<Play> getPlays(int theatreId);

	ArrayList<Projection> getPlayDates(int parseInt);

	boolean makeReservation(MovieReservationDTO movieReservationDTO, String usernameFromToken);


	

}
