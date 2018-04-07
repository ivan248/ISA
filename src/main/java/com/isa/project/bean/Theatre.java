package com.isa.project.bean;

import javax.persistence.*;

@Entity
@Table(name = "theatre")
public class Theatre {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "address", nullable = false)
    private String address;
    
    @Column(name = "description", nullable = false)
    private String description;

	public Long getTheatre_id() {
		return id;
	}

	public void setTheatre_id(Long theatre_id) {
		this.id = theatre_id;
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
	
	public Theatre() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Theatre(Long theatre_id, String name, String address, String description) {
		super();
		this.id = theatre_id;
		this.name = name;
		this.address = address;
		this.description = description;
	}


	@Override
	public String toString() {
		return "Cinema [theatre_id=" + id + ", name=" + name + ", address=" + address + ", description="
				+ description + "]";
	}
	
	


    
    
	
	
}
