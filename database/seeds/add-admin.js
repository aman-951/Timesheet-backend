/*
 * File: add-admin-permission.js
 * Path: /database/seeds/add-admin-permission.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Sunday, 17th January 2021 2:12:59 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Sunday, 17th January 2021 2:13:00 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const addRoleRepo = require('../../app/repositories/role/insert'),
    params = { name: 'admin' },
    range = require('../../app/helpers/range'),
    connection = require('../connection'),
    addAdminPermission = require('../../app/repositories/role-permission/insert'),
    addAdmin = require('../../app/repositories/user/save'),
    adminParam = {
        name: 'admin',
        username: 'admin',
        email: 'admin@email.com',
        password: 'password'
    }

module.exports = (permissions) => {
    addRoleRepo(params).then(resp => {
        let queries = [
            addAdmin({ ...adminParam, ...{ role_id: resp.id } })
        ]
        for (let permission_id of range(1, permissions))
        queries.push(addAdminPermission({ role_id: resp.id, permission_id: permission_id }))

        Promise.all(queries).then(resp => {
            console.log('admin successfully registered');
        }).catch(err => {
            console.log('Unable to register admin');
        }).finally(() => {
            connection.end()
        })
    }).catch(err => {
        console.log('Unable to add admin-role');
    })
}