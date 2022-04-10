const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports.usersController = {
  getAllUsers: async (req, res) => {
    const users = await User.find()
    res.json(users)
  },

  registerUser: async (req, res) => {
    try {
      const { login, password } = req.body
      const hash = await bcrypt.hash(password, 10)
      const user = await User.create({ login: login, password: hash })
      res.json(user)
    } catch (error) {
      return res.status(400).json({
        error: 'Ошибка при регистрации' + error.toString()
      })
    }
  },

  login: async (req, res) => {
    const { login, password } = req.body
    const candidate = await User.findOne({ login })
    if (!candidate) {
      return res.status(401).json('Неверный логин')
    }
    const valid = await bcrypt.compare(password, candidate.password)
    if (!valid) {
      return res.json('неверный пароль')
    }

    const payload = {
      id: candidate._id,
      login: candidate.login
    }

    const token = await jwt.sign(payload, process.env.SECRET, {
      expiresIn: '24h'
    })

    res.json({
      token
    })
  }
}