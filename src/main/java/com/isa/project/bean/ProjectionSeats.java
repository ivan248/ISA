package com.isa.project.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Version;

@Entity
@Table(name = "projectionSeats")
public class ProjectionSeats {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "projectionSeatsId", nullable = false, updatable = false)
	private Long id;
	
    @Column(name = "seatNumber", nullable = false)
	private int seatNumber;
    
    @Column(name = "projectionId", nullable = false)
	private Long projectionId;
    
    // false = slobondno, true = zauzeto
    @Column(name = "seatTaken", nullable = false)
	private boolean seatTaken;
    
    @Column(name = "movieId")
	private Long movieId;

	@Version
	private int version;

	public ProjectionSeats() {
		
	}

	public ProjectionSeats(int seatNumber, Long projectionId, Long movieId) {
		super();
		this.seatNumber = seatNumber;
		this.projectionId = projectionId;
		this.seatTaken = false;
		this.movieId = movieId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public int getSeatNumber() {
		return seatNumber;
	}

	public void setSeatNumber(int seatNumber) {
		this.seatNumber = seatNumber;
	}

	public Long getProjectionId() {
		return projectionId;
	}

	public void setProjectionId(Long projectionId) {
		this.projectionId = projectionId;
	}

	public boolean isSeatTaken() {
		return seatTaken;
	}

	public void setSeatTaken(boolean seatTaken) {
		this.seatTaken = seatTaken;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	@Override
	public String toString() {
		return "ProjectionSeats [id=" + id + ", seatNumber=" + seatNumber + ", projectionId=" + projectionId
				+ ", seatTaken=" + seatTaken + ", version=" + version + "]";
	}
	
	
	
}
