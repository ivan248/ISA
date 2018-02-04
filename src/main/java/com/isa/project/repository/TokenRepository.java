package com.isa.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.isa.project.bean.VerificationToken;

public interface TokenRepository extends JpaRepository<VerificationToken, Long> {

}
