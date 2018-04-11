package com.isa.project.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "actor")
public class Actor {
	
 	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(name = "actor_id", nullable = false, updatable = false)
	private Long id;
 	
 	@Column(name = "name")
 	private String name;
 	
 	@Column(name = "lastName")
 	private String lastName;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Actor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Actor(Long id, String name, String lastName) {
		super();
		this.id = id;
		this.name = name;
		this.lastName = lastName;
	}

	@Override
	public String toString() {
		return "Actor [id=" + id + ", name=" + name + ", lastName=" + lastName + "]";
	}
 	
 	
 	
 	

}
