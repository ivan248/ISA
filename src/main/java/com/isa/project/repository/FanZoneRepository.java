package com.isa.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.FanZone;

@Repository
public interface FanZoneRepository extends JpaRepository<FanZone,Integer> {
	
	FanZone findOneById(Integer ID);
}
