
const connection = require('../../../database/connection')

module.exports = (params) => {
    return new Promise((resolve, reject) => {
    	var sql
    	if(params.table == 'timesheet'){
    		sql='select * from users u left join timesheet t on u.id=t.empId where u.managerId=? and t.date BETWEEN ? AND ?';
    	}else if(params.table == 'daily_status'){
    		sql='select * from users u left join daily_status t on u.id=t.empId where u.managerId=? and t.date BETWEEN ? AND ?';
    	}
        connection.query({
            sql: sql,
            values: [params.managerId,params.from,params.to]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: doc.message })

            if (!result)
                return reject({ code: 404, message: 'No record found.' })

            return resolve(result)
        })
    })
}