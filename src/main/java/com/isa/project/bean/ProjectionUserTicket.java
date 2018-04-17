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
    
    @Column(name = "enabled")
    private boolean enabled;
	
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

	@Override
	public String toString() {
		return "ProjectionUserTicket [movieUserTicketId=" + movieUserTicketId + ", isMovie=" + isMovie + ", enabled="
				+ enabled + "]";
	}


	
}
