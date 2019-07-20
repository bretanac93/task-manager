const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;
const setup = require('../setup');
const server = require('../../app');

describe('Homepage access', () => {
  setup();
  it('should access homepage and retrieve sample data', async () => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.id).to.equal(1);
        expect(res.body.name).to.equal('hello');
      });
  });
});
