package com.telstra.jobportal.demo.Model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "JOB_REQUEST_HISTORY")
@JsonIgnoreProperties(ignoreUnknown=true)
public class JobRequestHistory {
	
	public JobRequestHistory() {
        super();
    }
	
	public JobRequestHistory(JobRequest jobReq) {
		this.jobRequestId = jobReq.getId();
		this.jobDetailId = jobReq.getJobDetailId();
		this.name = jobReq.getName();
		this.email = jobReq.getEmail();
		this.address = jobReq.getAddress();
		this.phone = jobReq.getPhone();
		this.status = jobReq.getStatus();
		this.statusDesc = jobReq.getStatusDesc();
		this.comment = jobReq.getComment();
		this.appliedDate = jobReq.getAppliedDate();
	}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private Long jobRequestId;
    
    private String jobDetailId;
    
    private String name;
    
    private String address;
        
    private String email;
        
    private String phone;
        
    private String status;
    
    private String statusDesc;
    
    private String comment;
        
    private Date appliedDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getJobRequestId() {
		return jobRequestId;
	}

	public void setJobRequestId(Long jobRequestId) {
		this.jobRequestId = jobRequestId;
	}

	public String getJobDetailId() {
		return jobDetailId;
	}

	public void setJobDetailId(String jobDetailId) {
		this.jobDetailId = jobDetailId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getStatusDesc() {
		return statusDesc;
	}

	public void setStatusDesc(String statusDesc) {
		this.statusDesc = statusDesc;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Date getAppliedDate() {
		return appliedDate;
	}

	public void setAppliedDate(Date appliedDate) {
		this.appliedDate = appliedDate;
	}
    
    

}
