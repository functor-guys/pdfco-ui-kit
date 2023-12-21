import { ConfigProvider, Typography } from 'antd';
import React, { useMemo } from 'react';
import styled from 'styled-components';

const DEFAULT_FONT_SIZE = 14;
const DEFAULT_LINE_HEIGHT = 20;

type VariantType = 'large' | 'regular' | 'small';

type TypographyProps = React.ComponentProps<typeof Typography>;

interface LabelProps extends TypographyProps {
  variant?: VariantType;
}

const LabelStyled = styled(Typography.Text)<LabelProps>`
  font-weight: 700;
`;

const Label: React.FC<LabelProps> = ({ variant = 'regular', ...props }) => {
  const themeToken = useMemo(() => {
    const makeVariant = (variant: VariantType) => {
      const makeFontSize = (variant: VariantType) => {
        const mapping = {
          large: 16,
          regular: 14,
          small: 12,
        };

        return {
          fontSize: mapping[variant] || DEFAULT_FONT_SIZE,
        };
      };

      const makeLineHeight = (variant: VariantType) => {
        const { fontSize } = makeFontSize(variant);

        const mapping = {
          large: 22,
          regular: 20,
          small: 16,
        };

        return {
          lineHeight: (mapping[variant] || DEFAULT_LINE_HEIGHT) / fontSize,
        };
      };

      return {
        fontWeightStrong: 700,
        ...makeFontSize(variant),
        ...makeLineHeight(variant),
      };
    };

    return {
      ...makeVariant(variant),
    };
  }, [variant]);

  return (
    <ConfigProvider
      theme={{
        token: themeToken,
      }}
    >
      <LabelStyled {...props} variant={variant} />
    </ConfigProvider>
  );
};

export default Label;
