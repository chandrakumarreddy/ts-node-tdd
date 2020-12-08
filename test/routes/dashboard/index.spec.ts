import { describe } from 'mocha'
import request from 'supertest'

import createServer from 'server'
const app = createServer()

describe('test auth routes', () => {
    it('/dashboard route works', (done) => {
        request(app).get('/dashboard').expect(200, done);
    })
})
