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

import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "item")
public class Item implements Serializable {
	
	public Item() {}
	
	public Item(String name,String description, float currentBid,Date endDate,String image ) {
		this.name = name;
		this.currentBid = currentBid;
		this.approved = false;
		this.description = description;
		this.sold = false;
		this.someoneBid = false;
		this.image = image;
		java.util.Date date = new java.util.Date();
		Date sqlDate = new java.sql.Date(date.getTime());
		System.out.println("PRI KREIRANJU ITEMA : " + sqlDate.toString() );
		
		this.beginDate = sqlDate;
		this.endDate = endDate;
		this.setBuyer(null);
	}


	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer itemID;
		
	//TODO: SLika fali za item
	
	@Column
	private String image;
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Size(min = 3, max = 100)
	@Column(length = 100)
	private String name;
	
	@Size(min = 10, max = 300)
	@Column(length = 300)
	private String description;
	
	@Column
	private Date beginDate;
	
	@Column
	private Date endDate;
	
	@Column(name = "currentBid")
	private float currentBid;
	
	@ManyToOne 
	@JoinColumn(name="ownerID")
	private User owner;
	public User getBuyer() {
		return buyer;
	}

	public void setBuyer(User buyer) {
		this.buyer = buyer;
	}

	@OneToOne 
	@JoinColumn(name="buyerID")
	private User buyer;
	
	
	public Integer getItemID() {
		return itemID;
	}

	public void setItemID(Integer itemID) {
		this.itemID = itemID;
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

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public float getCurrentBid() {
		return currentBid;
	}

	public void setCurrentBid(float currentBid) {
		this.currentBid = currentBid;
	}

	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}

	public Boolean getApproved() {
		return approved;
	}

	public void setApproved(Boolean approved) {
		this.approved = approved;
	}

	@Column
	private Boolean approved;
	
	@Column 
	private Boolean sold;
	
	@Column 
	private Boolean someoneBid;

	public Boolean getSomeoneBid() {
		return someoneBid;
	}

	public void setSomeoneBid(Boolean someoneBid) {
		this.someoneBid = someoneBid;
	}

	public Boolean getSold() {
		return sold;
	}

	public void setSold(Boolean sold) {
		this.sold = sold;
	}
	
	
	

}
