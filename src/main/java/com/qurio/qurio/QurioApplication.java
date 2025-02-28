package com.qurio.qurio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties()
public class QurioApplication {

    public static void main(String[] args) {
        SpringApplication.run(QurioApplication.class, args);
    }
}
