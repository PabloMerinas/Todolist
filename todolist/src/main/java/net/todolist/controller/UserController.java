package net.todolist.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public UserEntity userExists(@RequestParam String username, @RequestParam String password) {

		UserEntity user = userManagement.findByUsername(username);

		if (user != null) {
			if (password.equals(user.getPassword())) {
				return user;
			} else {
				return null;
			}
		} else {
			return null;
		}
	}

	@PostMapping("/registerUser")
	public ResponseEntity<String> registerUser(@RequestBody UserEntity user) {
		try {
			if (user.getUsername() == null || user.getPassword() == null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Introduce todos los datos");
			}

			if (userManagement.findByUsername(user.getUsername()) == null) {
				UserEntity savedUser = userManagement.save(user);
				return ResponseEntity.status(HttpStatus.CREATED).body("El usuario" + savedUser.getUsername() + " registrado correctamente.");
			} else {
				return ResponseEntity.status(HttpStatus.CONFLICT).body("Usuario " + user.getUsername() + " ya registrado.");
			}
		} catch (Exception e) {
			// Log the exception if necessary
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error generico al registrar un usuario");
		}
	}

}
