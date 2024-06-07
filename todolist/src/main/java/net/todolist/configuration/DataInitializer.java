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