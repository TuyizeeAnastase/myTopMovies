"use strict";

module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    name: DataTypes.STRING
  }, {});
  Category.associate = function (models) {
    Category.hasMany(models.Movie, {
      foreignKey: "category_id",
      as: "category",
      onDelete: "CASCADE"
    });
  };
  return Category;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VxdWVsaXplIiwiRGF0YVR5cGVzIiwiQ2F0ZWdvcnkiLCJkZWZpbmUiLCJuYW1lIiwiU1RSSU5HIiwiYXNzb2NpYXRlIiwibW9kZWxzIiwiaGFzTWFueSIsIk1vdmllIiwiZm9yZWlnbktleSIsImFzIiwib25EZWxldGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGF0YWJhc2UvbW9kZWxzL2NhdGVnb3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSA9PiB7XG4gIGNvbnN0IENhdGVnb3J5ID0gc2VxdWVsaXplLmRlZmluZShcbiAgICBcIkNhdGVnb3J5XCIsXG4gICAge1xuICAgICAgbmFtZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICB9LFxuICAgIHt9XG4gICk7XG4gIENhdGVnb3J5LmFzc29jaWF0ZSA9IGZ1bmN0aW9uIChtb2RlbHMpIHtcbiAgICBDYXRlZ29yeS5oYXNNYW55KG1vZGVscy5Nb3ZpZSwge1xuICAgICAgZm9yZWlnbktleTogXCJjYXRlZ29yeV9pZFwiLFxuICAgICAgYXM6IFwiY2F0ZWdvcnlcIixcbiAgICAgIG9uRGVsZXRlOiBcIkNBU0NBREVcIixcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIENhdGVnb3J5O1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsTUFBTSxDQUFDQyxPQUFPLEdBQUcsVUFBQ0MsU0FBUyxFQUFFQyxTQUFTLEVBQUs7RUFDekMsSUFBTUMsUUFBUSxHQUFHRixTQUFTLENBQUNHLE1BQU0sQ0FDL0IsVUFBVSxFQUNWO0lBQ0VDLElBQUksRUFBRUgsU0FBUyxDQUFDSTtFQUNsQixDQUFDLEVBQ0QsQ0FBQyxDQUFDLENBQ0g7RUFDREgsUUFBUSxDQUFDSSxTQUFTLEdBQUcsVUFBVUMsTUFBTSxFQUFFO0lBQ3JDTCxRQUFRLENBQUNNLE9BQU8sQ0FBQ0QsTUFBTSxDQUFDRSxLQUFLLEVBQUU7TUFDN0JDLFVBQVUsRUFBRSxhQUFhO01BQ3pCQyxFQUFFLEVBQUUsVUFBVTtNQUNkQyxRQUFRLEVBQUU7SUFDWixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0QsT0FBT1YsUUFBUTtBQUNqQixDQUFDIn0=