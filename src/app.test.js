const req = require('supertest')
const app = require('./app')

describe('app', () => {

  it('should GET /api/pagos with success code', async () => {
    const res = await req(app).get('/api/pagos')
    expect(res.statusCode).toBe(200)
    //expect(res.text).toMatch(/hello world/i)
  })
})
