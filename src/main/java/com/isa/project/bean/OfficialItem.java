package com.isa.project.bean;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;



@Entity
@Table(name="officialItem")
public class OfficialItem implements Serializable  {

	public OfficialItem() {}
	
	public OfficialItem(String name, String description, float price, String image, Cinema c, Theatre t ) {
		this.name = name;
		this.description = description;
		java.util.Date date = new java.util.Date();
		Date sqlDate = new java.sql.Date(date.getTime());
		this.beginDate = sqlDate; 
		this.price = price;
		this.image = image;
		this.reserved = false;
		this.buyer = null;
		//this.cinemaOwner = c; //Ova dva se medjusobno iskljucuju
		this.theatre = t;
		this.sold = false;
	}
	
	
	
	public Boolean getSold() {
		return sold;
	}

	public void setSold(Boolean sold) {
		this.sold = sold;
	}



	private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int itemID;
	
	@Column
	private String image;
	
	
	@Size(min = 3, max = 100)
	@Column(length = 100)
	@NotNull
	private String name;
	
	@Size(min = 10, max = 300)
	@Column(length = 300)
	private String description;
	
	@Column
	private Date beginDate;
	
	@NotNull
	@Column(name = "price")
	private float price;
	
	@Column(name = "reserved")
	private Boolean reserved;
	
	@ManyToOne
	@JoinColumn
	private User buyer;
	
	@ManyToOne
	@JoinColumn(name="cinemaID")
	private Cinema cinema;
	
	@ManyToOne
	@JoinColumn(name="theatreID")
	private Theatre theatre;
	
	@Column
	private Boolean sold;
	
	public int getItemID() {
		return itemID;
	}

	public Cinema getCinemaOwner() {
		return cinema;
	}

	public void setCinemaOwner(Cinema cinemaOwner) {
		this.cinema = cinemaOwner;
	}

	public Theatre getTheatreOwner() {
		return theatre;
	}

	public void setTheatreOwner(Theatre theatreOwner) {
		this.theatre = theatreOwner;
	}

	public void setItemID(int itemID) {
		this.itemID = itemID;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
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

	public Date getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(Date beginDate) {
		this.beginDate = beginDate;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public Boolean getReserved() {
		return reserved;
	}

	public void setReserved(Boolean reserved) {
		this.reserved = reserved;
	}

	public User getBuyer() {
		return buyer;
	}

	public void setBuyer(User buyer) {
		this.buyer = buyer;
	}

	
	
	
	
}
