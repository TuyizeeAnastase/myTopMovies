import { expect, request, use } from "chai";
import chaiHttp from "chai-http";
import app from "../src/app";
import "dotenv/config";
import { it } from "mocha";

use(chaiHttp);

describe("CATEGORY TEST", () => {
  it("Should return all categories", (done) => {
    request(app)
      .get("/api/v1/categories")
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
