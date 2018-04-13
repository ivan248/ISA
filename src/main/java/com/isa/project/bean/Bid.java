package com.isa.project.bean;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="bid")
public class Bid implements Serializable {
	
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer bidID;
	
	@Column
	@NotNull
	private float value;
	
	@OneToOne
	@JoinColumn(name="buyerID")
	@NotNull
	private User buyer;
	
	@ManyToOne(optional = false)
	@JoinColumn(name="itemID")
	@NotNull
	private Item item;
	
	public Bid() {}
	

	public float getValue() {
		return value;
	}

	public void setValue(float value) {
		this.value = value;
	}

	public User getBuyer() {
		return buyer;
	}

	public void setBuyer(User buyer) {
		this.buyer = buyer;
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}
	public Integer getBidID() {
		return bidID;
	}


	public void setBidID(Integer bidID) {
		this.bidID = bidID;
	}

	
}
 