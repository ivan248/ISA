package com.isa.project.repository;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.Projection;


@Repository
@Transactional
public interface ProjectionRepository extends JpaRepository<Projection, Long> {

	Projection findOneById(Long id);
	
	

}
