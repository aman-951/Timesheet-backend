/*
 * File: delete-keys-in-obj.js
 * Path: /app/helpers/delete-keys-in-obj.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 12th January 2021 1:28:56 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 12th January 2021 1:28:57 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

/**
 * @description delete keys those are not allow to be part of params
 * @param Object params 
 * @param Array delArr 
 * @return Object
 */
module.exports = (params, delArr) => {
    return Object.keys(params).filter(key => !delArr.includes(key)).reduce((obj, key) => {
        obj[key] = params[key]
        return obj
    }, {})
}