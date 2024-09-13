"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import Toparrowicon from './svg icons/Toparrow.svg'

const Toparrow = _ref => {
  let {
    height = "24",
    width = "24"
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    height: height,
    width: width,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      transform: 'rotate(0deg)',
      transformOrigin: '12px 12px'
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
var _default = exports.default = Toparrow;