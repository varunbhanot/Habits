package com.varun.habits;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.varun.habits.domain.HabitStatistics;
import com.varun.habits.domain.Schedule;
import com.varun.habits.service.StatisticsService;

import lombok.extern.slf4j.Slf4j;

@SpringBootApplication
@RestController
@EnableDiscoveryClient
@Slf4j
public class StatisticsServiceApplication {

	@Autowired
	private StatisticsService service;

	public static void main(String[] args) {
		SpringApplication.run(StatisticsServiceApplication.class, args);
	}

	@GetMapping("/api/{habitId}/stats")
	public HabitStatistics getStats(@PathVariable Long habitId) {
		log.info("Getting stats for :{}", habitId);
		return service.getHabitStatistics(habitId);
	}

	@PostMapping("/api/{habitId}/schedule")
	public ResponseEntity<Schedule> createSchedule(@RequestBody Schedule schedule, @PathVariable Long habitId) {
		log.info("creating schedule for : {} ", habitId);
		return new ResponseEntity<Schedule>(service.storeSchedule(schedule, habitId), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/api/{habitId}/schedule")
	public ResponseEntity<Schedule> deleteSchedule(@RequestBody Schedule schedule, @PathVariable Long habitId) {
		log.info("delete schedule for : {} ", habitId);
		service.deleteSchedule(schedule, habitId);
		return new ResponseEntity<Schedule>(schedule,HttpStatus.OK);
	}

	@GetMapping("/api/{habitId}/schedule")
	public List<Schedule> getSchedule(@RequestParam(value = "from") @DateTimeFormat(pattern = "yyyy-MM-dd") Date from,
			@RequestParam(value = "to") @DateTimeFormat(pattern = "yyyy-MM-dd") Date to, @PathVariable Long habitId) {
		log.info("getting schedule from : {} , to :{}  ", from, to);
		return service.getScheduleForDateRange(from, to, habitId);

	}

}
