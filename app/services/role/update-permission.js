/*
 * File: update-permission.js
 * Path: /app/services/role/update-permission.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 15th January 2021 4:22:08 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:11:41 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const repository = require('../../repositories/role-permission/insert'),
    deletePermissions = require('../../repositories/role-permission/delete-by-role-id')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        deletePermissions(req.params.id).then(status => {

            let promises = req.body.permissions.map(permission => {
                return repository({ role_id: req.params.id, permission_id: permission })
            })

            Promise.all(promises).then(result => {
               return resolve({})
            }).catch(err => {
                return reject(err)
            })
        })
    })
}