"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkUploadImage = exports.checkImageFormat = exports.checkIfMoveExistByName = exports.checkIfMoveExistById = exports.checkIfCategoryExist = void 0;
var _models = require("../database/models");
var _cloudinary = _interopRequireDefault(require("cloudinary"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var checkIfMoveExistByName = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var name, movie;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = req.body.name.toLowerCase();
            _context.next = 3;
            return _models.Movie.findOne({
              where: {
                name: name
              }
            });
          case 3:
            movie = _context.sent;
            if (!movie) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return", res.status(409).json({
              message: "Movie already exist"
            }));
          case 6:
            next();
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function checkIfMoveExistByName(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.checkIfMoveExistByName = checkIfMoveExistByName;
var checkIfMoveExistById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var id, movie;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _models.Movie.findOne({
              where: {
                id: id
              }
            });
          case 3:
            movie = _context2.sent;
            if (movie) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return", res.status(404).json({
              message: "Movie doesn't exist,please contact admin for support"
            }));
          case 6:
            req.movie = movie;
            next();
          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function checkIfMoveExistById(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.checkIfMoveExistById = checkIfMoveExistById;
var checkUploadImage = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
    var file;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (req.files) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return", res.status(400).json({
              message: "Please upload movie image"
            }));
          case 2:
            file = req.files.image;
            _cloudinary["default"].uploader.upload(file.tempFilePath, /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(results, err) {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (err) {
                          res.status(500).json({
                            message: "Unable to upload image",
                            error: err
                          });
                        }
                        req.results = results;
                        next();
                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));
              return function (_x10, _x11) {
                return _ref4.apply(this, arguments);
              };
            }());
          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function checkUploadImage(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
exports.checkUploadImage = checkUploadImage;
var checkImageFormat = function checkImageFormat() {
  for (var _len = arguments.length, extensions = new Array(_len), _key = 0; _key < _len; _key++) {
    extensions[_key] = arguments[_key];
  }
  return function (req, res, next) {
    var results = req.results;
    if (!extensions.includes(results.format)) {
      return res.status(405).json({
        message: "Only ".concat(extensions, " format are allowed")
      });
    }
    req.results = results;
    next();
  };
};
exports.checkImageFormat = checkImageFormat;
var checkIfCategoryExist = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
    var category_id, categories, categories_input, categories_res, i, j, filteredId;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            category_id = req.body.category_id;
            _context5.next = 3;
            return _models.Category.findAll({
              where: {
                id: category_id
              }
            });
          case 3:
            categories = _context5.sent;
            if (!(!categories || category_id.length != categories.length)) {
              _context5.next = 11;
              break;
            }
            categories_input = [];
            categories_res = [];
            for (i = 0; i < category_id.length; i++) {
              categories_input.push(parseInt(category_id[i]));
            }
            for (j = 0; j < categories.length; j++) {
              categories_res.push(categories[j].id);
            }
            filteredId = categories_input.filter(function (item) {
              return categories_res.indexOf(item) < 0;
            });
            return _context5.abrupt("return", res.status(404).json({
              message: "Category with ID ".concat(filteredId, " doesn't exist, please contact admin for support")
            }));
          case 11:
            req.categories = categories;
            next();
          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function checkIfCategoryExist(_x12, _x13, _x14) {
    return _ref5.apply(this, arguments);
  };
}();
exports.checkIfCategoryExist = checkIfCategoryExist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjaGVja0lmTW92ZUV4aXN0QnlOYW1lIiwicmVxIiwicmVzIiwibmV4dCIsIm5hbWUiLCJib2R5IiwidG9Mb3dlckNhc2UiLCJNb3ZpZSIsImZpbmRPbmUiLCJ3aGVyZSIsIm1vdmllIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjaGVja0lmTW92ZUV4aXN0QnlJZCIsImlkIiwicGFyYW1zIiwiY2hlY2tVcGxvYWRJbWFnZSIsImZpbGVzIiwiZmlsZSIsImltYWdlIiwiY2xvYWRpbmFyeSIsInVwbG9hZGVyIiwidXBsb2FkIiwidGVtcEZpbGVQYXRoIiwicmVzdWx0cyIsImVyciIsImVycm9yIiwiY2hlY2tJbWFnZUZvcm1hdCIsImV4dGVuc2lvbnMiLCJpbmNsdWRlcyIsImZvcm1hdCIsImNoZWNrSWZDYXRlZ29yeUV4aXN0IiwiY2F0ZWdvcnlfaWQiLCJDYXRlZ29yeSIsImZpbmRBbGwiLCJjYXRlZ29yaWVzIiwibGVuZ3RoIiwiY2F0ZWdvcmllc19pbnB1dCIsImNhdGVnb3JpZXNfcmVzIiwiaSIsInB1c2giLCJwYXJzZUludCIsImoiLCJmaWx0ZXJlZElkIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4T2YiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZS9tb3ZpZS5taWRkbGV3YXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vdmllLCBDYXRlZ29yeSB9IGZyb20gXCIuLi9kYXRhYmFzZS9tb2RlbHNcIjtcbmltcG9ydCBjbG9hZGluYXJ5IGZyb20gXCJjbG91ZGluYXJ5XCI7XG5cbmV4cG9ydCBjb25zdCBjaGVja0lmTW92ZUV4aXN0QnlOYW1lID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IG5hbWUgPSByZXEuYm9keS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IG1vdmllID0gYXdhaXQgTW92aWUuZmluZE9uZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIG5hbWUsXG4gICAgfSxcbiAgfSk7XG4gIGlmIChtb3ZpZSkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7XG4gICAgICBtZXNzYWdlOiBcIk1vdmllIGFscmVhZHkgZXhpc3RcIixcbiAgICB9KTtcbiAgfVxuICBuZXh0KCk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hlY2tJZk1vdmVFeGlzdEJ5SWQgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcbiAgY29uc3QgbW92aWUgPSBhd2FpdCBNb3ZpZS5maW5kT25lKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQsXG4gICAgfSxcbiAgfSk7XG4gIGlmICghbW92aWUpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe1xuICAgICAgbWVzc2FnZTogXCJNb3ZpZSBkb2Vzbid0IGV4aXN0LHBsZWFzZSBjb250YWN0IGFkbWluIGZvciBzdXBwb3J0XCIsXG4gICAgfSk7XG4gIH1cbiAgcmVxLm1vdmllID0gbW92aWU7XG4gIG5leHQoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja1VwbG9hZEltYWdlID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGlmICghcmVxLmZpbGVzKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIHVwbG9hZCBtb3ZpZSBpbWFnZVwiLFxuICAgIH0pO1xuICB9XG4gIGNvbnN0IGZpbGUgPSByZXEuZmlsZXMuaW1hZ2U7XG4gIGNsb2FkaW5hcnkudXBsb2FkZXIudXBsb2FkKGZpbGUudGVtcEZpbGVQYXRoLCBhc3luYyAocmVzdWx0cywgZXJyKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICBtZXNzYWdlOiBcIlVuYWJsZSB0byB1cGxvYWQgaW1hZ2VcIixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXEucmVzdWx0cyA9IHJlc3VsdHM7XG4gICAgbmV4dCgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja0ltYWdlRm9ybWF0ID0gKC4uLmV4dGVuc2lvbnMpID0+IHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSByZXEucmVzdWx0cztcbiAgICBpZiAoIWV4dGVuc2lvbnMuaW5jbHVkZXMocmVzdWx0cy5mb3JtYXQpKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oe1xuICAgICAgICBtZXNzYWdlOiBgT25seSAke2V4dGVuc2lvbnN9IGZvcm1hdCBhcmUgYWxsb3dlZGAsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmVxLnJlc3VsdHMgPSByZXN1bHRzO1xuICAgIG5leHQoKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja0lmQ2F0ZWdvcnlFeGlzdCA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCB7IGNhdGVnb3J5X2lkIH0gPSByZXEuYm9keTtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IENhdGVnb3J5LmZpbmRBbGwoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogY2F0ZWdvcnlfaWQsXG4gICAgfSxcbiAgfSk7XG4gIGlmICghY2F0ZWdvcmllcyB8fCBjYXRlZ29yeV9pZC5sZW5ndGggIT0gY2F0ZWdvcmllcy5sZW5ndGgpIHtcbiAgICBsZXQgY2F0ZWdvcmllc19pbnB1dCA9IFtdO1xuICAgIGxldCBjYXRlZ29yaWVzX3JlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlfaWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhdGVnb3JpZXNfaW5wdXQucHVzaChwYXJzZUludChjYXRlZ29yeV9pZFtpXSkpO1xuICAgIH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNhdGVnb3JpZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNhdGVnb3JpZXNfcmVzLnB1c2goY2F0ZWdvcmllc1tqXS5pZCk7XG4gICAgfVxuICAgIGNvbnN0IGZpbHRlcmVkSWQgPSBjYXRlZ29yaWVzX2lucHV0LmZpbHRlcihcbiAgICAgIChpdGVtKSA9PiBjYXRlZ29yaWVzX3Jlcy5pbmRleE9mKGl0ZW0pIDwgMFxuICAgICk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6IGBDYXRlZ29yeSB3aXRoIElEICR7ZmlsdGVyZWRJZH0gZG9lc24ndCBleGlzdCwgcGxlYXNlIGNvbnRhY3QgYWRtaW4gZm9yIHN1cHBvcnRgLFxuICAgIH0pO1xuICB9XG4gIHJlcS5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcbiAgbmV4dCgpO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFBb0M7QUFBQSwrQ0FBcEM7QUFBQTtBQUFBO0FBRU8sSUFBTUEsc0JBQXNCO0VBQUEsc0VBQUcsaUJBQU9DLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUNuREMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxXQUFXLEVBQUU7WUFBQTtZQUFBLE9BQ3BCQyxhQUFLLENBQUNDLE9BQU8sQ0FBQztjQUNoQ0MsS0FBSyxFQUFFO2dCQUNMTCxJQUFJLEVBQUpBO2NBQ0Y7WUFDRixDQUFDLENBQUM7VUFBQTtZQUpJTSxLQUFLO1lBQUEsS0FLUEEsS0FBSztjQUFBO2NBQUE7WUFBQTtZQUFBLGlDQUNBUixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2NBQzFCQyxPQUFPLEVBQUU7WUFDWCxDQUFDLENBQUM7VUFBQTtZQUVKVixJQUFJLEVBQUU7VUFBQztVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUNSO0VBQUEsZ0JBYllILHNCQUFzQjtJQUFBO0VBQUE7QUFBQSxHQWFsQztBQUFDO0FBRUssSUFBTWMsb0JBQW9C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