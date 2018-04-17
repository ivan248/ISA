package com.isa.project.repository;

import java.util.List;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.ProjectionUserTicket;
import com.isa.project.bean.ProjectionUserTicketId;

@Repository
public interface ProjectionUserTicketRepository extends JpaRepository<ProjectionUserTicket, ProjectionUserTicketId> {

	List<ProjectionUserTicket> findByMovieUserTicketIdUserId(Long id);
	
}
