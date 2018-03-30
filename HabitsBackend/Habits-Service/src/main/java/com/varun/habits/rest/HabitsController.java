package com.varun.habits.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.varun.habits.domain.Habit;
import com.varun.habits.domain.Habits;
import com.varun.habits.service.HabitsService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class HabitsController {

	@Autowired
	private HabitsService service;

	/**
	 * @param deviceId
	 * @return
	 */
	@RequestMapping(path = "/api/{deviceId}", method = RequestMethod.GET)
	public Habits getHabitsByDeviceId(@PathVariable String deviceId) {
		log.debug("Inside getHabitsByDeviceId for device : {}", deviceId);
		return service.getHabitsByDeviceId(deviceId);
	}

	/**
	 * @param deviceId
	 * @return
	 */
	@RequestMapping(path = "/api/{deviceId}/{name}", method = RequestMethod.GET)
	public Habit getHabitsByHabitName(@PathVariable String deviceId, @PathVariable String name) {
		log.debug("Inside getHabitsByDeviceId for device : {} , name : {}", deviceId, name);
		return service.getHabitsByName(deviceId, name);
	}

	/**
	 * Controller for creating a new habit
	 * 
	 * @param habit
	 * @return {@link ResponseEntity<Habit>}
	 */
	@RequestMapping(path = "/api", method = RequestMethod.POST)
	public ResponseEntity<Habit> createHabit(@Validated @RequestBody Habit habit) {
		log.info("recieved request : {}", habit);
		return new ResponseEntity<Habit>(service.createHabit(habit), HttpStatus.CREATED);

	}

}
