package com.varun.habits.domain;

import java.util.List;

import lombok.Data;

@Data
public class HabitStatistics {

	private Long habitId;
	private int totalTimesDone;
	private int bestStreak;
	private int currentStreak;
	public List<Schedule> habitScheduleList;

}
