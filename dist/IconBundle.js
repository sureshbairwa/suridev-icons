"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toparrow = exports.RightArrow = exports.Location = exports.LeftArrow = exports.BottomArrow = void 0;
require("core-js/modules/es.object.assign.js");
var _react = _interopRequireDefault(require("react"));
var _IconComponent = _interopRequireDefault(require("./IconComponent"));
var _Toparrow = _interopRequireDefault(require("./svg icons/Toparrow.svg"));
var _LeftArrow = _interopRequireDefault(require("./svg icons/LeftArrow.svg"));
var _RightArrow = _interopRequireDefault(require("./svg icons/RightArrow.svg"));
var _BottomArrow = _interopRequireDefault(require("./svg icons/BottomArrow.svg"));
var _location = _interopRequireDefault(require("./svg icons/location.svg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } // Fixed from 'IcomComponent' to 'IconComponent'
const Toparrow = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref => {
      let {
        height,
        width
      } = _ref;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Toparrow.default,
        alt: "Toparrow",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Toparrow = Toparrow;
const LeftArrow = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref2 => {
      let {
        height,
        width
      } = _ref2;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _LeftArrow.default,
        alt: "LeftArrow",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.LeftArrow = LeftArrow;
const RightArrow = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref3 => {
      let {
        height,
        width
      } = _ref3;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _RightArrow.default,
        alt: "RightArrow",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.RightArrow = RightArrow;
const BottomArrow = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref4 => {
      let {
        height,
        width
      } = _ref4;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _BottomArrow.default,
        alt: "BottomArrow",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.BottomArrow = BottomArrow;
const Location = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref5 => {
      let {
        height,
        width
      } = _ref5;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _location.default,
        alt: "Location",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Location = Location;