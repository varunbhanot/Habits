package com.varun.habits.domain;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.ToString;

@Data
@Entity
@ToString(includeFieldNames = true)
public class Habit {

	@Id
	@Column(name = "habit_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@NotNull
	@Column(name = "device_id")
	private String deviceId;

	@NotNull
	private String name;
	private String question;

	@Transient
	private List<String> lastFive;

}
