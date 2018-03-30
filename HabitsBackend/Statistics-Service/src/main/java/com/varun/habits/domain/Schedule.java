package com.varun.habits.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Entity
@Table(name = "habit_schedule")
public class Schedule {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "schedule_id")
	private Long id;
	@Column(name = "schedule_date")
	@JsonFormat(pattern="yyyy-MM-dd")
	@NotNull
	private Date scheduleDate;		
	@Column(name = "habit_id")
	private Long habitId;

}
