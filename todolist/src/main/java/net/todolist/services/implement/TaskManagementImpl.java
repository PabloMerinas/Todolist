package net.todolist.services.implement;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.todolist.persistence.model.TaskEntity;
import net.todolist.persistence.model.TaskEntity.STATE;
import net.todolist.persistence.repositories.TaskRepository;
import net.todolist.services.interfaces.TaskManagementI;

/**
 * Clase que implementa los métodos de la interfaz de tareas.
 */
@AllArgsConstructor
@Service
public class TaskManagementImpl implements TaskManagementI {

	/**
	 * Repositorio de tareas.
	 */
	private TaskRepository taskRepo;

	@Override
	public TaskEntity createTask(TaskEntity task) {
		TaskEntity newTask = new TaskEntity();

		if (task != null) {
			newTask = task;
		}

		taskRepo.save(newTask);
		return newTask;
	}

	@Override
	public TaskEntity deleteTaskById(Long id) {
		Optional<TaskEntity> optionalTaskToDelete = taskRepo.findById(id);
		if (optionalTaskToDelete.isPresent()) {
			taskRepo.delete(optionalTaskToDelete.get());
			return optionalTaskToDelete.get();
		} else {
			throw new NoSuchElementException("No existe la tarea con el id: " + id);
		}

	}

	@Override
	public List<TaskEntity> getTasks() {
		return taskRepo.findAll();
	}

	@Override
	public Optional<TaskEntity> findTaskById(Long id) {
		return taskRepo.findById(id);
	}

	@Override
	public TaskEntity updateTaskById(Long id, TaskEntity updatedTask) {
		Optional<TaskEntity> optionalTask = taskRepo.findById(id);
		if (optionalTask.isPresent()) {
			TaskEntity existingTask = optionalTask.get();
			existingTask.setTitle(updatedTask.getTitle());
			existingTask.setDescription(updatedTask.getDescription());
			existingTask.setPriority(updatedTask.getPriority());
			existingTask.setState(updatedTask.getState());
			existingTask.setFromDate(updatedTask.getFromDate());
			existingTask.setToDate(updatedTask.getToDate());
			return taskRepo.save(existingTask);
		} else {
			throw new NoSuchElementException("No se encontró ninguna tarea con el ID: " + id);
		}
	}

	@Override
	public TaskEntity changeTaskState(Long id, STATE state) {
		// TODO Auto-generated method stub
		return null;
	}

}
