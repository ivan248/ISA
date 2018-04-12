package com.isa.project.repository;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.Ticket;


@Repository
@Transactional
public interface TicketRepository extends JpaRepository<Ticket, Long> {

	Ticket findOneById(Long id);
	
	

}
