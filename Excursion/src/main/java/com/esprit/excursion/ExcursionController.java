package com.esprit.excursion;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value="/api/excursions")
public class ExcursionController {
	
	@Autowired
	private ExcursionService excursionService; 
	
	@Autowired
	private ExcursionRepository excursionRepository; 
	
	@GetMapping
	public List<Excursion> getExcursions(){
		return this.excursionRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Excursion> createExcursion(@RequestBody Excursion excursion){
		return new ResponseEntity<>(excursionService.addExcursion(excursion),HttpStatus.OK);
	}
	
	@DeleteMapping(value="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<String> deleteExcursion(@PathVariable(value="id") int id){
		return new ResponseEntity<>(excursionService.deleteExcursion(id),HttpStatus.OK);
	}

}
