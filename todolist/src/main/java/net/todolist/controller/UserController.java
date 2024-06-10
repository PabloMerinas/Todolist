package net.todolist.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import net.todolist.persistence.model.UserEntity;
import net.todolist.services.implement.UserManagementImpl;

@AllArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {

	private UserManagementImpl userManagement;

	@GetMapping("/userExists")
	public UserEntity userExists(@RequestParam String username) {

	    UserEntity user = userManagement.findByUsername(username);
	    
	    if (user != null) {
	        return user;
	    } else {
	        return null;
	    }
	}

}
