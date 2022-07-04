const knex = require('../database/index');

const getUsersAll = (req, res) => {
  knex('users').then(result => {
    return res.json(result)
  })


}

module.exports = {
  getUsersAll
}