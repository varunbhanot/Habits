CREATE TABLE habit (    
    habit_id int not null auto_increment,
    device_id VARCHAR(128),
    name VARCHAR(128),
    question VARCHAR(4000),  
    primary key(habit_id)
);