const router = require('express').Router()
const paymentController = require('../controllers/payment.controller')

router.route("/pagos").get(paymentController.list)
router.route("/pagos").post(paymentController.create)

module.exports = router