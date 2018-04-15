package com.isa.project.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	 Optional<User> findByUsername(String username);
	 User findByConfirmationToken(String token);
	 @Query("select distinct b.buyer from Bid b where b.item.itemID = :itemID")
		List<User> findDistinctUsersThatBidOnItem(@Param("itemID") Integer itemID);
}
