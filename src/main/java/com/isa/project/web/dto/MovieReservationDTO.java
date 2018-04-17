package com.isa.project.web.dto;

import java.sql.Date;
import java.util.ArrayList;

public class MovieReservationDTO {
	
	private Long projectionId;
	private String movieName;
	private Date date;
	private String time;
	private String place;
	private ArrayList<Integer> seatsTaken;
	private ArrayList<String> invitedFriends;
	
	public MovieReservationDTO() {
		
	}

	public Long getProjectionId() {
		return projectionId;
	}

	public void setProjectionId(Long projectionId) {
		this.projectionId = projectionId;
	}

	public ArrayList<String> getInvitedFriends() {
		return invitedFriends;
	}

	public void setInvitedFriends(ArrayList<String> invitedFriends) {
		this.invitedFriends = invitedFriends;
	}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}



	public ArrayList<Integer> getSeatsTaken() {
		return seatsTaken;
	}

	public void setSeatsTaken(ArrayList<Integer> seatsTaken) {
		this.seatsTaken = seatsTaken;
	}

	@Override
	public String toString() {
		return "MovieReservationDTO [projectionId=" + projectionId + ", movieName=" + movieName + ", date=" + date
				+ ", time=" + time + ", place=" + place + ", seatsTaken=" + seatsTaken + ", invitedFriends="
				+ invitedFriends + "]";
	}

	

	
}