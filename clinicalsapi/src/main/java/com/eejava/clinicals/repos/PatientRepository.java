package com.eejava.clinicals.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eejava.clinicals.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer> {

}
