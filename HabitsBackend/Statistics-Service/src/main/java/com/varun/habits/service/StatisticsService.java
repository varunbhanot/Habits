package com.varun.habits.service;

import java.util.Date;
import java.util.List;

import com.varun.habits.domain.HabitStatistics;
import com.varun.habits.domain.Schedule;

public interface StatisticsService {

	/**
	 * Fetch statistic for a habit on the basis of habit_id. This will also fetch
	 * the schedule for the habit
	 * 
	 * @param habitId
	 * @return {@link HabitStatistics}
	 */
	HabitStatistics getHabitStatistics(Long habitId);

	/**
	 * Store schedule for a habit. This method will be called via the main screen on
	 * long press
	 * 
	 * @param date
	 * @param habitID
	 * @return {@link Schedule}}
	 */
	Schedule storeSchedule(Schedule schedule,Long habitId);

	/**
	 * Method to get schedule for a particular date range.
	 * @param from
	 * @param to
	 * @param habitId
	 * @return {@link List<Schedule> }
	 */
	List<Schedule> getScheduleForDateRange(Date from, Date to, Long habitId);
	
	
	/**
	 * Method to delete the schedule
	 * 
	 * @param schedule
	 * @param habitId
	 */
	void deleteSchedule(Schedule schedule,Long habitId);
		

}
