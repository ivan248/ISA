package com.isa.project.bean;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;

@Embeddable
public class ProjectionUserTicketId implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4117729916538736188L;

	@NotNull
	private Long projectionId;
	
	@NotNull
	private Long userId;
	
	@NotNull
	private Long ticketId;
	
	public ProjectionUserTicketId() {
		
	}

	public ProjectionUserTicketId(Long projectionId, Long userId, Long ticketId) {
		super();
		this.projectionId = projectionId;
		this.userId = userId;
		this.ticketId = ticketId;
	}

	public Long getProjectionId() {
		return projectionId;
	}

	public void setProjectionId(Long projectionId) {
		this.projectionId = projectionId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getTicketId() {
		return ticketId;
	}

	public void setTicketId(Long ticketId) {
		this.ticketId = ticketId;
	}

	@Override
	public String toString() {
		return "MovieUserTicketID [projectionId=" + projectionId + ", userId=" + userId + ", ticketId=" + ticketId
				+ "]";
	}
	
	
	
}
