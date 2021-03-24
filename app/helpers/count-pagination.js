/*
 * File: count-pagination.js
 * Path: /app/helpers/count-pagination.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 11:08:15 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 13th January 2021 11:08:15 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

/**
 * calculate pagination values
 * @param Object params 
 *  @example => {page?: Number, limit?: Number}
 * @returns Object
 */
module.exports = (params) => {
    let limit = parseInt((params && params.limit) && (params.limit) || process.env.PAGINATION_LIMIT || 10),
        page = parseInt((params && params.page) && (params.page) || 1),
        offset = parseInt((page - 1) * limit)

    return { limit, offset, page }
}