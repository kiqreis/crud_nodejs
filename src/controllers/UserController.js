const User = require('../models/User.js')

module.exports = {
  async post(req, res) {
    try {

      const { name, email } = req.body
      const user = await User.findOne({ where: { email } })

      if (user) {
        res.status(401).json({ message: 'User already registered!' })
      } else {
        const user = await User.create({ name, email })
        res.status(200).json({ user })
      }

    } catch (error) {
      res.status(400).json({ error })
    }
  },

  async update(req, res) {
    try {

      const { id } = req.params
      const { name, email } = req.body

      const user = await User.findOne({ where: { id } })

      if (!user) {
        res.status(401).json({ message: 'No user found!' })
      } else {
        const user = await User.update({ name, email }, { where: { id } })
        res.status(200).json({ user })
      }

    } catch (error) {
      res.status(400).json({ error })
    }
  },

  async show(req, res) {
    try {

      const users = await User.findAll()

      if (!users) {
        res.status(401).json({ message: 'There are no registered users' })
      } else {
        res.status(200).json({ users })
      }

    } catch (error) {
      res.status(400).json({ error })
    }
  },

  async showId(req, res) {
    try {

      const { id } = req.params
      const user = await User.findOne({ where: { id } })

      if (!user) {
        res.status(401).json({ message: 'User not found!' })
      } else {
        res.status(200).json({ user })
      }

    } catch (error) {
      res.status(400).json({ error })
    }
  },

  async delete(req, res) {
    try {

      const { id } = req.params
      const user = await User.findOne({ where: { id } })

      if (!user) {
        res.status(401).json({ message: 'User not found!' })
      } else {
        await User.destroy({ where: { id } })
        res.status(200).json({ message: 'User data deleted successfully!' })
      }

    } catch (error) {
      res.status(400).json({ error })
    }
  }
}