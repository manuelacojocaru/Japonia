package com.example.japonia.repository;

import com.example.japonia.entity.City;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CityRepository extends CrudRepository<City, Integer> {
}
