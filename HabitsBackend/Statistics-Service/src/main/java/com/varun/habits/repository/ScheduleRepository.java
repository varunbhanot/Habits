package com.varun.habits.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.varun.habits.domain.Schedule;

public interface ScheduleRepository extends CrudRepository<Schedule, Long>{
	
	
	/**
	 * @param from
	 * @param to
	 * @param habitId
	 * @return
	 */
	List<Schedule> findByScheduleDateBetweenAndHabitId(Date from,Date to,Long habitId);
	
	/**
	 * @param habitId
	 * @return
	 */
	List<Schedule> findByHabitId(Long habitId);

}
