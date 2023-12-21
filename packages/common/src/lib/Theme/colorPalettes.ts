import * as colors from 'tailwindcss/colors';

type ColorPalettesType = typeof colors & {
  primary: string;
};

export const colorPalettes: ColorPalettesType = {
  ...colors,
  primary: colors.orange['500'],
};

export default colorPalettes;
