import { Button as AntdButton, ConfigProvider } from 'antd';

export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <ConfigProvider>
      <AntdButton {...props} />
    </ConfigProvider>
  );
}


export default Button;
