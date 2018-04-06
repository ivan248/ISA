package com.isa.project.repository;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.Cinema;

@Repository
@Transactional
public interface CinemaRepository extends JpaRepository<Cinema, Long> {

	ArrayList<Cinema> findAll();
	Cinema findOneByName(String name); 
	
	

}
