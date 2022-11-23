module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Category.associate = function (models) {
    Category.hasMany(models.Movie, {
      foreignKey: "category_id",
      as: "category",
      onDelete: "CASCADE",
    });
  };
  return Category;
};
