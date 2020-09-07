package com.telstra.jobportal.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.telstra.jobportal.demo.Model.JobRequestHistory;

@Repository
public interface JobReqHistoryRepo extends CrudRepository<JobRequestHistory, Long>{

	Optional<List<JobRequestHistory>> findByJobRequestId(Long jobReqId);
}
