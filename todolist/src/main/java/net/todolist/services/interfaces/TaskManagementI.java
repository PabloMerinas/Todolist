package net.todolist.services.interfaces;

import java.util.List;
import java.util.Optional;

import net.todolist.persistence.model.TaskEntity;

/**
 * Interfaz que define las operaciones para gestionar las tareas.
 */
public interface TaskManagementI {
	
	TaskEntity createTask(TaskEntity task);
	
	TaskEntity deleteTaskById(Long id);
	
	TaskEntity changeTaskState(Long id, TaskEntity.STATE state);

	List<TaskEntity> getTasks();

	Optional<TaskEntity> findTaskById(Long id);

	TaskEntity updateTaskById(Long id, TaskEntity updatedTask);
}
