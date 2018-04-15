package com.isa.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.VerificationToken;

@Repository
public interface TokenRepository extends JpaRepository<VerificationToken, Long> {

}
