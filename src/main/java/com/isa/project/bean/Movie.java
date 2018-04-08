package com.isa.project.bean;


import java.util.ArrayList;

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
    

	
	public Movie() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Movie(Long id, String name, String genre, String description, String producer, ArrayList<String> actors) {
		super();
		this.id = id;
		this.name = name;
		this.genre = genre;
		this.description = description;
		this.producer = producer;
		this.actors = actors;
	}



	@Override
	public String toString() {
		return "Movie [id=" + id + ", name=" + name + ", genre=" + genre + ", description=" + description
				+ ", producer=" + producer + ", actors=" + actors + "]";
	}
	
	
	
	

	
	
}
