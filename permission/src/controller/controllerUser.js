const knex = require('../database/index');

const getUsersAll = (req, res) => {
  knex('users').then(result => {
    return res.json(result)
  })
}

const getBayId = async (req, res) => {
  const { id } = req.params

  const result = await knex('users').where("id", 1)
  return res.json(result)
}

module.exports = {
  getUsersAll,
  getBayId
}