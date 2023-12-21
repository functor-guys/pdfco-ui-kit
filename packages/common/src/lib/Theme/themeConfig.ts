import type { ThemeConfig } from 'antd';

import colorPalettes from './colorPalettes';

const themeConfig: ThemeConfig = {
  token: {
    // Breakpoints
    screenXS: 480,
    screenXSMin: 480,
    screenXSMax: 575,

    screenSM: 576,
    screenSMMin: 576,
    screenSMMax: 767,

    screenMD: 768,
    screenMDMin: 768,
    screenMDMax: 991,

    screenLG: 992,
    screenLGMin: 992,
    screenLGMax: 1199,

    screenXL: 1200,
    screenXLMin: 1200,
    screenXLMax: 1359,

    screenXXL: 1360,
    screenXXLMin: 1360,

    // Fonts
    fontSize: 16,

    // Colors
    colorPrimary: colorPalettes.orange['500'],
    colorLink: colorPalettes.orange['500'],
  },
};

export default themeConfig;
