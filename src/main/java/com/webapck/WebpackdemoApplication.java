package com.webapck;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@Controller
public class WebpackdemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebpackdemoApplication.class, args);
	}

	@GetMapping("/")
	public String index(Model model) {

		return "index";
	}

}
