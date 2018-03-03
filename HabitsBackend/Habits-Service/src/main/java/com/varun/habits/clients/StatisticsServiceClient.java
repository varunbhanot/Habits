package com.varun.habits.clients;

import java.util.Date;
import java.util.List;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.varun.habits.domain.HabitSchedule;

@FeignClient(value = "statistics-service")
public interface StatisticsServiceClient {

	@GetMapping(value = "/api/{habitId}/schedule")
	List<HabitSchedule> getSchedule(@RequestParam(value = "from") @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ssZ") Date from,
			@RequestParam(value = "to") @DateTimeFormat(pattern="yyyy-MM-dd'T'HH:mm:ssZ") Date to, @PathVariable("habitId") Long habitId);

}
