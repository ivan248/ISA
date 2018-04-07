package com.isa.project.bean;


import javax.persistence.*;

@Entity
@Table(name = "cinema")
public class Cinema {
	
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

	public Cinema(Long id, String name, String address, String description) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.description = description;
	}


	@Override
	public String toString() {
		return "Cinema [id" + id + ", name=" + name + ", address=" + address + ", description="
				+ description + "]";
	}
	
	


    
    
	
	
}
