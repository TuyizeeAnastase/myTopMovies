"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _movie = _interopRequireDefault(require("./movie.route"));
var _category = _interopRequireDefault(require("./category.route"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var routes = (0, _express["default"])();
routes.get("/", function (req, res) {
  res.status(200).json({
    message: "This My Top Movies App backend"
  });
});
routes.use("/api/v1/movies", _movie["default"]);
routes.use("/api/v1/categories", _category["default"]);
routes.get("*", function (req, res) {
  res.status(404).json({
    message: "Page not found, try again"
  });
});
var _default = routes;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyb3V0ZXMiLCJleHByZXNzIiwiZ2V0IiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ1c2UiLCJtb3ZpZVJvdXRlcnMiLCJjYXRlZ29yeVJvdXRlcnMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVycy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IG1vdmllUm91dGVycyBmcm9tIFwiLi9tb3ZpZS5yb3V0ZVwiO1xuaW1wb3J0IGNhdGVnb3J5Um91dGVycyBmcm9tIFwiLi9jYXRlZ29yeS5yb3V0ZVwiO1xuXG5jb25zdCByb3V0ZXMgPSBleHByZXNzKCk7XG5cbnJvdXRlcy5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgbWVzc2FnZTogXCJUaGlzIE15IFRvcCBNb3ZpZXMgQXBwIGJhY2tlbmRcIixcbiAgfSk7XG59KTtcblxucm91dGVzLnVzZShcIi9hcGkvdjEvbW92aWVzXCIsIG1vdmllUm91dGVycyk7XG5yb3V0ZXMudXNlKFwiL2FwaS92MS9jYXRlZ29yaWVzXCIsIGNhdGVnb3J5Um91dGVycyk7XG5cbnJvdXRlcy5nZXQoXCIqXCIsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc3RhdHVzKDQwNCkuanNvbih7XG4gICAgbWVzc2FnZTogXCJQYWdlIG5vdCBmb3VuZCwgdHJ5IGFnYWluXCIsXG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQStDO0FBRS9DLElBQU1BLE1BQU0sR0FBRyxJQUFBQyxtQkFBTyxHQUFFO0FBRXhCRCxNQUFNLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUs7RUFDNUJBLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7SUFDbkJDLE9BQU8sRUFBRTtFQUNYLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGUCxNQUFNLENBQUNRLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRUMsaUJBQVksQ0FBQztBQUMxQ1QsTUFBTSxDQUFDUSxHQUFHLENBQUMsb0JBQW9CLEVBQUVFLG9CQUFlLENBQUM7QUFFakRWLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBSztFQUM1QkEsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztJQUNuQkMsT0FBTyxFQUFFO0VBQ1gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQUMsZUFFWVAsTUFBTTtBQUFBIn0=