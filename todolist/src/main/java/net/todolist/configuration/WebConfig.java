package net.todolist.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // El patrón de URL para el que se aplicará CORS
                .allowedOrigins("*") // Permitir todos los orígenes
                .allowedMethods("*") // Permitir todos los métodos HTTP
                .allowedHeaders("*"); // Permitir el envío de credenciales
    }
}
