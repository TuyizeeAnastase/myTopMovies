import { expect, request, use } from "chai";
import chaiHttp from "chai-http";
import app from "../src/app";
import "dotenv/config";
import { it } from "mocha";
import {
  newMovieNoDescription,
  newMovieNoDuration,
  newMovieNoCategory,
  newExistedMovie,
  newExistedMoviewithInvlidCategory,
  newMovie
} from "./mocks/movie";
import path from 'path'

use(chaiHttp);

describe("MOVIE TEST", () => {
  it("Should return all movies", (done) => {
    request(app)
      .get("/api/v1/movies")
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property("movies");
        done();
      });
  });
  it("Should return movie by id", (done) => {
    let id = 1;
    request(app)
      .get("/api/v1/movies/" + id)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property("movie");
        done();
      });
  });
  it("Should not return movie, when movies doesn't found", (done) => {
    let id = 145524555;
    request(app)
      .get("/api/v1/movies/" + id)
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.have.property("message");
        done();
      });
  });
  it("Should not add  movie, without input", (done) => {
    request(app)
      .post("/api/v1/movies/")
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.have.property("message");
        done();
      });
  });
  it("Should not add  movie, without Description", (done) => {
    request(app)
      .post("/api/v1/movies/")
      .send(newMovieNoDescription)
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.have.property("message");
        done();
      });
  });
  it("Should not add  movie, without Duration", (done) => {
    request(app)
      .post("/api/v1/movies/")
      .send(newMovieNoDuration)
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.have.property("message");
        done();
      });
  });
  it("Should not add  movie, without Category", (done) => {
    request(app)
      .post("/api/v1/movies/")
      .send(newMovieNoCategory)
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.have.property("message");
        done();
      });
  });
  it("Should not add  movie, if name already exist", (done) => {
    request(app)
      .post("/api/v1/movies/")
      .send(newExistedMovie)
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.have.property("message");
        done();
      });
  });
  it("Should not add  movie, if category not found", (done) => {
    request(app)
      .post("/api/v1/movies/")
      .send(newExistedMoviewithInvlidCategory)
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.have.property("message");
        done();
      });
  });
  it("Should add  movie", (done) => {
    const basedir = path.resolve("./tests");
    request(app)
      .post("/api/v1/movies/")
      .field(newMovie)
      .attach("image", `${basedir}/mocks/file.jpg`)
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body).to.have.property("newMovie");
        done();
      });
  });
  it("Should add  movie, with invalid format", (done) => {
    const basedir = path.resolve("./tests");
    request(app)
      .post("/api/v1/movies/")
      .field(newMovie)
      .attach("image", `${basedir}/mocks/invalidImage.odt`)
      .end((err, res) => {
        expect(res.statusCode).to.equal(405);
        expect(res.body).to.have.property("message");
        done();
      });
  });
  it("Should not update movie, when movie not found", (done) => {
    let id = 1545;
    request(app)
      .patch("/api/v1/movies/" + id)
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.have.property("message");
        done();
      });
  });
  it("Should update movie, when movie found", (done) => {
    let id = 1;
    request(app)
      .patch("/api/v1/movies/" + id)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property("movie");
        done();
      });
  });
  it("Should not delete movie, when movie not found", (done) => {
    let id = 1545;
    request(app)
      .delete("/api/v1/movies/" + id)
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.have.property("message");
        done();
      });
  });
  it("Should delete movie, when movie found", (done) => {
    let id = 1;
    request(app)
      .delete("/api/v1/movies/" + id)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property("message");
        done();
      });
  });
});
