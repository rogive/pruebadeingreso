const paymentController = require('./pago.controller')
const Pago = require('../models/pago.model');
require("dotenv").config();

describe('Sum', () => {
  it('should add 1 and 2 correctly', () => {
    const result = sum(1,2);
    expect(result).toBe(3);
  })
})