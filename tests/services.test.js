import { expect,  use } from "chai";
import chaiHttp from "chai-http";
import "dotenv/config";
import { it } from "mocha";
import { addMovie, searchMoviesByRating,getAllMovies,getMovieById,updateMovie,deleteMovie } from "../src/services/movie.services";
import {getAllCategories} from '../src/services/category.service'

use(chaiHttp);

describe("MOVIE SERVICES TEST", () => {
  it("Should return all movies", async () => {
    await getAllMovies();
    try {
      await getAllMovies();
    } catch (e) {
      expect(e.toString()).toMatch(e.message);
    }
  });
  it("Should add movie", async () => {
    const newMovie = {
      name: "Black",
      duration: 234,
      rating: 4,
      description: "the war movie",
      category_id: [1],
      image:
        "https://res.cloudinary.com/depljf8uc/image/upload/v1669155407/uzwx8vghtxswtinn3c6v.jpg",
    };
    await addMovie(newMovie);
    try {
      await addMovie(newMovie);
    } catch (e) {
      expect(e.toString()).toMatch(e.message);
    }
  });
  it("Should get movie", async () => {
    await getMovieById(1);
    try {
      await getMovieById(1);
    } catch (e) {
      expect(e.toString()).toMatch(e.message);
    }
  });
  it("Should update movie", async () => {
    await updateMovie({"name":"test"},1);
    try {
      await updateMovie();
    } catch (e) {
      expect(e.toString()).toMatch(e.message);
    }
  });
});
it("Should delete movie", async () => {
    await deleteMovie(2);
    try {
      await deleteMovie(2);
    } catch (e) {
      expect(e.toString()).toMatch(e.message);
    }
  });
  it("Should rank movies", async () => {
    await searchMoviesByRating(2);
    try {
      await searchMoviesByRating(2);
    } catch (e) {
      expect(e.toString()).toMatch(e.message);
    }
  });
  it("Should getALl categories", async () => {
    await getAllCategories();
    try {
      await getAllCategories();
    } catch (e) {
      expect(e.toString()).toMatch(e.message);
    }
  });
  
  
