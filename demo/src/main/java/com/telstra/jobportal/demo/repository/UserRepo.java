package com.telstra.jobportal.demo.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.telstra.jobportal.demo.Model.User;

@Repository
public interface UserRepo extends CrudRepository<User, Long>{

	Optional<User> findAllByUserNameAndPassword(String username, String password);
}
