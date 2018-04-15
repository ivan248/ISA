package com.isa.project.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.Play;

@Repository
public interface PlayRepository extends JpaRepository<Play, Long> {

	@Query("SELECT p.name FROM Play p, Theatre t, Projection proj WHERE t.id=:id AND t.id=proj.id AND proj.id=p.id") 
	ArrayList<Play> findPlaysByTheatreId(@Param("id") Long id);
}
