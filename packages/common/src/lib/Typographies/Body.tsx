import { ConfigProvider, Typography } from 'antd';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

const DEFAULT_FONT_SIZE = 14;
const DEFAULT_LINE_HEIGHT = 20;
const DEFAULT_FONT_WEIGHT = 500;

type VariantType = 'extraLarge' | 'large' | 'regular' | 'small';

const BodyStyled = styled(Typography.Paragraph)<{
  variant: VariantType;
}>`
  ${(props) => {
    const makeFontWeight = (variant: VariantType) => {
      const mapping = {
        extraLarge: 500,
        large: 500,
        regular: 500,
        small: 400,
      };

      return css`
        font-weight: ${mapping[variant] || DEFAULT_FONT_WEIGHT};
      `;
    };

    return makeFontWeight(props.variant);
  }}
`;

type TypographyProps = React.ComponentProps<typeof Typography>

interface BodyProps extends TypographyProps {
  variant?: VariantType;
}

const Body: React.FC<BodyProps> = ({ variant = 'regular', ...props }) => {
  const themeToken = useMemo(() => {
    const makeVariant = (variant: VariantType) => {
      const makeFontSize = (variant: VariantType) => {
        const mapping = {
          extraLarge: 18,
          large: 16,
          regular: 14,
          small: 12,
        };

        return {
          fontSize: mapping[variant!] || DEFAULT_FONT_SIZE,
        };
      };

      const makeLineHeight = (variant: VariantType) => {
        const { fontSize } = makeFontSize(variant);

        const mapping = {
          extraLarge: 24,
          large: 22,
          regular: 20,
          small: 16,
        };

        return {
          lineHeight: (mapping[variant!] || DEFAULT_LINE_HEIGHT) / fontSize,
        };
      };

      return {
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
      <BodyStyled {...props} variant={variant} />
    </ConfigProvider>
  );
};

export default Body;
