import { Card as AntdCard } from 'antd';
import styled, { css } from 'styled-components';

import { CardProps } from './Card';
import colorPalettes from '../Theme/colorPalettes';

interface CardWrapperProps {
  $hasBorder?: boolean;
  $hasFooter: boolean;
  variant: CardProps['variant'];
}

const makeCardBoxShadow = (props: CardWrapperProps) => {
  const makeColor = (variant: CardWrapperProps['variant']) => {
    const mapping = {
      primary: 'rgba(241, 102, 37, 0.14)',
      default: 'rgba(0, 0, 0, 0.04)',
    };

    return mapping[variant!] || mapping.default;
  };

  return `0 0 2px 6px ${makeColor(props.variant)}`;
};

const makeCardBorder = (props: CardWrapperProps) => {
  const makeColor = (variant: CardWrapperProps['variant']) => {
    const mapping = {
      primary: 'rgb(241, 102, 37)',
      danger: colorPalettes.red['500'],
      default: colorPalettes.neutral['200'],
    };

    return mapping[variant!] || mapping.default;
  };

  return `1px solid ${makeColor(props.variant)}`;
};

export const CardWrapper = styled.div<CardWrapperProps>`
  border-radius: 16px;

  ${(props) =>
    props.$hasBorder &&
    css`
      box-shadow: ${makeCardBoxShadow(props)};
      margin: 6px;
    `}

  ${(props) =>
    props.$hasFooter &&
    css`
      background: ${colorPalettes.orange['50']};

      ${Card} {
        z-index: 20;
      }
    `}
  
  ${(props) =>
    props.variant &&
    css`
      && {
        ${Card} {
          border: ${makeCardBorder(props)};
        }
      }
    `}
`;

export const Card = styled(AntdCard)`
  && {
    border-radius: 16px;
    border: 1px solid ${colorPalettes.neutral['200']};
    min-height: 100%;
  }
`;

export const Footer = styled.div`
  border-radius: 16px;
  background: ${colorPalettes.orange['50']};
  padding: 16px 24px;
  z-index: 10;
`;
