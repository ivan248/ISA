package com.isa.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.Visitor;

@Repository
public interface VisitorRepository extends JpaRepository<Visitor, Long> {

}
