package com.varun.habits.domain;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

/**
 * @author VB
 * 
 *         Model for Habits Schedule. Habits screen will only show last 5
 *         schedules
 *
 */
@Data
public class HabitSchedule {

	@JsonFormat(pattern="yyyy-MM-dd")
	private Date scheduleDate;
	@JsonIgnore
	private Long id;

}
