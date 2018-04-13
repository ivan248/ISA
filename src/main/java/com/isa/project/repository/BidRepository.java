package com.isa.project.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.isa.project.bean.Bid;
import com.isa.project.bean.Item;


@Repository
@Transactional
public interface BidRepository extends JpaRepository<Bid, Integer> {
	
	Bid findOneBybidID(Integer id);
	List<Bid> findAllByBuyer(Integer id);
	List<Bid> findAllByItemOrderByValueDesc(Item item);
	
	
}
