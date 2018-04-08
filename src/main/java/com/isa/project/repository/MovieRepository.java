package com.isa.project.repository;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.Movie;

@Repository
@Transactional
public interface MovieRepository extends JpaRepository<Movie, Long> {

	Movie findOneById(Long id);
	
	

}
