package net.todolist.persistence.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

/**
 * Entidad Tarea
 */
@Entity
@Table(name = "T_TASKS")
@Data
public class TaskEntity {

	/**
	 * Enumerado con los tipos de prioridad.
	 */
	public enum PRIORITY {
		LOW, MEDIUM, HIGH;
	}

	/**
	 * Id de la tarea;
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	/**
	 * Titulo de la tarea.
	 */
	private String title;

	/**
	 * Descripcion de la tarea.
	 */
	private String description;

	/**
	 * Prioridad de la tarea.
	 */
	private PRIORITY priority;
}
