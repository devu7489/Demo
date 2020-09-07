package com.telstra.jobportal.demo.Model;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "JOB_DETAILS")
public class JobDetails {
	
	public JobDetails() {
        super();
    }
	
	public JobDetails(Long id, String jobId, String jobName, String jobDesc, String status,
			Date jobPostDate) {
		super();
		this.id = id;
		this.jobId = jobId;
		this.jobName = jobName;
		this.jobDesc = jobDesc;
		this.status = status;
		this.jobPostDate = jobPostDate;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	private String jobId;
	
	private String jobName;
	
	private String jobDesc;
	
    private String status;
    
    private Date jobPostDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	/*
	 * public Set<JobRequest> getJobRequests() { return jobRequests; }
	 * 
	 * public void setJobRequests(Set<JobRequest> jobRequests) { this.jobRequests =
	 * jobRequests; }
	 */

	public String getJobId() {
		return jobId;
	}

	public void setJobId(String jobId) {
		this.jobId = jobId;
	}

	public String getJobName() {
		return jobName;
	}

	public void setJobName(String jobName) {
		this.jobName = jobName;
	}

	public String getJobDesc() {
		return jobDesc;
	}

	public void setJobDesc(String jobDesc) {
		this.jobDesc = jobDesc;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getJobPostDate() {
		return jobPostDate;
	}

	public void setJobPostDate(Date jobPostDate) {
		this.jobPostDate = jobPostDate;
	}

    
}
