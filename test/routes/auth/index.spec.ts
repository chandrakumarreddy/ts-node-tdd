import { describe } from 'mocha'
import request from 'supertest'

import createServer from 'server'
const app = createServer()

describe('test auth routes', () => {
    it('/auth route works', (done) => {
        request(app).get('/auth').expect(200, done);
    })
})
