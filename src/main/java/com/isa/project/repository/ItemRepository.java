package com.isa.project.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.Item;

@Repository
@Transactional
public interface ItemRepository extends JpaRepository<Item, Integer> {

	Item findOneByItemID(Integer id);
	List<Item> findAllByApproved(Boolean b);
	
	//TODO:dodati za findAll sa example, trebace za search
}
