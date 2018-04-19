package com.isa.project.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.isa.project.bean.Cinema;
import com.isa.project.bean.Play;
import com.isa.project.bean.Projection;
import com.isa.project.bean.Theatre;
import com.isa.project.bean.Ticket;
import com.isa.project.web.dto.MovieReservationDTO;

@Service
public interface TheatreService {

	ArrayList<Theatre> getAllTheatres();

	Boolean editTheatre(Theatre theatre);

	ArrayList<Theatre> findByNameContaining(String theatre);

	ArrayList<Play> getPlays(int theatreId);

	ArrayList<Projection> getPlayDates(int parseInt);

	boolean makeReservation(MovieReservationDTO movieReservationDTO, String usernameFromToken);
	
	Cinema addProjection(Projection projekcija, Long movieid, Long cinemaid);
	
	Boolean addTheatre(Theatre t);

	
	/*Cinema getCinemaById(Long id);
	public Boolean deletePlay(Long movieid, Long cinemaid);
	public Boolean deleteProjection(Long movieid, Long projectionid, Long cinemaid);
	Boolean editProjection(Projection projekcija);
	
	Boolean changeTicket(Ticket ticket, Long cinemaid);
	
	boolean makeReservation(MovieReservationDTO movieReservationDTO, String string);
	boolean setTicketToSold(Long ticketid);
	boolean setTicketToDeleted(Projection projection, String seat);
	boolean addTicketToFast(String price, String seat, Long cinemaid, Long movieid, Long projectionid);
	boolean deleteTicket(Long ticketid);
	ArrayList<Cinema> findByNameContaining(String cinema);
	ArrayList<Projection> getPlayDates(int parseInt); */


	

}
