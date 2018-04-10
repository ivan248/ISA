package com.isa.project.bean;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "movie")
public class Movie {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(name = "movie_id", nullable = false, updatable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "genre", nullable = false)
    private String genre;
    
    @Column(name = "description", nullable = false)
    private String description;
    
    @Column(name = "producer", nullable = false)
    private String producer;
    
    @Column(name = "actors", nullable = true)
    private ArrayList<String> actors;
    
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "projekcija_movie", joinColumns = @JoinColumn(name = "movie_id"), inverseJoinColumns = @JoinColumn(name = "projekcija_id"))
    private List<Projection> projekcije;
    
    
    
   public Movie(Long id, String name, String genre, String description, String producer, ArrayList<String> actors,
			List<Projection> projekcije) {
		super();
		this.id = id;
		this.name = name;
		this.genre = genre;
		this.description = description;
		this.producer = producer;
		this.actors = actors;
		this.projekcije = projekcije;
	}









/* @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "termini_movies", joinColumns = @JoinColumn(name = "movie_id"), inverseJoinColumns = @JoinColumn(name = "termin_id"))
    private List<Termin> termini;
	
    
    
	public List<Termin> getTermini() {
		return termini;
	}



	public void setTermini(List<Termin> termini) {
		this.termini = termini;
	}*/



	public List<Projection> getProjekcije() {
		return projekcije;
	}









	public void setProjekcije(List<Projection> projekcije) {
		this.projekcije = projekcije;
	}









	public Movie() {
		super();
		// TODO Auto-generated constructor stub
	}



	
	
	



	public Movie(Long id, String name, String genre, String description, String producer, ArrayList<String> actors
			) {
		super();
		this.id = id;
		this.name = name;
		this.genre = genre;
		this.description = description;
		this.producer = producer;
		this.actors = actors;
	}



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



	public String getGenre() {
		return genre;
	}



	public void setGenre(String genre) {
		this.genre = genre;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public String getProducer() {
		return producer;
	}



	public void setProducer(String producer) {
		this.producer = producer;
	}



	public ArrayList<String> getActors() {
		return actors;
	}



	public void setActors(ArrayList<String> actors) {
		this.actors = actors;
	}



	@Override
	public String toString() {
		return "Movie [id=" + id + ", name=" + name + ", genre=" + genre + ", description=" + description
				+ ", producer=" + producer + ", actors=" + actors + ", projekcije=" + projekcije + "]";
	}



	
	
	
	
	

	
	
}
