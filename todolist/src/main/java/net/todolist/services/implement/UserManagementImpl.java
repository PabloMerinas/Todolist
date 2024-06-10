package net.todolist.services.implement;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.todolist.persistence.model.UserEntity;
import net.todolist.persistence.repositories.UserRepository;
import net.todolist.services.interfaces.UserManagementI;

@AllArgsConstructor
@Service
public class UserManagementImpl implements UserManagementI {

	private UserRepository userRepository;

	@Override
	public UserEntity findByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	@Override
	public UserEntity save(UserEntity user) {
		return userRepository.save(user);
	}

}
