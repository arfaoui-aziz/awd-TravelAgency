package com.esprit.hotel;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value="/api/hotels")
public class HotelController {

	@Autowired
	private HotelService hotelService; 
	@Autowired
	private HotelRepository hotelRepository; 
	
	@GetMapping
	public List<Hotel> getHotels(){
		return this.hotelRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Hotel> createHotel(@RequestBody Hotel hotel){
		return new ResponseEntity<>(hotelService.addHotel(hotel),HttpStatus.OK);
	}
	
	@DeleteMapping(value="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<String> deleteHotel(@PathVariable(value="id") int id){
		return new ResponseEntity<>(hotelService.deleteHotel(id),HttpStatus.OK);
	}
	

}
