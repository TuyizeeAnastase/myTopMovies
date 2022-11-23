import express from "express";
import movieRouters from "./movie.route";
import categoryRouters from "./category.route";

const routes = express();

routes.get("/", (req, res) => {
  res.status(200).json({
    message: "This My Top Movies App backend",
  });
});

routes.use("/api/v1/movies", movieRouters);
routes.use("/api/v1/categories", categoryRouters);

routes.get("*", (req, res) => {
  res.status(404).json({
    message: "Page not found, try again",
  });
});

export default routes;
