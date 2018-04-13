package com.isa.project.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ticket")
public class Ticket {
	
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(name = "ticket_id", nullable = false, updatable = false)
    private Long id;
    
    @Column(name = "seatNumber", nullable = false, unique = true)
	private int seatNumber;
    
    @Column(name = "fastRes", nullable = true)
   	private boolean fastRes;
    
    @Column(name = "sold", nullable = true)
   	private boolean sold;
    
    @Column(name = "salePrice", nullable = true)
   	private int salePrice;

	public Ticket() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getSeatNumber() {
		return seatNumber;
	}

	public void setSeatNumber(int seatNumber) {
		this.seatNumber = seatNumber;
	}
	
	

	public boolean isFastRes() {
		return fastRes;
	}
	

	public Ticket(Long id, int seatNumber, boolean fastRes) {
		super();
		this.id = id;
		this.seatNumber = seatNumber;
		this.fastRes = fastRes;
	}

	public void setFastRes(boolean fastRes) {
		this.fastRes = fastRes;
	}
	
	

	public boolean isSold() {
		return sold;
	}

	public void setSold(boolean sold) {
		this.sold = sold;
	}

	public Ticket(Long id, int seatNumber, boolean fastRes, int salePrice) {
		super();
		this.id = id;
		this.seatNumber = seatNumber;
		this.fastRes = fastRes;
		this.salePrice = salePrice;
	}

	public int getSalePrice() {
		return salePrice;
	}

	public void setSalePrice(int salePrice) {
		this.salePrice = salePrice;
	}
	
	

	public Ticket(int seatNumber, boolean fastRes, int price, boolean sold) {
		super();
		this.seatNumber = seatNumber;
		this.fastRes = fastRes;
		this.salePrice = price;
		this.sold = sold;
	}

	@Override
	public String toString() {
		return "Ticket [id=" + id + ", seatNumber=" + seatNumber + ", fastRes=" + fastRes + ", sold=" + sold
				+ ", salePrice=" + salePrice + "]";
	}
	
	

	
	
	
	

}
