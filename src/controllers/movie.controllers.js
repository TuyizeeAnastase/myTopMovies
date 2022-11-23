import {
  getAllMovies,
  searchMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} from "../services/movie.services";
import { getMovieCategories } from "../services/movie.services";

export class movieControllers {
  async getMovies(req, res) {
    try {
      let movies;
      const { q } = req.query;
      if (q) {
        movies = await searchMovies((q.toLowerCase()));
      } else {
        movies = await getAllMovies();
      }
      return res.status(200).json({
        movies,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error while getting movies",
        error: error.message,
      });
    }
  }

  async createMovie(req, res) {
    const results = req.results;
    try {
      const category_id =
        req.body.category_id.length > 1
          ? req.body.category_id
          : [req.body.category_id];
      const data = {
        ...req.body,
        category_id: category_id,
        image: results.secure_url,
      };
      const newMovie = await addMovie(data);
      return res.status(201).json({
        newMovie,
      });
    } catch (err) {
      res.status(500).json({
        message: "Unable to add new movie",
        error: err.message,
      });
    }
  }

  async getMovie(req, res) {
    try {
      const movie = req.movie;
      const categories = await getMovieCategories(movie.category_id);
      if (!movie) {
        return res.status(404).json({
          message: "Movie does not found",
        });
      }
      res.status(200).json({
        movie,
        categories,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error while getting movies",
        error: error.message,
      });
    }
  }

  async updatingMovieController(req, res) {
    const movie = req.movie;
    try {
      await updateMovie({ ...req.body }, movie.id);
      return res.status(200).json({
        movie: movie.id,
        ...req.body,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error while updating movie",
        error: error.message,
      });
    }
  }

  async deltingMovieController(req, res) {
    const movie = req.movie;
    try {
      await deleteMovie(movie.id);
      return res.status(200).json({
        message: "Movie has been deleted",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error while deleting movie",
        error: error.message,
      });
    }
  }
}

const movieController = new movieControllers();
export default movieController;
