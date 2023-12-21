import { useMemo } from 'react';

import { ButtonProps } from './Button';
import colorPalettes from '../Theme/colorPalettes';

const useMakeThemeButtonProps = ({ variant, type, ...props }: ButtonProps) => {
  const themeButtonProps = useMemo(() => {
    const makeVariant = (variant: ButtonProps['variant']) => {
      const makeColorPrimary = (variant: ButtonProps['variant']) => {
        const mapping = {
          primary: colorPalettes.primary,
          secondary: colorPalettes.white,
        };

        const value = mapping[variant!];

        return value
          ? {
              colorPrimary: mapping[variant!],
            }
          : {};
      };

      const makeColorPrimaryHover = (variant: ButtonProps['variant']) => {
        const mapping = {
          primary: colorPalettes.orange['600'],
          secondary: colorPalettes.orange['50'],
        };

        const value = mapping[variant!];

        return value
          ? {
              colorPrimaryHover: mapping[variant!],
            }
          : {};
      };

      const makeColorPrimaryActive = (variant: ButtonProps['variant']) => {
        const mapping = {
          primary: colorPalettes.orange['600'],
          secondary: colorPalettes.orange['100'],
        };

        const value = mapping[variant!];

        return value
          ? {
              colorPrimaryActive: mapping[variant!],
            }
          : {};
      };

      const makeColorPrimaryText = (variant: ButtonProps['variant']) => {
        const mapping: {
          primary?: string;
          secondary?: string;
        } = {
          secondary: colorPalettes.primary,
        };

        const value = mapping[variant!];

        return value
          ? {
              primaryColor: mapping[variant!],
            }
          : {};
      };

      const makeColorPrimaryTextHover = (variant: ButtonProps['variant']) => {
        const mapping: {
          primary?: string;
          secondary?: string;
        } = {
          secondary: colorPalettes.primary,
        };

        const value = mapping[variant!];

        return value
          ? {
              colorTextLightSolid: mapping[variant!],
            }
          : {};
      };

      const makeBorderColorDisabled = (variant: ButtonProps['variant']) => {
        const mapping = {
          primary: colorPalettes.neutral['500'],
          secondary: colorPalettes.gray['200'],
        };

        const value = mapping[variant!];

        return value
          ? {
              borderColorDisabled: mapping[variant!],
            }
          : {};
      };

      if (variant) {
        return {
          ...makeColorPrimaryHover(variant),
          ...makeColorPrimaryText(variant),
          ...makeColorPrimary(variant),
          ...makeColorPrimaryActive(variant),
          ...makeColorPrimaryTextHover(variant),
          ...makeBorderColorDisabled(variant),
        };
      }

      return {};
    };

    return {
      borderRadius: 8,
      controlHeight: 40,
      controlHeightLG: 48,
      fontWeight: 700,
      contentFontSizeSM: 14,
      ...makeVariant(variant),
    };
  }, [variant]);

  return {
    themeButtonProps,
  };
};

export default useMakeThemeButtonProps;
