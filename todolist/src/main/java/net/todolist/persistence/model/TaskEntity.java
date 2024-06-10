package net.todolist.persistence.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
	 * Enumerado con los estados de la tarea.
	 */
	public enum STATE {
		TODO, DOING, DONE;
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
	 * Hora de inicio de la tarea.
	 */
	private LocalDateTime fromDate;

	/**
	 * Hora de finalización de la tarea.
	 */
	private LocalDateTime toDate;

	/**
	 * Prioridad de la tarea.
	 */
	@Enumerated(EnumType.STRING)
	private PRIORITY priority;

	/**
	 * Estado de la tarea.
	 */
	@Enumerated(EnumType.STRING)
	private STATE state;
}
