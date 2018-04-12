package com.isa.project.bean;


import java.util.List;

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
    
    @Column(name = "rating", nullable = false)
    private int rating;

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





	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "cinema_projection", joinColumns = @JoinColumn(name = "id"), inverseJoinColumns = @JoinColumn(name = "projekcija_id"))
    private List<Projection> projekcije;

	public List<Projection> getProjekcije() {
		return projekcije;
	}

	public void setProjekcije(List<Projection> projekcije) {
		this.projekcije = projekcije;
	}

	public Cinema() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cinema(Long id, String name, String address, String description, int rating, List<Projection> projekcije) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.description = description;
		this.rating = rating;
		this.projekcije = projekcije;
	}

	@Override
	public String toString() {
		return "Cinema [id=" + id + ", name=" + name + ", address=" + address + ", description=" + description
				+ ", rating=" + rating + ", projekcije=" + projekcije + "]";
	}
	
	
}
