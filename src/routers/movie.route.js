import movieController from "../controllers/movie.controllers";
import express from "express";
import { movieValidation } from "../validations/movie.validations";
import {
  checkIfMoveExistByName,
  checkUploadImage,
  checkImageFormat,
  checkIfMoveExistById,
  checkIfCategoryExist,
} from "../middleware/movie.middleware";

const router = express.Router();
router
  .route("/")
  .get(movieController.getMovies)
  .post(
    movieValidation,
    checkIfMoveExistByName,
    checkIfCategoryExist,
    checkUploadImage,
    checkImageFormat("jpg", "png"),
    movieController.createMovie
  );

router
  .route("/:id")
  .get(checkIfMoveExistById, movieController.getMovie)
  .patch(checkIfMoveExistById, movieController.updatingMovieController)
  .delete(checkIfMoveExistById, movieController.deltingMovieController);

export default router;
