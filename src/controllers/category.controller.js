import {
  getAllCategories,
  searchCategories,
} from "../services/category.service";

export class categoryControllers {
  async getCategories(req, res) {
    try {
      let categories;
      const { q } = req.query;
      if (q) {
        categories = await searchCategories(q.toLowerCase());
      } else {
        categories = await getAllCategories();
      }
      return res.status(200).json({
        categories,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error while getting categories",
        error: error.message,
      });
    }
  }
}

const categoryController = new categoryControllers();
export default categoryController;
