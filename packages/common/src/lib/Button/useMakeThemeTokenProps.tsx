import { useMemo } from 'react';

import { ButtonProps } from './Button';
import colorPalettes from '../Theme/colorPalettes';

const useMakeThemeTokenProps = ({ variant }: ButtonProps) => {
  const themeTokenProps = useMemo(() => {
    const makeColorTextDisabled = (variant: ButtonProps['variant']) => {
      const mapping = {
        primary: colorPalettes.white,
        secondary: colorPalettes.neutral['300'],
      };

      const value = mapping[variant!];

      return value
        ? {
            colorTextDisabled: mapping[variant!],
          }
        : {};
    };

    const makeColorBgContainerDisabled = (variant: ButtonProps['variant']) => {
      const mapping = {
        primary: colorPalettes.neutral['500'],
        secondary: colorPalettes.white,
      };

      const value = mapping[variant!];

      return value
        ? {
            colorBgContainerDisabled: mapping[variant!],
          }
        : {};
    };

    return {
      ...makeColorTextDisabled(variant),
      ...makeColorBgContainerDisabled(variant),
    };
  }, [variant]);

  return {
    themeTokenProps,
  };
};

export default useMakeThemeTokenProps;
