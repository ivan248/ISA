package com.isa.project.repository;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.ProjectionSeats;

@Repository
@Transactional
public interface ProjectionSeatsRepository extends JpaRepository<ProjectionSeats, Long> {

	public ArrayList<ProjectionSeats> findByProjectionIdAndMovieId(Long projectionId, Long MovieId);
	
}
