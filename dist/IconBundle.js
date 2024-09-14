"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Uparrow = exports.Unlock = exports.Trash = exports.Toparrow = exports.Search = exports.RightArrow2 = exports.RightArrow = exports.Profile = exports.Plus = exports.Minus = exports.Menu = exports.Lock = exports.Location = exports.Leftarrow2 = exports.LeftArrow = exports.Home = exports.Heart = exports.Downarrow = exports.Delete = exports.Close3 = exports.Close2 = exports.Close = exports.Checkmark = exports.BottomArrow = void 0;
require("core-js/modules/es.object.assign.js");
var _react = _interopRequireDefault(require("react"));
var _IconComponent = _interopRequireDefault(require("./IconComponent"));
var _Toparrow = _interopRequireDefault(require("./svg icons/Toparrow.svg"));
var _LeftArrow = _interopRequireDefault(require("./svg icons/LeftArrow.svg"));
var _RightArrow = _interopRequireDefault(require("./svg icons/RightArrow.svg"));
var _BottomArrow = _interopRequireDefault(require("./svg icons/BottomArrow.svg"));
var _location = _interopRequireDefault(require("./svg icons/location.svg"));
var _Checkmark = _interopRequireDefault(require("./svg icons/Checkmark.svg"));
var _close = _interopRequireDefault(require("./svg icons/close.svg"));
var _close2 = _interopRequireDefault(require("./svg icons/close2.svg"));
var _Close = _interopRequireDefault(require("./svg icons/Close3.svg"));
var _delete = _interopRequireDefault(require("./svg icons/delete.svg"));
var _Downarrow = _interopRequireDefault(require("./svg icons/Downarrow.svg"));
var _Heart = _interopRequireDefault(require("./svg icons/Heart.svg"));
var _Home = _interopRequireDefault(require("./svg icons/Home.svg"));
var _Leftarrow = _interopRequireDefault(require("./svg icons/Leftarrow2.svg"));
var _Lock = _interopRequireDefault(require("./svg icons/Lock.svg"));
var _Menu = _interopRequireDefault(require("./svg icons/Menu.svg"));
var _Minus = _interopRequireDefault(require("./svg icons/Minus.svg"));
var _Plus = _interopRequireDefault(require("./svg icons/Plus.svg"));
var _Profile = _interopRequireDefault(require("./svg icons/Profile.svg"));
var _Rightarrow = _interopRequireDefault(require("./svg icons/Rightarrow2.svg"));
var _Search = _interopRequireDefault(require("./svg icons/Search.svg"));
var _Trash = _interopRequireDefault(require("./svg icons/Trash.svg"));
var _Unlock = _interopRequireDefault(require("./svg icons/Unlock.svg"));
var _Uparrow = _interopRequireDefault(require("./svg icons/Uparrow.svg"));
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
const Checkmark = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref6 => {
      let {
        height,
        width
      } = _ref6;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Checkmark.default,
        alt: "Location",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Checkmark = Checkmark;
const Close = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref7 => {
      let {
        height,
        width
      } = _ref7;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _close.default,
        alt: "Close",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Close = Close;
const Close2 = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref8 => {
      let {
        height,
        width
      } = _ref8;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _close2.default,
        alt: "Close2",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Close2 = Close2;
const Close3 = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref9 => {
      let {
        height,
        width
      } = _ref9;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Close.default,
        alt: "Close3",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Close3 = Close3;
const Delete = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref10 => {
      let {
        height,
        width
      } = _ref10;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _delete.default,
        alt: "Delete",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Delete = Delete;
const Downarrow = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref11 => {
      let {
        height,
        width
      } = _ref11;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Downarrow.default,
        alt: "Downarrow",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Downarrow = Downarrow;
const Heart = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref12 => {
      let {
        height,
        width
      } = _ref12;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Heart.default,
        alt: "Heart",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Heart = Heart;
const Home = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref13 => {
      let {
        height,
        width
      } = _ref13;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Home.default,
        alt: "Home",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Home = Home;
const Leftarrow2 = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref14 => {
      let {
        height,
        width
      } = _ref14;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Leftarrow.default,
        alt: "Leftarrow2",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Leftarrow2 = Leftarrow2;
const Lock = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref15 => {
      let {
        height,
        width
      } = _ref15;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Lock.default,
        alt: "Lock",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Lock = Lock;
const Menu = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref16 => {
      let {
        height,
        width
      } = _ref16;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Menu.default,
        alt: "Menu",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Menu = Menu;
const Minus = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref17 => {
      let {
        height,
        width
      } = _ref17;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Minus.default,
        alt: "Minus",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Minus = Minus;
const Plus = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref18 => {
      let {
        height,
        width
      } = _ref18;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Plus.default,
        alt: "Plus",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Plus = Plus;
const Profile = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref19 => {
      let {
        height,
        width
      } = _ref19;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Profile.default,
        alt: "Profile",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Profile = Profile;
const RightArrow2 = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref20 => {
      let {
        height,
        width
      } = _ref20;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Rightarrow.default,
        alt: "RightArrow2",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.RightArrow2 = RightArrow2;
const Search = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref21 => {
      let {
        height,
        width
      } = _ref21;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Search.default,
        alt: "Search",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Search = Search;
const Trash = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref22 => {
      let {
        height,
        width
      } = _ref22;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Trash.default,
        alt: "Trash",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Trash = Trash;
const Unlock = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref23 => {
      let {
        height,
        width
      } = _ref23;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Unlock.default,
        alt: "Unlock",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Unlock = Unlock;
const Uparrow = props => {
  return /*#__PURE__*/_react.default.createElement(_IconComponent.default, _extends({
    SvgComponent: _ref24 => {
      let {
        height,
        width
      } = _ref24;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _Uparrow.default,
        alt: "Uparrow",
        height: height,
        width: width
      });
    }
  }, props));
};
exports.Uparrow = Uparrow;