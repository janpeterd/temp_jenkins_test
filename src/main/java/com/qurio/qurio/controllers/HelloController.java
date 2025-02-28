package com.qurio.qurio.controllers;

import com.qurio.qurio.models.Hello;
import com.qurio.qurio.services.HelloService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Controller
@RequestMapping("/hello")
@RequiredArgsConstructor
public class HelloController {
    private final HelloService helloService;

    @GetMapping
    public ResponseEntity<String> hello() {
        Optional<Hello> helloOptional = helloService.hello();
        if (helloOptional.isPresent()) {
            return ResponseEntity.ok(helloOptional.get().getHello());
        }
        return ResponseEntity.notFound().build();
    }
}
