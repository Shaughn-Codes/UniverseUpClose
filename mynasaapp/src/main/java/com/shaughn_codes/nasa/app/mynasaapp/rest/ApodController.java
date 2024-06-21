package com.shaughn_codes.nasa.app.mynasaapp.rest;


import com.shaughn_codes.nasa.app.mynasaapp.apod.Apod;
import com.shaughn_codes.nasa.app.mynasaapp.service.ApodService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ApodController {
    private final ApodService apodService;


    public ApodController(ApodService apodService){
        this.apodService = apodService;
    }

    @GetMapping("/get-apod")
    public Apod getApod(){
        return apodService.fetchApodData();
    }

    @GetMapping("get-apod-date")
    public Apod getApodDate(){
        return apodService.fetchApodData();
    }
}
