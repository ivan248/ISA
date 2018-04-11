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

	public Ticket(Long id, int seatNumber) {
		super();
		this.id = id;
		this.seatNumber = seatNumber;
	}

	@Override
	public String toString() {
		return "Ticket [id=" + id + ", seatNumber=" + seatNumber + "]";
	}
	
	
	
	

}
