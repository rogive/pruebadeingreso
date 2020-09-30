const express = require('express');
//const Payment = require('../models/payment.model');
const app = express();

module.exports = {
  async list(req, res) {
    try {
      const payment = await Payment.find()

      res.status(200).json(payment);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  async create(req, res) {
    try {
      const data = req.body;
      const { documentoIdentificacionArrendatario,
              codigoInmueble,
              valorPagado,
              fechaPago } = req.body;
      const payment = await Payment.create({data})

      res.status(200).json(payment);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}