package com.isa.project.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.Play;
import com.isa.project.bean.Projection;

@Repository
public interface PlayRepository extends JpaRepository<Play, Long> {

	@Query("SELECT p.name \r\n" + 
			" FROM Play p, Projection pp, Theatre cp WHERE\r\n" + 
			"pp.id = cp.id AND p.id = pp.id AND cp.id = :id") 
	List<String> findPlaysByTheatreId(@Param("id") Long id);
	
	@Query("SELECT distinct p.projekcije FROM Play p join p.projekcije WHERE p.id=:id") 
	ArrayList<Projection> findProjectionsByPlayId(@Param("id") Long id);
	
}
