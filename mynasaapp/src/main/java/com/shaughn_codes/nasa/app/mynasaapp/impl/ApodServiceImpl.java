package com.shaughn_codes.nasa.app.mynasaapp.impl;

import com.shaughn_codes.nasa.app.mynasaapp.apod.Apod;
import com.shaughn_codes.nasa.app.mynasaapp.service.ApodService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ApodServiceImpl implements ApodService {
    private static final Logger log = LoggerFactory.getLogger(ApodServiceImpl.class);
    @Autowired
    private RestTemplate restTemplate;
    @Value("${api.key}")
    public String apiKey;
    @Value("${nasa.apod.url}")
    public String Apodurl;

    @Override
    public Apod fetchApodData(){
       try {
           HttpHeaders httpHeaders = new HttpHeaders();
           httpHeaders.set("api_key",apiKey);
           ResponseEntity<Apod> response = restTemplate.exchange(Apodurl, HttpMethod.GET,new HttpEntity<>(httpHeaders),Apod.class);
           log.info("Response from Apod API: ",response.getBody());
           return response.getBody();
       }catch (Exception e){
        log.error("Something went wrong while retriving data: ",e);
        throw new  ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                "Exception while calling APOD API");
       }
    }

}
