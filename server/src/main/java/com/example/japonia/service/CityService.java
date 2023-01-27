package com.example.japonia.service;

import com.example.japonia.entity.City;

import java.util.List;

public interface CityService {
    City addCity(City city);
    List<City> getCities();
    City removeCity(Integer id);
    City changeCityName(Integer id, String name);
    City changeCityPrice(Integer id, Integer price);
}
