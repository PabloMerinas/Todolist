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
//		executeSqlStatement("INSERT INTO t_visited_places (user_username, country_id) VALUES ('admin', 1);");
//		executeSqlStatement("INSERT INTO t_visited_places (user_username, country_id) VALUES ('admin', 1);");
		executeSqlStatement("INSERT INTO t_tasks (title, description, from_Date, to_Date, priority, state) VALUES ('Completar informe', 'Completar el informe mensual para el departamento de ventas.', '2024-06-10 09:00:00', '2024-06-10 15:00:00', 'HIGH', 'DOING')");
		executeSqlStatement("INSERT INTO t_tasks (title, description, from_Date, to_Date, priority, state) VALUES ('Hacer la compra', 'Completar el informe mensual para el departamento de ventas.', '2024-06-10 09:00:00', '2024-06-10 15:00:00', 'LOW', 'TODO')");

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