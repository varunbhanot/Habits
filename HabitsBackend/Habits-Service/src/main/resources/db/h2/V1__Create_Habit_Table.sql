CREATE TABLE habit (    
    habit_id int,
    name VARCHAR(128),
    device_id VARCHAR(128),
    question VARCHAR(4000),    
);

alter table Habit alter habit_id int not null auto_increment;
