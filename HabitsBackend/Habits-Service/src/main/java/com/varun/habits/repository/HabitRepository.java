package com.varun.habits.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.varun.habits.domain.Habit;

public interface HabitRepository extends CrudRepository<Habit, Long> {

	List<Habit> findByDeviceId(String deviceId);
	
	Habit findByNameAndDeviceId(String name,String deviceId);

}
