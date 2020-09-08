package com.telstra.jobportal.demo.config;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.telstra.jobportal.demo.Model.JobDetails;
import com.telstra.jobportal.demo.Model.User;
import com.telstra.jobportal.demo.repository.JobDetailsRepo;
import com.telstra.jobportal.demo.repository.UserRepo;

@Component
public class DemoData implements CommandLineRunner {

    @Autowired
    private JobDetailsRepo repo;
    
    @Autowired
    private UserRepo uRepo;

    @Override
    public void run(String...args) throws Exception {
        repo.save(new JobDetails(1L,"J01","Java_Full_Stack_Developer","Job Detailed Desc","active",new Date()));
        repo.save(new JobDetails(2L,"J02","Python_Full_Stack_Developer","Job Detailed Desc","active",new Date()));
        repo.save(new JobDetails(3L,"J03","Dotnet_Full_Stack_Developer","Job Detailed Desc","active",new Date()));
        repo.save(new JobDetails(4L,"J04","Frontend_Developer","Job Detailed Desc","active",new Date()));
        repo.save(new JobDetails(5L,"J05","Backend_Developer","Job Detailed Desc","active",new Date()));
        
        uRepo.save(new User(1L,"user","user","Devendra as User", "test@test.com","user"));
        uRepo.save(new User(2L,"admin","admin","Devendra as Admin", "test@test.com","admin"));
    }
}