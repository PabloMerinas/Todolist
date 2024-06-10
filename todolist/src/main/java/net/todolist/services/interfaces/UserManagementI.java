package net.todolist.services.interfaces;

import net.todolist.persistence.model.UserEntity;

public interface UserManagementI {

	UserEntity findByUsername(String username);

	
}
