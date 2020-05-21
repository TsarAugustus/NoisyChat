const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /', () => {
  it('It should get the index page', (done) => {
    chai.request('localhost:3000')
    .get('/')
    .end((err, res) => {
      expect(res.status).to.equal(200);
      done();
    })
  })
});
