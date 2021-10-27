package com.esprit.hotel;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HotelService {

	@Autowired
	private HotelRepository  hotelRepository; 
	
	public Hotel addHotel(Hotel hotel) {
		return hotelRepository.save(hotel);
	}
	
	public Hotel updateHotel(int id, Hotel newHotel) {
		if(hotelRepository.findById(id).isPresent()) {
			Hotel exsistingHotel = hotelRepository.findById(id).get();
			exsistingHotel.setName(newHotel.getName());
			exsistingHotel.setEmail(newHotel.getEmail());
			exsistingHotel.setAddress(newHotel.getAddress());
			exsistingHotel.setCity(newHotel.getCity());
			exsistingHotel.setZipCode(newHotel.getZipCode());
			exsistingHotel.setImgUrl(newHotel.getImgUrl());
			exsistingHotel.setRating(newHotel.getRating());
			exsistingHotel.setPhoneNumber(newHotel.getPhoneNumber());
			exsistingHotel.setRoomsLeft(newHotel.getRoomsLeft());
			exsistingHotel.setPrice(newHotel.getPrice());
			
			return hotelRepository.save(exsistingHotel);
		}else {
			return null;
		}
	}
	
	public String deleteHotel(int id) {
		if(hotelRepository.findById(id).isPresent()) {
			hotelRepository.deleteById(id);
			return "hotel supprimé";
		}else {
			return "Error Hotel non Supprimé";
		}
	}
	

	
	
}
