package com.varun.habits.domain;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Habits {
	
	private List<Habit> habitsList;

}
