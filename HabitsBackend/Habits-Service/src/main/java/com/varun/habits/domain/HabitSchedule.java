package com.varun.habits.domain;

import java.util.Date;

import lombok.Data;

/**
 * @author VB
 * 
 * Model for Habits Schedule. Habits screen will only show last 5 schedules
 *
 */
@Data
public class HabitSchedule {

	private Date scheduleDate;

	private boolean isScheduled;

}
