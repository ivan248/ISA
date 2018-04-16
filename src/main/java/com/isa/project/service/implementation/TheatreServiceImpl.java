package com.isa.project.service.implementation;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isa.project.bean.Play;
import com.isa.project.bean.Projection;
import com.isa.project.bean.Theatre;
import com.isa.project.repository.PlayRepository;
import com.isa.project.repository.TheatreRepository;
import com.isa.project.service.TheatreService;

@Service
public class TheatreServiceImpl implements TheatreService{
	
	
	@Autowired
	private TheatreRepository theatreRepository;
	

	@Autowired
	private PlayRepository playRepository;


	@Override
	public ArrayList<Theatre> getAllTheatres() {
		// TODO Auto-generated method stub
		return theatreRepository.findAll();
	}
	
	@Override
	public Boolean editTheatre(Theatre theatre) {

		try {
			Theatre t = theatreRepository.findOne(theatre.getId());
			t.setName(theatre.getName());
			t.setDescription(theatre.getDescription());
			t.setAddress(theatre.getAddress());
			t.setId(theatre.getId());
			
			
			theatreRepository.flush();
		}
		catch(Exception e) {
			System.out.println("Error occured while writing to database. Constraints were not satisfied.********");
			e.printStackTrace();
			return false;
		}
		
		
		return true;
	}

	@Override
	public ArrayList<Theatre> findByNameContaining(String theatre) {

		
	
		return theatreRepository.findByNameContaining(theatre);
	}

	@Override
	public ArrayList<Play> getPlays(int theatreId) {
		
		
		ArrayList<Play> playsList = new ArrayList();
		
		for(Projection pt : theatreRepository.findOneById((long)theatreId).getProjekcije())
		{
			for(Play p : playRepository.findAll())
			{
				for(Projection pp : p.getProjekcije())
				{
					if(pp.getId().equals(pt.getId()))
					{
						if(!playsList.contains(p))
							playsList.add(p);
					}
				}
			}
		}
		
		return playsList;
	}

	@Override
	public ArrayList<Projection> getPlayDates(int parseInt) {

		System.out.println(playRepository.findProjectionsByPlayId((long)parseInt));
		
		return playRepository.findProjectionsByPlayId((long)parseInt);
	}


	
	



}
