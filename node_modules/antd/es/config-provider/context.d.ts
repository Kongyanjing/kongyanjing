/// <reference types="react" />
import { RenderEmptyHandler } from './renderEmpty';
import { Locale } from '../locale-provider';
export interface CSPConfig {
    nonce?: string;
}
export interface ConfigConsumerProps {
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    rootPrefixCls?: string;
    getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
    renderEmpty: RenderEmptyHandler;
    csp?: CSPConfig;
    autoInsertSpaceInButton?: boolean;
    locale?: Locale;
    pageHeader?: {
        ghost: boolean;
    };
}
export declare const ConfigContext: import("@ant-design/create-react-context").Context<ConfigConsumerProps>;
export declare const ConfigConsumer: import("react").ComponentClass<import("@ant-design/create-react-context").ConsumerProps<ConfigConsumerProps>, any>;
