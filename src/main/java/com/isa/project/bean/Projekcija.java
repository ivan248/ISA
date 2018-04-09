package com.isa.project.bean;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "projekcija")
public class Projekcija {
	
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

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
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

		public Projekcija() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Projekcija(Long id, Date date, String time, String place, float price) {
			super();
			this.id = id;
			this.date = date;
			this.time = time;
			this.place = place;
			this.price = price;
		}

		@Override
		public String toString() {
			return "Projekcija [id=" + id + ", date=" + date + ", time=" + time + ", place=" + place + ", price="
					+ price + "]";
		}
	    
	    
	    
}
