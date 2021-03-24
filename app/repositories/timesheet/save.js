
const connection = require('../../../database/connection'),
    getId = require('../../helpers/generate-uuid'),
    entities = require('../../entities/candidate'),
    filterParam = require('../../helpers/filter-obj');


module.exports = (params) => {
    return new Promise((resolve, reject) => {
       // params = { ...filterParam(params, entities), ...{ id: getId() } }
    for(var i=0; i<params.length;i++){
        connection.query({
            sql: 'INSERT into `timesheet` SET ? ON DUPLICATE KEY UPDATE date=?, hours=?, status=?, approvedDate=?',
            values: [params[i],params[i].date,params[i].hours,params[i].status,params[i].approvedDate]
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