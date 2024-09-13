"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.parse-float.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const RotateArrow = _ref => {
  let {
    height = "24",
    width = "24",
    rotate = "0"
  } = _ref;
  const numericHeight = parseFloat(height);
  const numericWidth = parseFloat(width);
  const transformOrigin = "".concat(numericWidth / 2, "px ").concat(numericHeight / 2, "px");
  return /*#__PURE__*/_react.default.createElement("svg", {
    height: height,
    width: width,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      transform: "rotate(".concat(rotate, "deg)"),
      transformOrigin: transformOrigin
    }
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 5V19",
    stroke: "currentColor",
    "stroke-width": "1",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8 9L12 5L16 9",
    stroke: "currentColor",
    "stroke-width": "1",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = exports.default = RotateArrow;