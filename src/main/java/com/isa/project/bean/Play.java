package com.isa.project.bean;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "play")
public class Play {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(name = "play_id", nullable = false, updatable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "genre", nullable = false)
    private String genre;
    
    @Column(name = "description", nullable = false)
    private String description;
    
    @Column(name = "producer", nullable = false)
    private String producer;
    
    @Column(name = "rating", nullable = false)
 	private int rating;
    
    @Column(name = "numberOfGrades", nullable = false)
 	private int numberOfGrades;
    
    @Column(name = "sum", nullable = false)
 	private int sum;
    
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "actors_play", joinColumns = @JoinColumn(name = "play_id"), inverseJoinColumns = @JoinColumn(name = "actor_id"))
    private List<Actor> actors;
    
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "projection_play", joinColumns = @JoinColumn(name = "play_id"), inverseJoinColumns = @JoinColumn(name = "projekcija_id"))
    private List<Projection> projekcije;
    

	public Play(Long id, String name, String genre, String description, String producer, int rating, int numberOfGrades,
			List<Actor> actors, List<Projection> projekcije, int sum) {
		super();
		this.id = id;
		this.name = name;
		this.genre = genre;
		this.description = description;
		this.producer = producer;
		this.rating = rating;
		this.numberOfGrades = numberOfGrades;
		this.sum = sum;
		this.actors = actors;
		this.projekcije = projekcije;
	}
	
	

	public int getSum() {
		return sum;
	}



	public void setSum(int sum) {
		this.sum = sum;
	}



	public int getNumberOfGrades() {
		return numberOfGrades;
	}

	public void setNumberOfGrades(int numberOfGrades) {
		this.numberOfGrades = numberOfGrades;
	}

	public List<Projection> getProjekcije() {
		return projekcije;
	}

	public void setProjekcije(List<Projection> projekcije) {
		this.projekcije = projekcije;
	}



	public Play() {
		super();
		// TODO Auto-generated constructor stub
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



	public List<Actor> getActors() {
		return actors;
	}



	public void setActors(List<Actor> actors) {
		this.actors = actors;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
		return "Play [id=" + id + ", name=" + name + ", genre=" + genre + ", description=" + description + ", producer="
				+ producer + ", rating=" + rating + ", actors=" + actors + ", projekcije=" + projekcije + "]";
	}


	


	
	
	
	
	
	

	
	
}
