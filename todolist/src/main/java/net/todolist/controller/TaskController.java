package net.todolist.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.todolist.services.implement.TaskManagementImpl;

@RestController
@RequestMapping("/api/task")
public class TaskController {

	/**
	 * Dependencia de tareas.
	 */
	private TaskManagementImpl taskManagement;
	
	@GetMapping
	public String get() {
		return "funca";
	}
}
