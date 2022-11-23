module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    category_id: DataTypes.ARRAY(DataTypes.INTEGER),
    duration: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  },
  {}
  );
  Movie.associate = function(models){
    Movie.belongsTo(models.Category,{
      foreignKey:"category_id",
      as:"category",
      onDelete:"CASCADE"
    });
  }
  return Movie;
};