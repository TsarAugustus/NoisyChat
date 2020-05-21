const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /api/', () => {
  it('It should GET the main api page', (done) => {
    chai.request('localhost:3000/api/')
    .get('/')
    .end((err, res) => {
      expect(res.status).to.equal(200);
      done();
    })
  })
});
