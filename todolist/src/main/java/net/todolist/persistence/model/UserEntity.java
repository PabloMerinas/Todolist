package net.todolist.persistence.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "T_USERS")
@Data
public class UserEntity {

	/**
	 * Usuario del usuario.
	 */
	@Id
	private String username;

	/**
	 * Contraseña del usuario
	 */
	private String password;

}
