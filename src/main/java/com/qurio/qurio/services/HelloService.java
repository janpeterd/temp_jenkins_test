package com.qurio.qurio.services;

import com.qurio.qurio.models.Hello;
import com.qurio.qurio.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class HelloService {
    private final HelloRepository helloRepository;
    private final CategoryRepository categoryRepository;
    private final DifficultyRepository difficultyRepository;
    private final CompanyRepository companyRepository;
    private final SharedLinkRepository sharedLinkRepository;
    private final UserRepository userRepository;
    private final QuestionRepository questionRepository;
    private final QuestionAnswerRepository questionAnswerRepository;
    private final QuizRepository quizRepository;

    public Optional<Hello> hello() {
        // Save to db
        Hello hello = new Hello();
        hello.setHello("Hello Qurio");
        helloRepository.save(hello);

        // Get from db
        return helloRepository.findById(1L);

    }
}
