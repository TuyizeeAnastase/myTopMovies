import { Movie, Category } from "../database/models";
import cloadinary from "cloudinary";

export const checkIfMoveExistByName = async (req, res, next) => {
  const name = req.body.name.toLowerCase();
  const movie = await Movie.findOne({
    where: {
      name,
    },
  });
  if (movie) {
    return res.status(409).json({
      message: "Movie already exist",
    });
  }
  next();
};

export const checkIfMoveExistById = async (req, res, next) => {
  const { id } = req.params;
  const movie = await Movie.findOne({
    where: {
      id,
    },
  });
  if (!movie) {
    return res.status(404).json({
      message: "Movie doesn't exist,please contact admin for support",
    });
  }
  req.movie = movie;
  next();
};

export const checkUploadImage = async (req, res, next) => {
  if (!req.files) {
    return res.status(400).json({
      message: "Please upload movie image",
    });
  }
  const file = req.files.image;
  cloadinary.uploader.upload(file.tempFilePath, async (results, err) => {
    if (err) {
      res.status(500).json({
        message: "Unable to upload image",
        error: err,
      });
    }
    req.results = results;
    next();
  });
};

export const checkImageFormat = (...extensions) => {
  return (req, res, next) => {
    const results = req.results;
    if (!extensions.includes(results.format)) {
      return res.status(405).json({
        message: `Only ${extensions} format are allowed`,
      });
    }
    req.results = results;
    next();
  };
};

export const checkIfCategoryExist = async (req, res, next) => {
  const { category_id } = req.body;
  const categories = await Category.findAll({
    where: {
      id: category_id,
    },
  });
  if (!categories || category_id.length != categories.length) {
    let categories_input = [];
    let categories_res = [];
    for (let i = 0; i < category_id.length; i++) {
      categories_input.push(parseInt(category_id[i]));
    }
    for (let j = 0; j < categories.length; j++) {
      categories_res.push(categories[j].id);
    }
    const filteredId = categories_input.filter(
      (item) => categories_res.indexOf(item) < 0
    );
    return res.status(404).json({
      message: `Category with ID ${filteredId} doesn't exist, please contact admin for support`,
    });
  }
  req.categories = categories;
  next();
};
