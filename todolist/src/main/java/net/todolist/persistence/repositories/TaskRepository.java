package net.todolist.persistence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.todolist.persistence.model.TaskEntity;

/**
 * Interfaz que gestiona el repositorio para las tareas
 */
@Repository
public interface TaskRepository extends JpaRepository<TaskEntity, Long> {

}
