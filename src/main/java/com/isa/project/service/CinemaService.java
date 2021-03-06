package com.isa.project.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.isa.project.bean.Cinema;
import com.isa.project.bean.Movie;
import com.isa.project.bean.Projection;
import com.isa.project.bean.Ticket;
import com.isa.project.web.dto.MovieReservationDTO;

@Service
public interface CinemaService {

	ArrayList<Cinema> getAllCinemas();
	Boolean editCinema(Cinema cinema);
	public List<Movie> getMovies(Long id);
	Cinema getCinemaById(Long id);
	public Boolean deleteMovie(Long movieid, Long cinemaid);
	public Boolean deleteProjection(Long movieid, Long projectionid, Long cinemaid);
	Boolean editProjection(Projection projekcija);
	Boolean addProjection(Projection projekcija, Long movieid, Long cinemaid);
	Projection getProjection(Long projectionId);
	boolean makeReservation(MovieReservationDTO movieReservationDTO, String string);
	boolean setTicketToSold(Ticket t, String username, Long projectionId);
	boolean setTicketToDeleted(Projection projection, String seat);
	boolean addTicketToFast(String price, String seat, Long cinemaid, Long movieid, Long projectionid);
	boolean deleteTicket(Long ticketid);
	ArrayList<Cinema> findByNameContaining(String cinema);
	ArrayList<Projection> getPlayDates(int parseInt);
	Boolean addCinema(Cinema c);
	

}
