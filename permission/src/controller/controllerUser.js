const knex = require('../database/index');

const getUsersAll = (req, res) => {
  knex('users').then(result => {
    return res.json(result)
  })
}

const getBayId = async (req, res) => {
  const { id } = req.params

  const result = await knex('users').where("id", id)
  return res.json(result)
}
const create = async (req, res, next) => {
  try {
    const result = await knex('users').insert(req.body)
    return res.status(201).send()

  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const { id } = req.params
    await knex('users').update(req.body).where("id", id)
    return res.status(201).send()

  } catch (error) {
    next(error)
  }
}


const remove = async (req, res) => {
  try {
    const { id } = req.params
    await knex('users').where("id", id).del()
    return res.status(200).send()

  } catch (error) {
    next(error)
  }
}


module.exports = {
  getUsersAll,
  getBayId,
  create,
  update,
  remove
}