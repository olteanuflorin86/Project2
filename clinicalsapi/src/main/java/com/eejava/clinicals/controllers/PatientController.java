package com.eejava.clinicals.controllers;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.eejava.clinicals.model.ClinicalData;
import com.eejava.clinicals.model.Patient;
import com.eejava.clinicals.repos.PatientRepository;
import com.eejava.clinicals.util.BMICalculator;

@RestController
@RequestMapping("/api")
@CrossOrigin 
public class PatientController {
	
	@Autowired
	private PatientRepository repository;
	Map<String,String> filters = new HashMap<>();
	

	@RequestMapping("/patients")
	public List<Patient> getPatients() {
		return repository.findAll();			
	}
	
	@RequestMapping(value="/patients/{id}", method=RequestMethod.GET)
	public Patient getPatient(@PathVariable("id") int id) {
		return repository.findById(id).get();
	}
	
	@RequestMapping(value="/patients", method=RequestMethod.POST)
	public Patient savePatient(@RequestBody Patient patient) {
		return repository.save(patient);
	}
	
	@RequestMapping(value="/patients/analyze/{id}", method=RequestMethod.GET)
	public Patient analyze(@PathVariable("id") int id) {
		Patient patient = repository.findById(id).get();
		List<ClinicalData> clinicalData = patient.getClinicalData();
		ArrayList<ClinicalData> duplicateClinicalData = new ArrayList<>(clinicalData);
		for(ClinicalData eachEntry:duplicateClinicalData) {
			
			if(filters.containsKey(eachEntry.getComponentName())) {
				clinicalData.remove(eachEntry);
				continue;
			} else {
				filters.put(eachEntry.getComponentName(), null);
			}
			BMICalculator.calculateBMI(clinicalData, eachEntry);
		}
		filters.clear();
		return patient;
	}
}
