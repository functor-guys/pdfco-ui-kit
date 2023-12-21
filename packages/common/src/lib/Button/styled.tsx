import { Button as AntdButton } from 'antd';
import styled, { css } from 'styled-components';

import { ButtonProps } from './Button';
import themeConfig from '../Theme/themeConfig';

export const ButtonStyled = styled(AntdButton)<ButtonProps>`
  ${(props) => {
    const makeBorderColor = (variant: ButtonProps['variant']) => {
      type MappingType = {
        primary?: string;
        secondary?: string;
      };

      const mapping: MappingType = {
        secondary: themeConfig.token!.colorPrimary,
      };

      const value = mapping[variant!];

      return value
        ? css`
            border-color: ${value};
          `
        : '';
    };

    if (props.variant) {
      return css`
        && {
          ${makeBorderColor(props.variant)}
        }
      `;
    }

    return '';
  }}
`;
