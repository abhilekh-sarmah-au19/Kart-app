let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Products Model
let productsSchema = require('../models/products')

// CREATE Products
router.route('/create-products').post((req, res, next) => {
  productsSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)

      

    }
  })
})

// READ Products
router.route('/').get((req, res) => {
  productsSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Product
router.route('/edit-products/:id').get((req, res, next) => {
  productsSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Product
router.route('/update-products/:id').put((req, res, next) => {
  productsSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Products updated successfully !')
      }
    },
  )
})

// Delete Products
router.route('/delete-products/:id').delete((req, res, next) => {
  productsSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
