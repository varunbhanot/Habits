CREATE TABLE habit_schedule (    
    schedule_id int not null auto_increment,
    schedule_date DATE,
    habit_id int,       
    primary key(schedule_id)
);


