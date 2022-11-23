import { Movie, Category } from "../database/models";
import { Op } from "sequelize";

export const addMovie = async (movie) => {
  return await Movie.create(movie);
};

export const getAllMovies = async () => {
  const movies = await Movie.findAndCountAll({
    order: [["rating", "DESC"]],
  });
  return movies;
};

export const searchMoviesByRating = async (rate) => {
  const movies = await Movie.findAndCountAll({
    where: {
      rating: {
        [Op.and]: {
          [Op.lt]: 100,
          [Op.gte]: rate,
        },
      },
    },
    order: [["rating", "DESC"]],
  });
  return movies;
};

export const getMovieById = async (id) => {
  const movie = await Movie.findOne({
    where: {
      id,
    },
  });
  return movie;
};

export const updateMovie = async (updated, id) => {
  const movie = await Movie.update(updated, {
    where: {
      id,
    },
  });
  return movie;
};

export const deleteMovie = async (id) => {
  const movie = await Movie.destroy({
    where: {
      id,
    },
  });
  return movie;
};

export const getMovieCategories = async (id) => {
  return await Category.findAll({
    where: {
      id: id,
    },
  });
};
