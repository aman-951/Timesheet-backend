
CREATE TABLE IF NOT EXISTS assign_task (
    empId varchar(255),
    name  varchar(255),
    fromDate date,
	toDate date,
    project varchar(255),
    task varchar(255),
    PRIMARY KEY (empId,project,task)
) ENGINE=InnoDB COMMENT 'assign task to employees';

CREATE TABLE IF NOT EXISTS daily_status (
    empId varchar(255),
    date date,
    detail text,
    status varchar(255),
    submittedDate date,
    approvedDate date,
    PRIMARY KEY (empId,date)
) ENGINE=InnoDB COMMENT 'daily status of employee';



CREATE TABLE IF NOT EXISTS client_project (
    client varchar(255),
    project  varchar(255),
    employees text,
    PRIMARY KEY (client,project)
) ENGINE=InnoDB COMMENT 'assign employee to project';

CREATE TABLE IF NOT EXISTS add_tasks (
    client varchar(255),
    project  varchar(255),
	subProject  varchar(255),
    tasks text,
	activity text,
    PRIMARY KEY (client,project,subProject)
) ENGINE=InnoDB COMMENT 'add task to project';

