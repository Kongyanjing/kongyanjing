import createReactContext from '@ant-design/create-react-context';
import defaultRenderEmpty from './renderEmpty';
export var ConfigContext = createReactContext({
  // We provide a default function for Context without provider
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return "ant-".concat(suffixCls);
  },
  renderEmpty: defaultRenderEmpty
});
export var ConfigConsumer = ConfigContext.Consumer;
//# sourceMappingURL=context.js.map
