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
		/*System.setProperty("spring.devtools.restart.enabled", "false");
		System.setProperty("spring.devtools.livereload.enabled", "true");*/
		SpringApplication.run(WebpackdemoApplication.class, args);
	}

	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("test", "test4323");
		return "index";
	}

}
