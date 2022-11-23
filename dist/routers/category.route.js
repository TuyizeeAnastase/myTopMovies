"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _category = _interopRequireDefault(require("../controllers/category.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.route("/").get(_category["default"].getCategories);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwicm91dGUiLCJnZXQiLCJjYXRlZ29yeUNvbnRyb2xsZXIiLCJnZXRDYXRlZ29yaWVzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcnMvY2F0ZWdvcnkucm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjYXRlZ29yeUNvbnRyb2xsZXIgZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2NhdGVnb3J5LmNvbnRyb2xsZXJcIjtcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLnJvdXRlKFwiL1wiKS5nZXQoY2F0ZWdvcnlDb250cm9sbGVyLmdldENhdGVnb3JpZXMpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBb0U7QUFFcEUsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDQyxNQUFNLEVBQUU7QUFFL0JGLE1BQU0sQ0FBQ0csS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLENBQUNDLG9CQUFrQixDQUFDQyxhQUFhLENBQUM7QUFBQyxlQUV6Q04sTUFBTTtBQUFBIn0=