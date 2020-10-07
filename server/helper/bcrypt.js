const bcrypt = require('bcrypt')
const saltRounds = 10

function hash (pass) {
    return bcrypt.hashSync(pass, saltRounds);
}

function comparePass(pass, hash) {
    return bcrypt.compareSync(pass, hash)
}

module.exports = {hash, comparePass}