package com.example.japonia.service;

import com.example.japonia.entity.City;
import com.example.japonia.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImpl implements CityService{
    @Autowired
    private CityRepository cityRepository;
    @Override
    public City addCity(City city) {
        return cityRepository.save(city);
    }

    @Override
    public List<City> getCities() {
        return (List<City>) cityRepository.findAll();
    }

    @Override
    public City removeCity(Integer id) {
        City city = cityRepository.findById(id).orElse(null);
        if(city != null) {
            cityRepository.delete(city);
        }
        return city;
    }

    @Override
    public City changeCityName(Integer id, String name) {
        City city = cityRepository.findById(id).orElse(null);
        if(city != null) {
            city.setName(name);
            cityRepository.save(city);
        }
        return city;
    }

    @Override
    public City changeCityPrice(Integer id, Integer price) {
        City city = cityRepository.findById(id).orElse(null);
        if(city != null) {
            city.setPrice(price);
            cityRepository.save(city);
        }
        return city;
    }
}
