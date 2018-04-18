package com.isa.project.repository;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.Movie;
import com.isa.project.bean.Projection;

@Repository
@Transactional
public interface MovieRepository extends JpaRepository<Movie, Long> {

	Movie findOneById(Long id);
	
	@Query("SELECT distinct m.projekcije FROM Movie m join m.projekcije WHERE m.id=:id") 
	ArrayList<Projection> findProjectionsByMovieId(@Param("id") Long id);
	
	

}
