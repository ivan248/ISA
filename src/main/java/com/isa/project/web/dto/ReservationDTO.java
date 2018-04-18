package com.isa.project.web.dto;

import java.sql.Date;

import javax.persistence.Column;


public class ReservationDTO {
	
    private String name;
	
 	private Date date;
 	
 	private String time;
     
 	private String place;
     
 	private float price;
    
    private int seatNumber;
    
    // da li je rezervacija postala projekcija
    private boolean enabled;
    
    // da li je rezervacija approvovana
    private boolean approved;
    
    private int gradeAmb;

    private int gradeMov;
    
    // id projekcie
    private Long id;
    
    private Long idPlay;
    
    private Long idTicket;
    
    
    
    
    
 
    public Long getIdTicket() {
		return idTicket;
	}



	public void setIdTicket(Long idTicket) {
		this.idTicket = idTicket;
	}



	public Long getIdPlay() {
		return idPlay;
	}



	public void setIdPlay(Long idPlay) {
		this.idPlay = idPlay;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public ReservationDTO() {
    	
    }
    
	

	public ReservationDTO(String name, Long idPlay, Long idTicket, Long id, Date date, String time, String place, float price, int seatNumber,
			boolean enabled, boolean approved, int gradeAmb, int gradeMov) {
		super();
		this.name = name;
		this.date = date;
		this.time = time;
		this.place = place;
		this.price = price;
		this.seatNumber = seatNumber;
		this.enabled = enabled;
		this.approved = approved;
		this.gradeAmb = gradeAmb;
		this.gradeMov = gradeMov;
		this.id = id;
		this.idPlay = idPlay;
		this.idTicket = idTicket;
	
	}



	public int getGradeAmb() {
		return gradeAmb;
	}



	public void setGradeAmb(int gradeAmb) {
		this.gradeAmb = gradeAmb;
	}



	public int getGradeMov() {
		return gradeMov;
	}



	public void setGradeMov(int gradeMov) {
		this.gradeMov = gradeMov;
	}



	public boolean isApproved() {
		return approved;
	}

	public void setApproved(boolean approved) {
		this.approved = approved;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getSeatNumber() {
		return seatNumber;
	}

	public void setSeatNumber(int seatNumber) {
		this.seatNumber = seatNumber;
	}

	

}
