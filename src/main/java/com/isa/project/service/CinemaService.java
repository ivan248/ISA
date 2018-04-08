package com.isa.project.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.isa.project.bean.Cinema;
import com.isa.project.bean.Movie;

@Service
public interface CinemaService {

	ArrayList<Cinema> getAllCinemas();
	Boolean editCinema(Cinema cinema);
	public List<Movie> getMovies(String username);

	

}
