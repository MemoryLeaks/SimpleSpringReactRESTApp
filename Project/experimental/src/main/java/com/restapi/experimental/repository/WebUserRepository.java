package com.restapi.experimental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.restapi.experimental.entity.WebUser;

public interface WebUserRepository extends JpaRepository<WebUser, Integer> {

}
