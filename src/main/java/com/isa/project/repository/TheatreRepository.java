package com.isa.project.repository;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.Theatre;

@Repository
@Transactional
public interface TheatreRepository extends JpaRepository<Theatre, Long> {

	ArrayList<Theatre> findAll();
	
	

}
