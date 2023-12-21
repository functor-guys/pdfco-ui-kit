import { ConfigProvider, ButtonProps as AntdButtonProps } from 'antd';
import React from 'react';

import { ButtonStyled } from './styled';
import useMakeButtonProps from './useMakeButtonProps';
import useMakeThemeButtonProps from './useMakeThemeButtonProps';
import useMakeThemeTokenProps from './useMakeThemeTokenProps';

export interface ButtonProps extends AntdButtonProps {
  variant?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = (props) => {
  const { variant } = props;
  const { themeTokenProps } = useMakeThemeTokenProps(props);
  const { buttonProps } = useMakeButtonProps(props);
  const { themeButtonProps } = useMakeThemeButtonProps(props);

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: themeButtonProps,
        },
        token: themeTokenProps,
      }}
    >
      <ButtonStyled {...buttonProps} variant={variant} />
    </ConfigProvider>
  );
};

export default Button;
