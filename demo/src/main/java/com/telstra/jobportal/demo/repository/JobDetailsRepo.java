package com.telstra.jobportal.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.telstra.jobportal.demo.Model.JobDetails;

@Repository
public interface JobDetailsRepo extends CrudRepository<JobDetails, Long>{
}
