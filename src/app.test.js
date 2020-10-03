const sequelize = require("./database/connection");
const req = require('supertest');
const app = require('./app');
const mockData = require('./data/mockData.json');

describe('app', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true })
  })

  it('shouldnt POST / invalid date format', async () => {
    const res = await req(app).post('/api/pagos').send(mockData.invalidDateFormat)
    expect(res.statusCode).toBe(400)
  })

  it('should POST / valid date format', async () => {
    const res = await req(app).post('/api/pagos').send(mockData.validDateFormat)
    expect(res.statusCode).toBe(200)
  })

  it('shouldnt POST / document isnt numeric', async () => {
    const res = await req(app).post('/api/pagos').send(mockData.notNumericDocument)
    expect(res.statusCode).toBe(400)
  })

  it('should POST / document is numeric', async () => {
    const res = await req(app).post('/api/pagos').send(mockData.NumericDocument)
    expect(res.statusCode).toBe(200)
  })

  it('should POST / with success partial payment', async () => {
    const res = await req(app).post('/api/pagos').send(mockData.pagoParcial)
    expect(res.statusCode).toBe(200)
    expect(res.body).toMatchObject({
      respuesta: "gracias por tu abono, sin embargo recuerda que te hace falta pagar 800000"
    })
  })

  it('should GET / with sucess when to get all payments', async () => {
    const res = await req(app).get('/')
    expect(res.statusCode).toBe(200)
  })

})