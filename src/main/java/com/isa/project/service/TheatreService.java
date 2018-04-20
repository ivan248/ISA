package com.isa.project.service;

import java.util.ArrayList;
import java.util.List;

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
	

	Boolean addProjection(Projection projekcija, Long movieid, Long cinemaid);


	
	Boolean addTheatre(Theatre t);
	boolean setTicketToSold(Long ticketid);
	public Boolean deleteProjection(Long playid, Long projectionid, Long theatreid);
	public List<Play> getAllPlays(Long theatreId);
	public boolean addTicketToFast(String price, String seat, Long theatreid, Long playid, Long projectionid);

	


	
	/*Theatre getTheatreById(Long id);
	public Boolean deletePlay(Long movieid, Long cinemaid);
	
	
	Boolean changeTicket(Ticket ticket, Long cinemaid);
	
	boolean makeReservation(MovieReservationDTO movieReservationDTO, String string);
	
	boolean setTicketToDeleted(Projection projection, String seat);
	boolean addTicketToFast(String price, String seat, Long cinemaid, Long movieid, Long projectionid);
	boolean deleteTicket(Long ticketid);
	ArrayList<Cinema> findByNameContaining(String cinema);
	ArrayList<Projection> getPlayDates(int parseInt); */


	

}
