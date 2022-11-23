import {Category} from '../database/models'

export const getAllCategories = async (limit, offset) => {
    const categories = await Category.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    });
    return categories;
  };

  export const searchCategories = async (limit, offset, q) => {
    const categories = await Category.findAndCountAll({
      limit,
      offset,
      where: {
        name: {
          [Op.like]: `%${q}`,
        },
      },
      order: [["createdAt", "DESC"]],
    });
    return categories;
  };