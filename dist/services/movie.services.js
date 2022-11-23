"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMovie = exports.searchMovies = exports.getMovieCategories = exports.getMovieById = exports.getAllMovies = exports.deleteMovie = exports.addMovie = void 0;
var _models = require("../database/models");
var _sequelize = require("sequelize");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var addMovie = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(movie) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models.Movie.create(movie);
          case 2:
            return _context.abrupt("return", _context.sent);
          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function addMovie(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.addMovie = addMovie;
var getAllMovies = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(limit, offset) {
    var movies;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _models.Movie.findAndCountAll({
              limit: limit,
              offset: offset,
              order: [["createdAt", "DESC"]]
            });
          case 2:
            movies = _context2.sent;
            return _context2.abrupt("return", movies);
          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function getAllMovies(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAllMovies = getAllMovies;
var searchMovies = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(limit, offset, q) {
    var movies;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _models.Movie.findAndCountAll({
              limit: limit,
              offset: offset,
              where: {
                name: _defineProperty({}, _sequelize.Op.like, "%".concat(q, "%"))
              },
              order: [["createdAt", "DESC"]]
            });
          case 2:
            movies = _context3.sent;
            return _context3.abrupt("return", movies);
          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function searchMovies(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.searchMovies = searchMovies;
var getMovieById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
    var movie;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _models.Movie.findOne({
              where: {
                id: id
              }
            });
          case 2:
            movie = _context4.sent;
            return _context4.abrupt("return", movie);
          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function getMovieById(_x7) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getMovieById = getMovieById;
var updateMovie = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(updated, id) {
    var movie;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _models.Movie.update(updated, {
              where: {
                id: id
              }
            });
          case 2:
            movie = _context5.sent;
            return _context5.abrupt("return", movie);
          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function updateMovie(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateMovie = updateMovie;
var deleteMovie = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
    var movie;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _models.Movie.destroy({
              where: {
                id: id
              }
            });
          case 2:
            movie = _context6.sent;
            return _context6.abrupt("return", movie);
          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function deleteMovie(_x10) {
    return _ref6.apply(this, arguments);
  };
}();
exports.deleteMovie = deleteMovie;
var getMovieCategories = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _models.Category.findAll({
              where: {
                id: id
              }
            });
          case 2:
            return _context7.abrupt("return", _context7.sent);
          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return function getMovieCategories(_x11) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getMovieCategories = getMovieCategories;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhZGRNb3ZpZSIsIm1vdmllIiwiTW92aWUiLCJjcmVhdGUiLCJnZXRBbGxNb3ZpZXMiLCJsaW1pdCIsIm9mZnNldCIsImZpbmRBbmRDb3VudEFsbCIsIm9yZGVyIiwibW92aWVzIiwic2VhcmNoTW92aWVzIiwicSIsIndoZXJlIiwibmFtZSIsIk9wIiwibGlrZSIsImdldE1vdmllQnlJZCIsImlkIiwiZmluZE9uZSIsInVwZGF0ZU1vdmllIiwidXBkYXRlZCIsInVwZGF0ZSIsImRlbGV0ZU1vdmllIiwiZGVzdHJveSIsImdldE1vdmllQ2F0ZWdvcmllcyIsIkNhdGVnb3J5IiwiZmluZEFsbCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9tb3ZpZS5zZXJ2aWNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb3ZpZSxDYXRlZ29yeSB9IGZyb20gXCIuLi9kYXRhYmFzZS9tb2RlbHNcIjtcbmltcG9ydCB7IE9wIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuXG5leHBvcnQgY29uc3QgYWRkTW92aWUgPSBhc3luYyAobW92aWUpID0+IHtcbiAgcmV0dXJuIGF3YWl0IE1vdmllLmNyZWF0ZShtb3ZpZSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsTW92aWVzID0gYXN5bmMgKGxpbWl0LCBvZmZzZXQpID0+IHtcbiAgY29uc3QgbW92aWVzID0gYXdhaXQgTW92aWUuZmluZEFuZENvdW50QWxsKHtcbiAgICBsaW1pdCxcbiAgICBvZmZzZXQsXG4gICAgb3JkZXI6IFtbXCJjcmVhdGVkQXRcIiwgXCJERVNDXCJdXSxcbiAgfSk7XG4gIHJldHVybiBtb3ZpZXM7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoTW92aWVzID0gYXN5bmMgKGxpbWl0LCBvZmZzZXQsIHEpID0+IHtcbiAgY29uc3QgbW92aWVzID0gYXdhaXQgTW92aWUuZmluZEFuZENvdW50QWxsKHtcbiAgICBsaW1pdCxcbiAgICBvZmZzZXQsXG4gICAgd2hlcmU6IHtcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgW09wLmxpa2VdOiBgJSR7cX0lYCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvcmRlcjogW1tcImNyZWF0ZWRBdFwiLCBcIkRFU0NcIl1dLFxuICB9KTtcbiAgcmV0dXJuIG1vdmllcztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZUJ5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgbW92aWUgPSBhd2FpdCBNb3ZpZS5maW5kT25lKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiBtb3ZpZTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVNb3ZpZSA9IGFzeW5jICh1cGRhdGVkLCBpZCkgPT4ge1xuICBjb25zdCBtb3ZpZSA9IGF3YWl0IE1vdmllLnVwZGF0ZSh1cGRhdGVkLCB7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gbW92aWU7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTW92aWUgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgbW92aWUgPSBhd2FpdCBNb3ZpZS5kZXN0cm95KHtcbiAgICB3aGVyZToge1xuICAgICAgaWQsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiBtb3ZpZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZUNhdGVnb3JpZXMgPSBhc3luYyAoaWQpID0+IHtcbiAgcmV0dXJuIGF3YWl0IENhdGVnb3J5LmZpbmRBbGwoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogaWQsXG4gICAgfSxcbiAgfSk7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUErQjtBQUFBLCtDQUEvQjtBQUFBO0FBQUE7QUFFTyxJQUFNQSxRQUFRO0VBQUEsc0VBQUcsaUJBQU9DLEtBQUs7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO1lBQUEsT0FDckJDLGFBQUssQ0FBQ0MsTUFBTSxDQUFDRixLQUFLLENBQUM7VUFBQTtZQUFB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