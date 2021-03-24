
const connection = require('../../../database/connection')
module.exports = (params) => {
    return new Promise((resolve, reject) => {
    
    	if(params[0].fromDate && params[0].toDate){
    		
    		params.forEach(obj => {connection.query({
   	            sql: 'INSERT into `assign_task` SET ? ON DUPLICATE KEY UPDATE empId=?, name=?, fromDate=?, toDate=?, project=?, task=?',
   	            values: [obj, obj.empId, obj.name, obj.fromDate, obj.toDate, obj.project, obj.task]
   	        }, (err, result) => {
   	            if (err)
   	                return reject({ code: 502, message: err.message })

   	            if (!result.affectedRows)
   	                return reject({ code: 400, message: 'Unable to insert' })

   	            return resolve(params)
   	        });
    		});
   	    }
    	else if(params[0].client && params[0].project && params[0].employees){
    		params = params[0];
    		connection.query({
   	            sql: 'INSERT into `client_project` SET ? ON DUPLICATE KEY UPDATE client=?, project=?, employees=?',
   	            values: [params,params.client,params.project,params.employees]
   	        }, (err, result) => {
   	            if (err)
   	                return reject({ code: 502, message: err.message })

   	            if (!result.affectedRows)
   	                return reject({ code: 400, message: 'Unable to insert' })

   	            return resolve(params)
   	        });
    		
   	    }
    	else if(params[0].client && params[0].project && params[0].subProject){
    		
    		params.forEach(obj => {connection.query({
   	            sql: 'INSERT into `add_tasks` SET ? ON DUPLICATE KEY UPDATE client=?, project=?, subProject= ?, tasks=?, activity=?',
   	            values: [obj,obj.client,obj.project,obj.subProject,obj.tasks,obj.activity]
   	        }, (err, result) => {
   	            if (err)
   	                return reject({ code: 502, message: err.message })

   	            if (!result.affectedRows)
   	                return reject({ code: 400, message: 'Unable to insert' })

   	            return resolve(params)
   	        });
    		});
    		
   	    }
    	else{
    	params = params[0];
        connection.query({
            sql: 'INSERT into `daily_status` SET ? ON DUPLICATE KEY UPDATE date=?, detail=?, status=?, approvedDate=?',
            values: [params,params.date,params.detail,params.status,params.approvedDate]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!result.affectedRows)
                return reject({ code: 400, message: 'Unable to insert' })

            return resolve(params)
        });
    	}
    
    })
}