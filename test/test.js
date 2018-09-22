const chai = require("chai"),
  chaiHttp = require("chai-http");
const expect = chai.expect;
const assert = chai.assert;

const quoteApiUrl = "https://talaikis.com/api/quotes/random/";
const randomApiUrl =
  "https://api.unsplash.com/photos/random?client_id=c282bd4e5d5c9761c7af1f3a5e76e17e16613384df73f02789ec2876e5e53472";

chai.use(chaiHttp);

describe("Test Quote Api", function() {
  it("should return correct devision result", done => {
    chai
      .request(quoteApiUrl)
      .get('/')
      .end(function (err, res) {
        done()
        expect(err).to.be.null;
        expect(res).to.have.status(200);
     });
  });
});
