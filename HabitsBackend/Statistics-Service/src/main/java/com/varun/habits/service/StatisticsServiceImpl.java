package com.varun.habits.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.varun.habits.domain.HabitStatistics;
import com.varun.habits.domain.Schedule;
import com.varun.habits.repository.ScheduleRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class StatisticsServiceImpl implements StatisticsService {

	@Autowired
	private ScheduleRepository scheduleRepository;

	@Override
	public HabitStatistics getHabitStatistics(Long habitId) {
		HabitStatistics habitStatistics;
		try {
			List<Schedule> scheduleList = scheduleRepository.findByHabitId(habitId);
			habitStatistics = new HabitStatistics();
			habitStatistics.setHabitScheduleList(scheduleList);
			habitStatistics.setHabitId(habitId);
			habitStatistics.setTotalTimesDone(scheduleList.size());
			habitStatistics.setBestStreak(this.calcBestStreak(scheduleList));
			habitStatistics.setCurrentStreak(this.calcCurrentStreak(scheduleList));
		} catch (Exception e) {
			throw new RuntimeException("Error while fetching the schedule");
		}
		return habitStatistics;
	}

	private int calcCurrentStreak(List<Schedule> scheduleList) {
		// TODO Auto-generated method stub
		return 0;
	}

	private int calcBestStreak(List<Schedule> scheduleList) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Schedule storeSchedule(Schedule schedule, Long habitId) {
		log.info("storing schedule : {}", schedule);
		schedule.setHabitId(habitId);
		return scheduleRepository.save(schedule);
	}

	@Override
	public List<Schedule> getScheduleForDateRange(Date from, Date to, Long habitId) {
		log.info("get  schedule from : {} to : {}", from, to);
		return scheduleRepository.findByScheduleDateBetweenAndHabitId(from, to, habitId);
	}

	@Override
	public void deleteSchedule(Schedule schedule, Long habitId) {
		schedule.setHabitId(habitId);
		scheduleRepository.delete(schedule);
	}

}
