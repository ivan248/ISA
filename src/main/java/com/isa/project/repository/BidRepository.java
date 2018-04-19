package com.isa.project.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.Bid;
import com.isa.project.bean.Item;
import com.isa.project.bean.User;



@Repository
@Transactional
public interface BidRepository extends JpaRepository<Bid, Integer> {
	
	Bid findOneBybidID(Integer id);
	List<Bid> findAllByBuyer(User u);
	List<Bid> findAllByItemOrderByValueDesc(Item item);
	@Query("select b from Bid b where b.item.itemID = :itemID and b.buyer.username= :userName")
	Bid findBidValue(@Param("itemID") Integer itemID, @Param("userName") String userName);
	Bid findOneByBuyer(User buyer);
	
	
	
}
