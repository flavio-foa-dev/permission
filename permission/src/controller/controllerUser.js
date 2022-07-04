const knex = require('../database/index');

const getUsersAll = (req, res) => {
  knex('users').then(result => {
    return res.json(result)
  })
<<<<<<< HEAD
}

const getBayId = async (req, res) => {
  const { id } = req.params

  const result = await knex('users').where("id", 1)
  return res.json(result)
}

module.exports = {
  getUsersAll,
  getBayId
=======


}

module.exports = {
  getUsersAll
>>>>>>> 2c5e13bb6e2617ad7adfc57da0bc9592f5ea52f8
}