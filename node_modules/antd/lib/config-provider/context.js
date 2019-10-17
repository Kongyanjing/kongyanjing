"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigConsumer = exports.ConfigContext = void 0;

var _createReactContext = _interopRequireDefault(require("@ant-design/create-react-context"));

var _renderEmpty = _interopRequireDefault(require("./renderEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ConfigContext = (0, _createReactContext["default"])({
  // We provide a default function for Context without provider
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return "ant-".concat(suffixCls);
  },
  renderEmpty: _renderEmpty["default"]
});
exports.ConfigContext = ConfigContext;
var ConfigConsumer = ConfigContext.Consumer;
exports.ConfigConsumer = ConfigConsumer;
//# sourceMappingURL=context.js.map
