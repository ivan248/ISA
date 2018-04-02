package com.isa.project.web.dto;

import java.sql.Date;

public class AddNewItemDto {
	private String name;
	private String description;
	
	private float currentBid;
	private Date endDate;
	private String image;
	
	public AddNewItemDto() {
		
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public float getCurrentBid() {
		return currentBid;
	}
	public void setCurrentBid(float currentBid) {
		this.currentBid = currentBid;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
}
