package com.isa.project.bean;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "projection")
public class Projection {
	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY )
	    @Column(name = "projekcija_id", nullable = false, updatable = false)
		private Long id;

	 	@Column(name = "date", nullable = false)
	 	private Date date;
	     
	    @Column(name = "time", nullable = false)
	 	private String time;
	     
	    @Column(name = "place", nullable = false)
	 	private String place;
	     
	    @Column(name = "price", nullable = false)
	 	private float price;

	    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	    @JoinTable(name = "ticket_projection", joinColumns = @JoinColumn(name = "projekcija_id"), inverseJoinColumns = @JoinColumn(name = "ticket_id"))
	    private List<Ticket> tickets;

		public Projection() {
			super();
			// TODO Auto-generated constructor stub
		}
		
	 
		public Projection(Long id, Date date, String time, String place, float price, List<Ticket> tickets) {
			super();
			this.id = id;
			this.date = date;
			this.time = time;
			this.place = place;
			this.price = price;
			this.tickets = tickets;
		}


		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public Date getDate() {
			return date;
		}

		public void setDate(java.sql.Date date) {
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

	
		public List<Ticket> getTickets() {
			return tickets;
		}

		public void setTickets(List<Ticket> tickets) {
			this.tickets = tickets;
		}

	
}
