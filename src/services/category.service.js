import {Category} from '../database/models'

export const getAllCategories = async (limit, offset) => {
    const categories = await Category.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    });
    return categories;
  };
