package com.isa.project.web.dto;

import com.isa.project.bean.Item;

public  class DTOConverter {
	public static Item convertAddNewItemToItem(AddNewItemDto newItemDTO) {
		Item newItem = new Item(newItemDTO.getName(), newItemDTO.getDescription(),newItemDTO.getCurrentBid(),newItemDTO.getEndDate(),newItemDTO.getImage());
		return newItem;
	}
}
