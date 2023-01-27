package com.example.japonia.controller;

import com.example.japonia.entity.City;
import com.example.japonia.service.CityService;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class CityController {
    @Autowired
    private CityService cityService;

    @PostMapping("/city")
    public City addCity(@RequestBody City city) {
        return cityService.addCity(city);
    }
    @GetMapping("/city")
    public List<City> getCities() {
        return cityService.getCities();
    }
    @DeleteMapping("/city/{id}")
    public City removeCity(@PathVariable Integer id) {
        return cityService.removeCity(id);
    }
    @PutMapping("/city/{id}/name/{name}")
    public City changeCityName(@PathVariable Integer id, @PathVariable String name) {
        return cityService.changeCityName(id, name);
    }
    @PutMapping("/city/{id}/price/{price}")
    public City changeCityPrice(@PathVariable Integer id, @PathVariable Integer price) {
        return cityService.changeCityPrice(id, price);
    }
}
