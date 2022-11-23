"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movieControllers = exports["default"] = void 0;
var _movie = require("../services/movie.services");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var movieControllers = /*#__PURE__*/function () {
  function movieControllers() {
    _classCallCheck(this, movieControllers);
  }
  _createClass(movieControllers, [{
    key: "getMovies",
    value: function () {
      var _getMovies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
        var movies, q;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                q = req.query.q;
                if (!q) {
                  _context.next = 8;
                  break;
                }
                _context.next = 5;
                return (0, _movie.searchMovies)(q.toLowerCase());
              case 5:
                movies = _context.sent;
                _context.next = 11;
                break;
              case 8:
                _context.next = 10;
                return (0, _movie.getAllMovies)();
              case 10:
                movies = _context.sent;
              case 11:
                return _context.abrupt("return", res.status(200).json({
                  movies: movies
                }));
              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  message: "Error while getting movies",
                  error: _context.t0.message
                }));
              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
      }));
      function getMovies(_x, _x2) {
        return _getMovies.apply(this, arguments);
      }
      return getMovies;
    }()
  }, {
    key: "createMovie",
    value: function () {
      var _createMovie = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
        var results, category_id, data, newMovie;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                results = req.results;
                _context2.prev = 1;
                category_id = req.body.category_id.length > 1 ? req.body.category_id : [req.body.category_id];
                data = _objectSpread(_objectSpread({}, req.body), {}, {
                  category_id: category_id,
                  image: results.secure_url
                });
                _context2.next = 6;
                return (0, _movie.addMovie)(data);
              case 6:
                newMovie = _context2.sent;
                return _context2.abrupt("return", res.status(201).json({
                  newMovie: newMovie
                }));
              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](1);
                res.status(500).json({
                  message: "Unable to add new movie",
                  error: _context2.t0.message
                });
              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 10]]);
      }));
      function createMovie(_x3, _x4) {
        return _createMovie.apply(this, arguments);
      }
      return createMovie;
    }()
  }, {
    key: "getMovie",
    value: function () {
      var _getMovie = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
        var movie, categories;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                movie = req.movie;
                _context3.next = 4;
                return (0, _movie.getMovieCategories)(movie.category_id);
              case 4:
                categories = _context3.sent;
                if (movie) {
                  _context3.next = 7;
                  break;
                }
                return _context3.abrupt("return", res.status(404).json({
                  message: "Movie does not found"
                }));
              case 7:
                res.status(200).json({
                  movie: movie,
                  categories: categories
                });
                _context3.next = 13;
                break;
              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(500).json({
                  message: "Error while getting movies",
                  error: _context3.t0.message
                }));
              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }));
      function getMovie(_x5, _x6) {
        return _getMovie.apply(this, arguments);
      }
      return getMovie;
    }()
  }, {
    key: "updatingMovieController",
    value: function () {
      var _updatingMovieController = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
        var movie;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                movie = req.movie;
                _context4.prev = 1;
                _context4.next = 4;
                return (0, _movie.updateMovie)(_objectSpread({}, req.body), movie.id);
              case 4:
                return _context4.abrupt("return", res.status(200).json(_objectSpread({
                  movie: movie.id
                }, req.body)));
              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](1);
                return _context4.abrupt("return", res.status(500).json({
                  message: "Error while updating movie",
                  error: _context4.t0.message
                }));
              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 7]]);
      }));
      function updatingMovieController(_x7, _x8) {
        return _updatingMovieController.apply(this, arguments);
      }
      return updatingMovieController;
    }()
  }, {
    key: "deltingMovieController",
    value: function () {
      var _deltingMovieController = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
        var movie;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                movie = req.movie;
                _context5.prev = 1;
                _context5.next = 4;
                return (0, _movie.deleteMovie)(movie.id);
              case 4:
                return _context5.abrupt("return", res.status(200).json({
                  message: "Movie has been deleted"
                }));
              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](1);
                return _context5.abrupt("return", res.status(500).json({
                  message: "Error while deleting movie",
                  error: _context5.t0.message
                }));
              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 7]]);
      }));
      function deltingMovieController(_x9, _x10) {
        return _deltingMovieController.apply(this, arguments);
      }
      return deltingMovieController;
    }()
  }]);
  return movieControllers;
}();
exports.movieControllers = movieControllers;
var movieController = new movieControllers();
var _default = movieController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb3ZpZUNvbnRyb2xsZXJzIiwicmVxIiwicmVzIiwicSIsInF1ZXJ5Iiwic2VhcmNoTW92aWVzIiwidG9Mb3dlckNhc2UiLCJtb3ZpZXMiLCJnZXRBbGxNb3ZpZXMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIiwicmVzdWx0cyIsImNhdGVnb3J5X2lkIiwiYm9keSIsImxlbmd0aCIsImRhdGEiLCJpbWFnZSIsInNlY3VyZV91cmwiLCJhZGRNb3ZpZSIsIm5ld01vdmllIiwibW92aWUiLCJnZXRNb3ZpZUNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidXBkYXRlTW92aWUiLCJpZCIsImRlbGV0ZU1vdmllIiwibW92aWVDb250cm9sbGVyIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL21vdmllLmNvbnRyb2xsZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGdldEFsbE1vdmllcyxcbiAgc2VhcmNoTW92aWVzLFxuICBhZGRNb3ZpZSxcbiAgdXBkYXRlTW92aWUsXG4gIGRlbGV0ZU1vdmllLFxufSBmcm9tIFwiLi4vc2VydmljZXMvbW92aWUuc2VydmljZXNcIjtcbmltcG9ydCB7IGdldE1vdmllQ2F0ZWdvcmllcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9tb3ZpZS5zZXJ2aWNlc1wiO1xuXG5leHBvcnQgY2xhc3MgbW92aWVDb250cm9sbGVycyB7XG4gIGFzeW5jIGdldE1vdmllcyhyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICBsZXQgbW92aWVzO1xuICAgICAgY29uc3QgeyBxIH0gPSByZXEucXVlcnk7XG4gICAgICBpZiAocSkge1xuICAgICAgICBtb3ZpZXMgPSBhd2FpdCBzZWFyY2hNb3ZpZXMoKHEudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW92aWVzID0gYXdhaXQgZ2V0QWxsTW92aWVzKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBtb3ZpZXMsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogXCJFcnJvciB3aGlsZSBnZXR0aW5nIG1vdmllc1wiLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZU1vdmllKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IHJlcS5yZXN1bHRzO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYXRlZ29yeV9pZCA9XG4gICAgICAgIHJlcS5ib2R5LmNhdGVnb3J5X2lkLmxlbmd0aCA+IDFcbiAgICAgICAgICA/IHJlcS5ib2R5LmNhdGVnb3J5X2lkXG4gICAgICAgICAgOiBbcmVxLmJvZHkuY2F0ZWdvcnlfaWRdO1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgLi4ucmVxLmJvZHksXG4gICAgICAgIGNhdGVnb3J5X2lkOiBjYXRlZ29yeV9pZCxcbiAgICAgICAgaW1hZ2U6IHJlc3VsdHMuc2VjdXJlX3VybCxcbiAgICAgIH07XG4gICAgICBjb25zdCBuZXdNb3ZpZSA9IGF3YWl0IGFkZE1vdmllKGRhdGEpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcbiAgICAgICAgbmV3TW92aWUsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogXCJVbmFibGUgdG8gYWRkIG5ldyBtb3ZpZVwiLFxuICAgICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRNb3ZpZShyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBtb3ZpZSA9IHJlcS5tb3ZpZTtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBnZXRNb3ZpZUNhdGVnb3JpZXMobW92aWUuY2F0ZWdvcnlfaWQpO1xuICAgICAgaWYgKCFtb3ZpZSkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe1xuICAgICAgICAgIG1lc3NhZ2U6IFwiTW92aWUgZG9lcyBub3QgZm91bmRcIixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIG1vdmllLFxuICAgICAgICBjYXRlZ29yaWVzLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6IFwiRXJyb3Igd2hpbGUgZ2V0dGluZyBtb3ZpZXNcIixcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyB1cGRhdGluZ01vdmllQ29udHJvbGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IG1vdmllID0gcmVxLm1vdmllO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB1cGRhdGVNb3ZpZSh7IC4uLnJlcS5ib2R5IH0sIG1vdmllLmlkKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIG1vdmllOiBtb3ZpZS5pZCxcbiAgICAgICAgLi4ucmVxLmJvZHksXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogXCJFcnJvciB3aGlsZSB1cGRhdGluZyBtb3ZpZVwiLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGRlbHRpbmdNb3ZpZUNvbnRyb2xsZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCBtb3ZpZSA9IHJlcS5tb3ZpZTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGVsZXRlTW92aWUobW92aWUuaWQpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogXCJNb3ZpZSBoYXMgYmVlbiBkZWxldGVkXCIsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogXCJFcnJvciB3aGlsZSBkZWxldGluZyBtb3ZpZVwiLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBtb3ZpZUNvbnRyb2xsZXIgPSBuZXcgbW92aWVDb250cm9sbGVycygpO1xuZXhwb3J0IGRlZmF1bHQgbW92aWVDb250cm9sbGVyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFNb0M7QUFBQTtBQUFBO0FBQUEsK0NBTHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUWFBLGdCQUFnQjtFQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtNQUFBLDRFQUMzQixpQkFBZ0JDLEdBQUcsRUFBRUMsR0FBRztRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBR1pDLENBQUMsR0FBS0YsR0FBRyxDQUFDRyxLQUFLLENBQWZELENBQUM7Z0JBQUEsS0FDTEEsQ0FBQztrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUNZLElBQUFFLG1CQUFZLEVBQUVGLENBQUMsQ0FBQ0csV0FBVyxFQUFFLENBQUU7Y0FBQTtnQkFBOUNDLE1BQU07Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQSxPQUVTLElBQUFDLG1CQUFZLEdBQUU7Y0FBQTtnQkFBN0JELE1BQU07Y0FBQTtnQkFBQSxpQ0FFREwsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztrQkFDMUJILE1BQU0sRUFB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