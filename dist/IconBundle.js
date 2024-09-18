"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Uparrow = exports.Unlock = exports.Triangle = exports.Trash = exports.Trapezoid = exports.Star = exports.Square = exports.Search = exports.RightArrow2 = exports.Rectangle = exports.Profile = exports.Plus = exports.Pentagon = exports.Parallelogram = exports.Minus = exports.Menu = exports.Lock = exports.Leftarrow2 = exports.Home = exports.Hexagon = exports.Heart = exports.Ellipse = exports.Downarrow = exports.Delete = exports.Close3 = exports.Close2 = exports.Close = exports.Circle = exports.Checkmark = void 0;
var _react = _interopRequireDefault(require("react"));
var _Checkmark = require("./svg icons/Checkmark.svg");
var _close = require("./svg icons/close.svg");
var _close2 = require("./svg icons/close2.svg");
var _Close = require("./svg icons/Close3.svg");
var _delete = require("./svg icons/delete.svg");
var _Downarrow = require("./svg icons/Downarrow.svg");
var _Heart = require("./svg icons/Heart.svg");
var _Home = require("./svg icons/Home.svg");
var _Leftarrow = require("./svg icons/Leftarrow2.svg");
var _Lock = require("./svg icons/Lock.svg");
var _Menu = require("./svg icons/Menu.svg");
var _Minus = require("./svg icons/Minus.svg");
var _Plus = require("./svg icons/Plus.svg");
var _Profile = require("./svg icons/Profile.svg");
var _Rightarrow = require("./svg icons/Rightarrow2.svg");
var _Search = require("./svg icons/Search.svg");
var _Trash = require("./svg icons/Trash.svg");
var _Unlock = require("./svg icons/Unlock.svg");
var _Uparrow = require("./svg icons/Uparrow.svg");
var _circle = require("./svg icons/Shapes/circle.svg");
var _ellipse = require("./svg icons/Shapes/ellipse.svg");
var _Hexagon = require("./svg icons/Shapes/Hexagon.svg");
var _Parallelogram = require("./svg icons/Shapes/Parallelogram.svg");
var _pentagon = require("./svg icons/Shapes/pentagon.svg");
var _rectangle = require("./svg icons/Shapes/rectangle.svg");
var _square = require("./svg icons/Shapes/square.svg");
var _star = require("./svg icons/Shapes/star.svg");
var _trapezoid = require("./svg icons/Shapes/trapezoid.svg");
var _triangle = require("./svg icons/Shapes/triangle.svg");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Circle = _ref => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_circle.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Circle = Circle;
const Checkmark = _ref2 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_Checkmark.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Checkmark = Checkmark;
const Close = _ref3 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_close.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Close = Close;
const Close2 = _ref4 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement(_close2.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Close2 = Close2;
const Close3 = _ref5 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement(_Close.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Close3 = Close3;
const Delete = _ref6 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref6;
  return /*#__PURE__*/_react.default.createElement(_delete.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Delete = Delete;
const Downarrow = _ref7 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref7;
  return /*#__PURE__*/_react.default.createElement(_Downarrow.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Downarrow = Downarrow;
const Heart = _ref8 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref8;
  return /*#__PURE__*/_react.default.createElement(_Heart.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Heart = Heart;
const Home = _ref9 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref9;
  return /*#__PURE__*/_react.default.createElement(_Home.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Home = Home;
const Leftarrow2 = _ref10 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref10;
  return /*#__PURE__*/_react.default.createElement(_Leftarrow.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Leftarrow2 = Leftarrow2;
const Lock = _ref11 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref11;
  return /*#__PURE__*/_react.default.createElement(_Lock.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Lock = Lock;
const Menu = _ref12 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref12;
  return /*#__PURE__*/_react.default.createElement(_Menu.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Menu = Menu;
const Minus = _ref13 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref13;
  return /*#__PURE__*/_react.default.createElement(_Minus.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Minus = Minus;
const Plus = _ref14 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref14;
  return /*#__PURE__*/_react.default.createElement(_Plus.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Plus = Plus;
const Profile = _ref15 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref15;
  return /*#__PURE__*/_react.default.createElement(_Profile.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Profile = Profile;
const RightArrow2 = _ref16 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref16;
  return /*#__PURE__*/_react.default.createElement(_Rightarrow.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.RightArrow2 = RightArrow2;
const Search = _ref17 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref17;
  return /*#__PURE__*/_react.default.createElement(_Search.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Search = Search;
const Trash = _ref18 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref18;
  return /*#__PURE__*/_react.default.createElement(_Trash.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Trash = Trash;
const Unlock = _ref19 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref19;
  return /*#__PURE__*/_react.default.createElement(_Unlock.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Unlock = Unlock;
const Uparrow = _ref20 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref20;
  return /*#__PURE__*/_react.default.createElement(_Uparrow.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Uparrow = Uparrow;
const Ellipse = _ref21 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref21;
  return /*#__PURE__*/_react.default.createElement(_ellipse.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Ellipse = Ellipse;
const Hexagon = _ref22 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref22;
  return /*#__PURE__*/_react.default.createElement(_Hexagon.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Hexagon = Hexagon;
const Parallelogram = _ref23 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref23;
  return /*#__PURE__*/_react.default.createElement(_Parallelogram.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Parallelogram = Parallelogram;
const Pentagon = _ref24 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref24;
  return /*#__PURE__*/_react.default.createElement(_pentagon.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Pentagon = Pentagon;
const Rectangle = _ref25 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref25;
  return /*#__PURE__*/_react.default.createElement(_rectangle.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Rectangle = Rectangle;
const Square = _ref26 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref26;
  return /*#__PURE__*/_react.default.createElement(_square.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Square = Square;
const Star = _ref27 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref27;
  return /*#__PURE__*/_react.default.createElement(_star.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Star = Star;
const Trapezoid = _ref28 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref28;
  return /*#__PURE__*/_react.default.createElement(_trapezoid.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Trapezoid = Trapezoid;
const Triangle = _ref29 => {
  let {
    height = "24",
    width = "24",
    stroke = "black",
    strokeWidth = "3",
    fill = "none",
    opacity = "1"
  } = _ref29;
  return /*#__PURE__*/_react.default.createElement(_triangle.ReactComponent, {
    height: height,
    width: width,
    stroke: stroke,
    fill: fill,
    strokeWidth: strokeWidth,
    opacity: opacity
  });
};
exports.Triangle = Triangle;