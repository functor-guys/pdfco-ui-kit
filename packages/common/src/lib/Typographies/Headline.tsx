import { ConfigProvider, Typography } from 'antd';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

const DEFAULT_FONT_SIZE = 32;
const DEFAULT_LINE_HEIGHT = 44;
const DEFAULT_FONT_WEIGHT = 700;

type VariantType = 'regular' | 'bold' | 'small';

type TypographyProps = React.ComponentProps<typeof Typography>;

interface HeadlineProps extends TypographyProps {
  variant?: VariantType;
}

const TypographyStyled = styled(Typography).attrs(() => ({
  component: 'p',
}))<HeadlineProps>`
  ${(props) => {
    const makeFontWeight = (variant: VariantType) => {
      const mapping = {
        regular: 700,
        bold: 900,
      } as Record<VariantType, number>;

      return css`
        font-weight: ${mapping[variant] || DEFAULT_FONT_WEIGHT};
      `;
    };

    return makeFontWeight(props.variant!);
  }}
`;

const Headline: React.FC<HeadlineProps> = ({
  variant = 'regular',
  ...props
}) => {
  const themeToken = useMemo(() => {
    const makeVariant = (variant: VariantType) => {
      const makeFontSize = (variant: VariantType) => {
        const mapping = {
          regular: 32,
          bold: 32,
          small: 20,
        };

        return {
          fontSize: mapping[variant] || DEFAULT_FONT_SIZE,
        };
      };

      const makeLineHeight = (variant: VariantType) => {
        const { fontSize } = makeFontSize(variant);

        const mapping = {
          regular: 44,
          bold: 44,
          small: 28,
        };

        return {
          lineHeight: (mapping[variant] || DEFAULT_LINE_HEIGHT) / fontSize,
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
      <TypographyStyled {...props} variant={variant} />
    </ConfigProvider>
  );
};

export default Headline;
