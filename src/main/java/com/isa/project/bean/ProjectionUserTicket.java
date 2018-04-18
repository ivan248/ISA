package com.isa.project.bean;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "projectionUserTicket")
public class ProjectionUserTicket {

	
	@EmbeddedId
	private ProjectionUserTicketId movieUserTicketId;
	
    @Column(name = "isMovie")
    private boolean isMovie;
    
    // da li je rezervacija postala projekcija
    @Column(name = "enabled")
    private boolean enabled;
    
    // da li je rezervacija approvovana
    @Column(name = "approved")
    private boolean approved;
    
    // ne radi
    @Column(name = "gradeAmb")
    private int gradeAmb;
    
    @Column(name = "gradeMov")
    private int gradeMov;
	
	public ProjectionUserTicket() {
		
	}
	
	public ProjectionUserTicket(ProjectionUserTicketId movieUserTicketID) {
		super();
		this.movieUserTicketId = movieUserTicketID;
	}

	public ProjectionUserTicketId getMovieUserTicketID() {
		return movieUserTicketId;
	}

	public void setMovieUserTicketID(ProjectionUserTicketId movieUserTicketID) {
		this.movieUserTicketId = movieUserTicketID;
	}
	
	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public boolean isApproved() {
		return approved;
	}

	public void setApproved(boolean approved) {
		this.approved = approved;
	}

	public ProjectionUserTicketId getMovieUserTicketId() {
		return movieUserTicketId;
	}

	public void setMovieUserTicketId(ProjectionUserTicketId movieUserTicketId) {
		this.movieUserTicketId = movieUserTicketId;
	}

	public boolean isMovie() {
		return isMovie;
	}

	public void setMovie(boolean isMovie) {
		this.isMovie = isMovie;
	}
	
	

	public int getGradeAmb() {
		return gradeAmb;
	}

	public void setGradeAmb(int gradeAmb) {
		this.gradeAmb = gradeAmb;
	}

	public int getGradeMov() {
		return gradeMov;
	}

	public void setGradeMov(int gradeMov) {
		this.gradeMov = gradeMov;
	}

	@Override
	public String toString() {
		return "ProjectionUserTicket [movieUserTicketId=" + movieUserTicketId + ", isMovie=" + isMovie + ", enabled="
				+ enabled + ", approved=" + approved + "]";
	}

	
}
