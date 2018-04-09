package com.isa.project.repository;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.Projekcija;


@Repository
@Transactional
public interface ProjekcijaRepository extends JpaRepository<Projekcija, Long> {

	Projekcija findOneById(Long id);
	
	

}
