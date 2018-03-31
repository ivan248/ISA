package com.isa.project.bean;

import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "cinema")
public class Cinema {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(name = "cinema_id", nullable = false, updatable = false)
    private Long cinema_id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "address", nullable = false)
    private String address;
    
    @Column(name = "description", nullable = false)
    private String description;

	public Long getCinema_id() {
		return cinema_id;
	}

	public void setCinema_id(Long cinema_id) {
		this.cinema_id = cinema_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public Cinema() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cinema(Long cinema_id, String name, String address, String description) {
		super();
		this.cinema_id = cinema_id;
		this.name = name;
		this.address = address;
		this.description = description;
	}


	@Override
	public String toString() {
		return "Cinema [cinema_id=" + cinema_id + ", name=" + name + ", address=" + address + ", description="
				+ description + "]";
	}
	
	


    
    
	
	
}
