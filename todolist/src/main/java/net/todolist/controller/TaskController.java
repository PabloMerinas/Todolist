package net.todolist.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import net.todolist.persistence.model.TaskEntity;
import net.todolist.services.implement.TaskManagementImpl;

@AllArgsConstructor
@RestController
@RequestMapping("/api/task")
public class TaskController {

	/**
	 * Dependencia de tareas.
	 */
	private TaskManagementImpl taskManagement;

	@GetMapping
	public List<TaskEntity> getTask() {
		List<TaskEntity> tasks = new ArrayList<>();
		tasks = taskManagement.getTasks();
		return tasks;
	}

	@PostMapping
	public ResponseEntity<String> createTask(@RequestBody TaskEntity task) {
		TaskEntity createdTask = taskManagement.createTask(task);
		return ResponseEntity.status(HttpStatus.OK).body("La tarea se ha creado correctamente: \n" + createdTask);
	}

	@DeleteMapping
	public ResponseEntity<String> deleteTaskById(@RequestParam Long id) {
		try {
			return ResponseEntity.ok("Tarea eliminada correctamente: " + taskManagement.deleteTaskById(id));
		} catch (NoSuchElementException e) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error al eliminar la tarea con el id: " + id + "\n" + e.getMessage());
		}
	}
	
	@PutMapping
	public ResponseEntity<String> updateTaskById(@RequestBody TaskEntity updatedTask) {
	    try {
	        TaskEntity task = taskManagement.updateTaskById(updatedTask.getId(), updatedTask);
	        return ResponseEntity.ok("Tarea actualizada correctamente: \n" + task);
	    } catch (NoSuchElementException e) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                .body("Error al actualizar la tarea con el id: " + updatedTask.getId() + "\n" + e.getMessage());
	    }
	}

}
