/*
 * File: filter-obj.js
 * Path: /app/helpers/filter-obj.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Sunday, 10th January 2021 2:49:43 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Sunday, 10th January 2021 2:49:43 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
/**
 * @description filter Object to allow only limited fields
 * 
 * @param Array allow
 *      @description fields those are allow to filter from params arra
 * 
 * @param Object params
 *      @description Object from which user need to filter
 * 
 * @returns Object
 */
module.exports = (params, allowArr) => {
    return Object.keys(params).filter(key => allowArr.includes(key)).reduce((obj, key) => {
        obj[key] = params[key]
        return obj
    }, {})
}