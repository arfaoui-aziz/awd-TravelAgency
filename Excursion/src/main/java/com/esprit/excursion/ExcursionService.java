package com.esprit.excursion;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ExcursionService {

	
	@Autowired
	private ExcursionRepository  excursionRepository; 
	
	public Excursion addExcursion(Excursion excursion) {
		return excursionRepository.save(excursion);
	}
	
	
	public String deleteExcursion(int id) {
		if(excursionRepository.findById(id).isPresent()) {
			excursionRepository.deleteById(id);
			return "excursion supprimé";
		}else {
			return "Error Excursion non Supprimé";
		}
	}
	
}
