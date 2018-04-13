package com.isa.project.bean;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="notification")
public class Notification implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public Notification() {}
	
	public Notification(String text, User user) {
		this.text = text;
		this.user = user;
	}

	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Integer notificationID;
	
	@Column
	@NotNull
	private String text;
	
	@ManyToOne
	@JoinColumn(name="userID")
	@NotNull
	private User user;
	
	public Integer getNotificationID() {
		return notificationID;
	}

	public void setNotificationID(Integer notificationID) {
		this.notificationID = notificationID;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
}
