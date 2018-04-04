package com.isa.project.web.dto;

import com.isa.project.bean.Item;

public class BidDTO {
	private Item item;
	private float bid;
	
	public Item getItem() {
		return item;
	}
	public void setItem(Item item) {
		this.item = item;
	}
	public float getBid() {
		return bid;
	}
	public void setBid(float bid) {
		this.bid = bid;
	}
	
	
}
