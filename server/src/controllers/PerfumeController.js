const { where } = require('sequelize')
const{Perfume} = require('../models')
module.exports = {
  //get all user
  async index (req, res) {
    try {
      const perfumes = await Perfume.findAll()
      res.send(perfumes)
    } catch (error) {
      res.status(500).send({
         error: 'The perfumes information was incorrect'
        })
    }
   
  },
    
  //create user
  async create(req, res) {
    try {
      const perfume = await Perfume.create(req.body)
      res.send(perfume.toJSON())
    } catch (error) {
      res.status(500).send({
         error: 'The perfumes information was incorrect'
        })
    }
  },

  //edit user
  async put(req, res) {
    try {
      await Perfume.update(req.body,{
      where: {
        id: req.params.perfumesId
      }
    })
    res.send(req.body)
    } catch (error) {
      res.status(500).send({
         error: 'Update perfume information was incorrect'
        })
    }
  },

  // delete user
  async delete(req, res) {
    try {
      const perfume = await Perfume.findOne({
        where: {
          id: req.params.perfumeId
        }
      })
      if (!perfume) {
        return res.status(403).send({
          error: 'The perfume id is not found'
        })
      }
      await perfume.destroy()
      res.send(perfume)
    } catch (error) {
      res.status(500).send({
        error: 'Delete perfume information was incorrect'
       })
    }
  },

  // show user by id
  async show (req, res) {
    try {
      const perfume = await Perfume.findOne({
        where: {
          id: req.params.perfumesId
        }
      })
      if (!perfume) {
        return res.status(403).send({
          error: 'The perfume id is not found'
        })
      }

      res.send(perfume)
    } catch (error) {
      res.status(500).send({
        error: 'Perfumes information was incorrect'
       })
    }
  }
}
