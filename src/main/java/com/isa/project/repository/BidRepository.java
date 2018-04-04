package com.isa.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.isa.project.bean.Bid;


public interface BidRepository extends JpaRepository<Bid, Integer> {
	Bid findOneBybidID(Integer id);
	List<Bid> findAllByBuyer(Integer id);
	List<Bid> findAllByItem(Integer id);
	
}
