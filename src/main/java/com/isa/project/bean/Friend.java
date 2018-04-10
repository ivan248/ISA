package com.isa.project.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "friend")
public class Friend {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "friend_id")
	private int friendId;

	@Column(name = "friendUsername")
	private String friendUsername;

	@Column(name = "friendFirstName")
	private String friendFirstName;

	@Column(name = "friendLastName")
	private String friendLastName;

	@Column(name = "enabled")
	private boolean enabled;
	
	// he sent the request so there isnt a need to show friend request in his 
	// friend requests list
	@Column(name = "sender")
	private boolean sender;

	public Friend() {

	}

	public Friend(String friendUsername, String friendFirstName, String friendLastName) {
		super();
		this.friendUsername = friendUsername;
		this.friendFirstName = friendFirstName;
		this.friendLastName = friendLastName;
		this.enabled = false;
		this.sender = false;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public boolean isSender() {
		return sender;
	}

	public void setSender(boolean sender) {
		this.sender = sender;
	}

	public String getFriendFirstName() {
		return friendFirstName;
	}

	public void setFriendFirstName(String friendFirstName) {
		this.friendFirstName = friendFirstName;
	}

	public String getFriendLastName() {
		return friendLastName;
	}

	public void setFriendLastName(String friendLastName) {
		this.friendLastName = friendLastName;
	}

	public String getFriendUsername() {
		return friendUsername;
	}

	public void setFriendUsername(String friendUsername) {
		this.friendUsername = friendUsername;
	}

	public int getFriendId() {
		return friendId;
	}

	public void setFriendId(int friendId) {
		this.friendId = friendId;
	}

	@Override
	public String toString() {
		return "Friend [friendId=" + friendId + ", friendUsername=" + friendUsername + "]";
	}

}
