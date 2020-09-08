package com.telstra.jobportal.demo;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.telstra.jobportal.demo.controllers.JobReqController;

@RunWith(SpringRunner.class)
@SpringBootTest
class DemoApplicationTests {

	@Autowired 
	private JobReqController jobReqController;
	
	@Test
	void contextLoads() throws Exception {
		assertThat(jobReqController).isNotNull();
	}

}
