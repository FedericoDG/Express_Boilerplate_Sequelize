const { describe, it } = require("mocha")
const chai = require("chai")
const chaiHttp = require("chai-http")

const { app } = require("../index")
const { demo } = require("./mocks/endpoints")

chai.should()
chai.use(chaiHttp)

describe("Pruebas en demo /api/demo.", () => {
  const endpoint = demo

  describe("GET", () => {
    it("Debe retornar...", (done) => {
      chai
        .request(app)
        .get(endpoint)
        // .set("Authorization", token)
        // .send(item)
        .end((err, response) => {
          response.should.have.status(200)
          response.body.should.be.a("object")
          response.body.should.have.property("message").eq("Demo.")
          done()
        })
    })
  })
})
