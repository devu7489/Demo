package com.telstra.jobportal.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.telstra.jobportal.demo.Model.JobRequest;

@Repository
public interface JobReqRepo extends CrudRepository<JobRequest, Long>{
}

