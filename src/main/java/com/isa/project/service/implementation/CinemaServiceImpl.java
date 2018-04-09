package com.isa.project.service.implementation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isa.project.bean.Cinema;
import com.isa.project.bean.Movie;
import com.isa.project.bean.Projekcija;
import com.isa.project.repository.CinemaRepository;
import com.isa.project.repository.MovieRepository;
import com.isa.project.repository.ProjekcijaRepository;
import com.isa.project.service.CinemaService;

@Service
public class CinemaServiceImpl implements CinemaService{
	
	
	@Autowired
	private CinemaRepository cinemaRepository;
	

	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private ProjekcijaRepository projekcijaRepository;


	@Override
	public ArrayList<Cinema> getAllCinemas() {
		
		return cinemaRepository.findAll();
	}


	@Override
	public Boolean editCinema(Cinema cinema) {
		System.out.println("Editovanje bioskopa.");
		System.out.println("cinema: "+cinema.getName());
		try {
			Cinema c = cinemaRepository.findOne(cinema.getId());
			c.setName(cinema.getName());
			c.setDescription(cinema.getDescription());
			c.setAddress(cinema.getAddress());
			c.setId(cinema.getId());
			
			
			cinemaRepository.flush();
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.********");
			e.printStackTrace();
			return false;
		}
		
		
		return true;
	}


	@Override
	public List<Movie> getMovies(String name) {
		// TODO Auto-generated method stub
		List<Projekcija> projekcije = cinemaRepository.findOneByName(name).getProjekcije();
		List<Movie> filmovi = movieRepository.findAll();
		List<Movie> filmoviUBioskopu = new ArrayList<>();
		
		
		for (Movie m: filmovi) {
			for (Projekcija p: m.getProjekcije()) {
				if (!filmoviUBioskopu.contains(m)) {
					for (int i =0; i<projekcije.size(); i++) {
						if (projekcije.get(i).getId().equals(p.getId())) {
							filmoviUBioskopu.add(m);
						}
					}
				
					
				}
			}
		}
		
		return filmoviUBioskopu;
	}


	@Override
	public Cinema getCinemaById(Long id) {
		// TODO Auto-generated method stub
		return cinemaRepository.findOneById(id);
	}


	@Override
	public Boolean deleteMovie(Long movieid, Long cinemaid) {
		// TODO Auto-generated method stub
		Movie m = new Movie();
		m =  movieRepository.findOneById(movieid);
		Cinema c = new Cinema();
		c = cinemaRepository.findOneById(cinemaid);
		
		try {
			//c.getMovies().remove(m); 
			cinemaRepository.flush();
			movieRepository.delete(m);
			movieRepository.flush();
			
			
		}catch (Exception e) {
			return false;

		}
		return true;
	}


	@Override
	public Boolean deleteProjection(Long movieid, Long projectionid, Long cinemaid) {
		
		Cinema c = cinemaRepository.findOneById(cinemaid);
		Projekcija p = projekcijaRepository.findOneById(projectionid);
		System.out.println(c.getProjekcije());
		c.getProjekcije().remove(p); // izbrisana iz liste ali ne iz baze
		
		System.out.println(c.getProjekcije());
		cinemaRepository.flush();
		projekcijaRepository.flush();
		
		return true;
	}


	

	



}
