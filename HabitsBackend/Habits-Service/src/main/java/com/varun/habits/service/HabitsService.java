package com.varun.habits.service;

import com.varun.habits.domain.Habit;
import com.varun.habits.domain.Habits;

public interface HabitsService {
	
	/**
	 * This method is used to create a new Habit. It checks for 
	 * any existing habit with same deviceId and name. 
	 * If such an instance already exists, it will throw an
	 * error
	 * @param habit
	 * @return create habit instance
	 */
	Habit createHabit(Habit habit);
	
	/**
	 * @param deviceId
	 * @return List of all habits
	 */
	Habits getHabitsByDeviceId(String deviceId);
	
	/**
	 * @param deviceId
	 * @param Id
	 * @return {@link Habit}
	 */
	Habit getHabitsByName(String deviceId,String name);
}
