"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toparrow = exports.RightArrow = exports.Location = exports.LeftArrow = exports.BottomArrow = void 0;
require("core-js/modules/es.object.assign.js");
var _react = _interopRequireDefault(require("react"));
var _IconComponent = _interopRequireDefault(require("./IconComponent"));
var _Toparrow = require("./svg icons/Toparrow.svg");
var _LeftArrow = require("./svg icons/LeftArrow.svg");
var _RightArrow = require("./svg icons/RightArrow.svg");
var _BottomArrow = require("./svg icons/BottomArrow.svg");
var _location = require("./svg icons/location.svg");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Toparrow = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _Toparrow.ReactComponent
  }, props));
};
exports.Toparrow = Toparrow;
const LeftArrow = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _LeftArrow.ReactComponent
  }, props));
};
exports.LeftArrow = LeftArrow;
const RightArrow = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _RightArrow.ReactComponent
  }, props));
};
exports.RightArrow = RightArrow;
const BottomArrow = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _BottomArrow.ReactComponent
  }, props));
};
exports.BottomArrow = BottomArrow;
const Location = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _location.ReactComponent
  }, props));
};
exports.Location = Location;