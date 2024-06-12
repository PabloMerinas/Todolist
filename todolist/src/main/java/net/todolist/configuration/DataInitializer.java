package net.todolist.configuration;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Component
/**
 * Clase para inicializar datos en la base de datos.
 */
public class DataInitializer {

	/**
	 * JdbcTemplate para interactuar con la base de datos.
	 */
	private final JdbcTemplate jdbcTemplate;

	@PostConstruct
	public void initializeData() {
		executeSqlStatement("INSERT INTO t_tasks (title, description, from_Date, to_Date, priority, state) " + "VALUES "
				+ "('Desarrollo de API REST', 'Crear endpoints para la comunicación entre el frontend y el backend.', '2024-06-21 10:00:00', '2024-06-27 15:00:00', 'HIGH', 'TODO'),"
				+ "('Pruebas de Unidad', 'Escribir casos de prueba para garantizar la calidad del código.', '2024-06-22 11:30:00', '2024-06-28 12:30:00', 'MEDIUM', 'DOING'),"
				+ "('Diseño de Base de Datos', 'Modelar la estructura de la base de datos para el proyecto.', '2024-06-23 09:15:00', '2024-06-29 14:45:00', 'HIGH', 'TODO'),"
				+ "('Configuración del Servidor', 'Configurar el servidor para alojar la aplicación web.', '2024-06-24 08:30:00', '2024-06-30 16:30:00', 'MEDIUM', 'DONE'),"
				+ "('Despliegue Continuo', 'Implementar un flujo de trabajo para despliegues automáticos.', '2024-06-25 12:00:00', '2024-07-01 17:00:00', 'HIGH', 'TODO'),"
				+ "('Optimización de Rendimiento', 'Realizar ajustes para mejorar la velocidad y eficiencia del sistema.', '2024-06-26 09:45:00', '2024-07-02 13:45:00', 'MEDIUM', 'DOING'),"
				+ "('Documentación del Proyecto', 'Elaborar documentación técnica y de usuario para el proyecto.', '2024-06-27 10:15:00', '2024-07-03 14:15:00', 'LOW', 'TODO'),"
				+ "('Reunión de Revisión', 'Realizar una reunión para revisar el progreso del proyecto con el cliente.', '2024-06-28 11:00:00', '2024-07-04 15:30:00', 'MEDIUM', 'DOING'),"
				+ "('Capacitación del Personal', 'Impartir capacitación sobre el uso del nuevo sistema a los empleados.', '2024-06-29 09:30:00', '2024-07-05 16:00:00', 'LOW', 'TODO'),"
				+ "('Análisis de Retroalimentación', 'Analizar los comentarios del usuario para identificar áreas de mejora.', '2024-06-30 12:30:00', '2024-07-06 17:45:00', 'HIGH', 'TODO')");
		executeSqlStatement("INSERT INTO t_tasks (title, description, from_Date, to_Date, priority, state) " +
                "VALUES " +
                "('Desarrollo de API REST', 'Crear endpoints para la comunicación entre el frontend y el backend.', '2024-06-21 10:00:00', '2024-06-27 15:00:00', 'HIGH', 'TODO')," +
                "('Pruebas de Unidad', 'Escribir casos de prueba para garantizar la calidad del código.', '2024-06-22 11:30:00', '2024-06-28 12:30:00', 'MEDIUM', 'DOING')," +
                "('Diseño de Base de Datos', 'Modelar la estructura de la base de datos para el proyecto.', '2024-06-23 09:15:00', '2024-06-29 14:45:00', 'HIGH', 'TODO')," +
                "('Configuración del Servidor', 'Configurar el servidor para alojar la aplicación web.', '2024-06-24 08:30:00', '2024-06-30 16:30:00', 'MEDIUM', 'DONE')," +
                "('Despliegue Continuo', 'Implementar un flujo de trabajo para despliegues automáticos.', '2024-06-25 12:00:00', '2024-07-01 17:00:00', 'HIGH', 'TODO')," +
                "('Optimización de Rendimiento', 'Realizar ajustes para mejorar la velocidad y eficiencia del sistema.', '2024-06-26 09:45:00', '2024-07-02 13:45:00', 'MEDIUM', 'DOING')," +
                "('Documentación del Proyecto', 'Elaborar documentación técnica y de usuario para el proyecto.', '2024-06-27 10:15:00', '2024-07-03 14:15:00', 'LOW', 'TODO')," +
                "('Reunión de Revisión', 'Realizar una reunión para revisar el progreso del proyecto con el cliente.', '2024-06-28 11:00:00', '2024-07-04 15:30:00', 'MEDIUM', 'DOING')," +
                "('Capacitación del Personal', 'Impartir capacitación sobre el uso del nuevo sistema a los empleados.', '2024-06-29 09:30:00', '2024-07-05 16:00:00', 'LOW', 'TODO')," +
                "('Análisis de Retroalimentación', 'Analizar los comentarios del usuario para identificar áreas de mejora.', '2024-06-30 12:30:00', '2024-07-06 17:45:00', 'HIGH', 'TODO')");

		// Usuarios de ejemplo
		executeSqlStatement("INSERT INTO t_users (username, password) VALUES ('user', 'user')");
	}

	/**
	 * Metodo para ejecutar una sentencia SQL.
	 * 
	 * @param sqlStatement Sentancia SQL.
	 */
	private void executeSqlStatement(String sqlStatement) {
		jdbcTemplate.execute(sqlStatement);
	}
}