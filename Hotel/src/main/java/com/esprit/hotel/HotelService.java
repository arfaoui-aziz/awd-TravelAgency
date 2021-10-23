package com.esprit.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HotelService {

	@Autowired
	private HotelRepository  hotelRepository; 
	
	public Hotel addHotel(Hotel hotel) {
		return hotelRepository.save(hotel);
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
