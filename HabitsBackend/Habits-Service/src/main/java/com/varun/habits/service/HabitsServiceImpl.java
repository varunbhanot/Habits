package com.varun.habits.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import com.varun.habits.domain.Habit;
import com.varun.habits.repository.HabitRepository;

/**
 * @author VB
 * 
 * service layer for habits service
 *
 */
@Service
public class HabitsServiceImpl implements HabitsService{
	
	@Autowired
	private HabitRepository habitRepository;
	
	@SuppressWarnings("deprecation")
	@Override
	public Habit createHabit(Habit habit) {
		
		Habit existing = habitRepository.findByNameAndDeviceId(habit.getName(), habit.getDeviceId());
		Assert.isNull(existing);		
		return this.habitRepository.save(habit);
	}

	/* (non-Javadoc)
	 * @see com.varun.habits.service.HabitsService#getHabitsByDeviceId(java.lang.String)
	 */
	@Override
	public List<Habit> getHabitsByDeviceId(String deviceId) {		
		return habitRepository.findByDeviceId(deviceId);
	}

	@Override
	public Habit getHabitsByName(String deviceId, String name) {
		return habitRepository.findByNameAndDeviceId(name, deviceId);
	}

}
