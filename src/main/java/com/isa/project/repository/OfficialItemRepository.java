package com.isa.project.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.OfficialItem;

@Repository
@Transactional
public interface OfficialItemRepository extends JpaRepository<OfficialItem, Integer> {
	OfficialItem findOneByItemID(Integer id);
	List<OfficialItem> findAllByReserved(Boolean b);
}
