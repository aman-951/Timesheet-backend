
const connection = require('../../../database/connection')

module.exports = (params) => {
    return new Promise((resolve, reject) => {
    	if(params.table == 'daily_status'){
        connection.query({
            sql: 'SELECT * FROM `daily_status` WHERE `date`= ? and `empId`=?',
            values: [params.date, params.empId]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!result)
                return reject({ code: 404, message: 'No record found.' })

            return resolve(result)
        })
    	}
    	else if(params.table == 'client_project'){
    		if(params.subProject){
    			sql= 'SELECT * FROM `client_project` where `client`=? and `project`=?';
    		}
    		else{
    			 sql= 'SELECT * FROM `client_project`';
    		}
            connection.query({
                sql: sql,
                values: [params.client,params.project]
            }, (err, result) => {
                if (err)
                    return reject({ code: 502, message: err.message })

                if (!result)
                    return reject({ code: 404, message: 'No record found.' })

                return resolve(result)
            })
        	}
    	else if(params.table == 'add_tasks'){
    		if(params.task){
    			sql= 'SELECT activity FROM `add_tasks` where `subProject`=?';
    			params.client = params.task;
    		}
    		else if(params.subProject){
    			sql= 'SELECT distinct(tasks) FROM `add_tasks` where `client`=? and `project`=? and `subProject`=?';
    		}
    		else if(params.project){
    			sql= 'SELECT distinct(subProject) FROM `add_tasks` where `client`=? and `project`=?';
    		}
    		else if(params.client){
    			sql= 'SELECT distinct(project) FROM `add_tasks` where `client`=?';
    		}		
    		else{
    			 sql= 'SELECT distinct(client) FROM `add_tasks`';
    		}
            connection.query({
                sql: sql,
                values: [params.client,params.project,params.subProject]
            }, (err, result) => {
                if (err)
                    return reject({ code: 502, message: err.message })

                if (!result)
                    return reject({ code: 404, message: 'No record found.' })

                return resolve(result)
            })
        	}
    	else if(params.table == 'task_assign'){
    		if(params.project){
    			sql= 'select distinct(task) from `assign_task` where fromDate <= ? and toDate >= ? and empId=? and project=?';
    		}
    		else if(params.assignedEmployees){
    			sql= 'select * from `assign_task` where fromDate <= ? and toDate >= ? and empId=?';
    		}
    		else{
    			sql= 'select distinct(project) from `assign_task` where fromDate <= ? and toDate >= ? and empId=?';
    		}
    		 connection.query({
    			    sql:sql,
    	            values: [params.date,params.date, params.empId,params.project]
    	        }, (err, result) => {
    	            if (err)
    	                return reject({ code: 502, message: err.message })

    	            if (!result)
    	                return reject({ code: 404, message: 'No record found.' })

    	            return resolve(result)
    	        })
    		
    		
    		
    		
    	}
    })
}