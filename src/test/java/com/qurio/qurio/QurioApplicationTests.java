package com.qurio.qurio;

import com.qurio.qurio.models.Hello;
import com.qurio.qurio.repositories.HelloRepository;
import com.qurio.qurio.services.HelloService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.when;

@SpringBootTest
class QurioApplicationTests {

    @InjectMocks
    private HelloService helloService;

    @Mock
    private HelloRepository helloRepository;

    @Test
    void testHello() {
        Hello hello = new Hello();
        hello.setHello("Hello Qurio");
        when(helloRepository.findById(1L)).thenReturn(Optional.of(hello));

        // Test the service
        Optional<Hello> helloOptional = helloService.hello();

        assertThat(helloOptional.isPresent()).isTrue();
        assertThat(helloOptional.get().getHello()).isEqualTo("Hello Qurio");
    }
}
