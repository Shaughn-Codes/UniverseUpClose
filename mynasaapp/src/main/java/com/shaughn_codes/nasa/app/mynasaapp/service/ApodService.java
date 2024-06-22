package com.shaughn_codes.nasa.app.mynasaapp.service;

import com.shaughn_codes.nasa.app.mynasaapp.apod.Apod;

public interface ApodService {
    Apod fetchApodData();
    Apod fecthApodByDate(String date);
}
