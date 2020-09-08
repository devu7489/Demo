package com.telstra.jobportal.demo.controllers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.telstra.jobportal.demo.Model.JobDetails;
import com.telstra.jobportal.demo.Model.JobRequest;
import com.telstra.jobportal.demo.Model.JobRequestHistory;
import com.telstra.jobportal.demo.Model.User;
import com.telstra.jobportal.demo.repository.JobDetailsRepo;
import com.telstra.jobportal.demo.repository.JobReqHistoryRepo;
import com.telstra.jobportal.demo.repository.JobReqRepo;
import com.telstra.jobportal.demo.repository.UserRepo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class JobReqController {
	
	@Autowired
	JobDetailsRepo jobRepo;
	
	@Autowired
	JobReqRepo jobReqRepo;
	
	@Autowired
	JobReqHistoryRepo jobReqHistoryRepo;
	
	@Autowired
	UserRepo userRepo;
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) {
		Optional<User> opt = userRepo.findAllByUserNameAndPassword(user.getUserName(), user.getPassword());
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}
	
	@GetMapping("/jobs")
	public List<JobDetails> getAllJobs(){

		List<JobDetails> list = new ArrayList<>();
	    Iterable<JobDetails> allJObs = jobRepo.findAll();
	    allJObs.forEach(list::add);
	    return list;
	}
	
	@PostMapping("/applyJob")
	public JobRequest submitJobApplication(@RequestBody JobRequest jobReq) {
		JobRequest updated = jobReqRepo.save(jobReq);
		jobReqHistoryRepo.save(new JobRequestHistory(updated));
		return updated;
	}
	
	@GetMapping("/job")
	public List<JobRequestHistory> getJobReqHistory(@RequestParam Long jobReqId){
		Optional<List<JobRequestHistory>> opt = jobReqHistoryRepo.findByJobRequestId(jobReqId);
		if(opt.isPresent()) {
			return (List<JobRequestHistory>) opt.get();
		}
		return null;
	}
	
	@GetMapping("/allJobRequests")
	public List<JobRequest> getAllJobRequests(){
		List<JobRequest> list = new ArrayList<>();
	    Iterable<JobRequest> allJObReqs = jobReqRepo.findAll();
	    allJObReqs.forEach(list::add);
	    return list;
	}

}
