package com.isa.project.service.implementation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isa.project.bean.Cinema;
import com.isa.project.bean.Movie;
import com.isa.project.bean.Projection;
import com.isa.project.repository.CinemaRepository;
import com.isa.project.repository.MovieRepository;
import com.isa.project.repository.ProjectionRepository;
import com.isa.project.service.CinemaService;

@Service
public class CinemaServiceImpl implements CinemaService{
	
	
	@Autowired
	private CinemaRepository cinemaRepository;
	

	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private ProjectionRepository projekcijaRepository;


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
		List<Projection> projekcije = cinemaRepository.findOneByName(name).getProjekcije();
		List<Movie> filmovi = movieRepository.findAll();
		List<Movie> filmoviUBioskopu = new ArrayList<>();
		
		
		for (Movie m: filmovi) {
			for (Projection p: m.getProjekcije()) {
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
		Movie m = movieRepository.findOne(movieid);
		Projection p = projekcijaRepository.findOneById(projectionid);
		c.getProjekcije().remove(p); 
		m.getProjekcije().remove(p);
		
		
		projekcijaRepository.delete(p);
		cinemaRepository.flush();
		projekcijaRepository.flush();
		movieRepository.flush();
		
		return true;
	}


	@Override
	public Boolean editProjection(Projection projekcija) {
		try {
			projekcijaRepository.findOneById(projekcija.getId()).setDate(projekcija.getDate());
			projekcijaRepository.findOneById(projekcija.getId()).setPlace(projekcija.getPlace());
			projekcijaRepository.findOneById(projekcija.getId()).setPrice(projekcija.getPrice());
			projekcijaRepository.findOneById(projekcija.getId()).setTime(projekcija.getTime());
			
			projekcijaRepository.flush();
		} catch (Exception e) {
			System.out.println("Error!");
			return false;
		}
		return true;
	}


	@Override
	public Boolean addProjection(Projection projekcija, Long movieid, Long cinemaid) {
		try {
			List<Projection> projekcijeBioskop = cinemaRepository.findOneById(cinemaid).getProjekcije();
			if (projekcijeBioskop==null) {
				projekcijeBioskop = new ArrayList<>();
			}
			projekcijeBioskop.add(projekcija);
			cinemaRepository.findOneById(cinemaid).setProjekcije(projekcijeBioskop);
			cinemaRepository.flush();
			
			List<Projection> projekcijeFilmovi = movieRepository.findOneById(movieid).getProjekcije();
			if (projekcijeFilmovi==null) {
				projekcijeFilmovi = new ArrayList<>();
			}
			projekcijeFilmovi.add(projekcija);
			movieRepository.findOneById(movieid).setProjekcije(projekcijeFilmovi);
			movieRepository.flush();
			
			
			
			projekcijaRepository.saveAndFlush(projekcija);
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.");
			e.printStackTrace();
			return false;
		}
		
		
		return true;
	}


	

	



}
