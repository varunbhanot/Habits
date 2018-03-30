package com.varun.habits.service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import com.varun.habits.clients.StatisticsServiceClient;
import com.varun.habits.domain.Habit;
import com.varun.habits.domain.Habits;
import com.varun.habits.repository.HabitRepository;

/**
 * @author VB
 * 
 *         service layer for habits service
 *
 */
@Service
public class HabitsServiceImpl implements HabitsService {

	@Autowired
	private HabitRepository habitRepository;

	@Autowired
	private StatisticsServiceClient client;

	@SuppressWarnings("deprecation")
	@Override
	public Habit createHabit(Habit habit) {

		Habit existing = habitRepository.findByNameAndDeviceId(habit.getName(), habit.getDeviceId());
		Assert.isNull(existing);
		return this.habitRepository.save(habit);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.varun.habits.service.HabitsService#getHabitsByDeviceId(java.lang.String)
	 */
	@Override
	public Habits getHabitsByDeviceId(String deviceId) {
		List<Habit> habits = habitRepository.findByDeviceId(deviceId);
		habits
		.forEach(x -> 
				 x.setLastFive(
						 client.getSchedule(this.getDate(4), this.getDate(0), x.getId())));
		return new Habits(habits);
	}

	public Date getDate(int dateRange) {
		LocalDate localDate = LocalDate.now();
		localDate = localDate.minusDays(dateRange);

		return Date.from(localDate.atStartOfDay().atZone(ZoneId.systemDefault()).toInstant());

	}

	@Override
	public Habit getHabitsByName(String deviceId, String name) {
		return habitRepository.findByNameAndDeviceId(name, deviceId);
	}

}
