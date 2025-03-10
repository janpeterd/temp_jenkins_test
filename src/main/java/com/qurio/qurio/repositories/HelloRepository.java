package com.qurio.qurio.repositories;

import com.qurio.qurio.models.Hello;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HelloRepository extends JpaRepository<Hello, Long> {
}
