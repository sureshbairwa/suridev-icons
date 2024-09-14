"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const IconComponent = _ref => {
  let {
    SvgComponent,
    height = "24",
    width = "24"
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(SvgComponent, {
    height: height,
    width: width
  });
};
var _default = exports.default = IconComponent;