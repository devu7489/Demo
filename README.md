# Demo
Demo Projects

This project is for demo purpose.
1- It has copibility to post available jobs.
2- Candidate can see jobs, and can apply by clicking on job id link.
3- All job requests can be viewed (This should be available only for admin users, but roles are not developed yet)
4- From All Job Request page Admin can click on status and job application will be open, admin can change the staus submit.
5- Also history can be seen by clicking on History link from All job Request Link. It will be open in Popup.
6- admin can view dashboard which has Job Id and Job requests bar chart, whcih shows how many job application came against each job Job Id.

Technology Used:
1- React + Redex is used for UI side development
2- Spring Boot for service layer.
3- JPA is used for persisting data.
4- Spring boot inbuilt h2 is used for database.
5- Spring boot inbuilt tomcat used to run project.

Steps to run project:
1- Do Maven install, it will create a jar file.
2- Execute jar file, it will run on 8080 port.
3- http://localhist:8080/ will load home page of application

Things not implemented due to time crunch:
1- Role wise login to see condidate and amdin related functionality.
2- Junit for service side test cases.

