const moment = require('moment')

function formatDate(date) {
    return moment(date).format('LL')
}


module.exports = formatDate