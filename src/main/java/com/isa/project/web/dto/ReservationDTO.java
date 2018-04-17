package com.isa.project.web.dto;

import java.sql.Date;


public class ReservationDTO {
	
    private String name;
	
 	private Date date;
 	
 	private String time;
     
 	private String place;
     
 	private float price;
    
    private int seatNumber;
    
    private boolean enabled;
    
    public ReservationDTO() {
    	
    }
    
	public ReservationDTO(String name, Date date, String time, String place, float price, int seatNumber,
			boolean enabled) {
		super();
		this.name = name;
		this.date = date;
		this.time = time;
		this.place = place;
		this.price = price;
		this.seatNumber = seatNumber;
		this.enabled = enabled;
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

	@Override
	public String toString() {
		return "ReservationDTO [name=" + name + ", date=" + date + ", time=" + time + ", place=" + place + ", price="
				+ price + ", seatNumber=" + seatNumber + ", enabled=" + enabled + "]";
	}

}
