package com.isa.project.bean;

import java.util.List;

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
    
    @Column(name = "rating", nullable = false)
    private int rating;
    
    @Column(name = "numberOfGrades", nullable = false)
 	private int numberOfGrades;
    
    @Column(name = "sum", nullable = false)
 	private int sum;
    
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "theatre_projection", joinColumns = @JoinColumn(name = "id"), inverseJoinColumns = @JoinColumn(name = "projekcija_id"))
    private List<Projection> projekcije;
	
	


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
	
	
	
	
	
	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}
	
	

	public int getNumberOfGrades() {
		return numberOfGrades;
	}

	public void setNumberOfGrades(int numberOfGrades) {
		this.numberOfGrades = numberOfGrades;
	}

	public int getSum() {
		return sum;
	}

	public void setSum(int sum) {
		this.sum = sum;
	}

	public List<Projection> getProjekcije() {
		return projekcije;
	}

	public void setProjekcije(List<Projection> projekcije) {
		this.projekcije = projekcije;
	}

	public Theatre() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Theatre(Long id, String name, String address, String description, int sum, int numberOfGrades, int rating) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.description = description;
		this.sum = sum;
		this.numberOfGrades = numberOfGrades;
		this.rating = rating;
	}


	@Override
	public String toString() {
		return "Cinema [id=" + id + ", name=" + name + ", address=" + address + ", description="
				+ description + "]";
	}
	
	


    
    
	
	
}
