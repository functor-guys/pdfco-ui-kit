import { useMemo } from 'react';

import { ButtonProps } from './Button';

const useMakeButtonProps = ({
  variant,
  type,
  shape = 'round',
  ...props
}: ButtonProps) => {
  const buttonType = useMemo<ButtonProps['type']>(() => {
    type MappingType = {
      primary: 'primary';
      secondary: 'primary';
    };

    const mapping: MappingType = {
      primary: 'primary',
      secondary: 'primary',
    };

    return variant ? mapping[variant] : type;
  }, [variant, type]);

  const buttonProps = useMemo<Omit<ButtonProps, 'variant'>>(() => {
    return {
      ...props,
      shape,
      type: buttonType,
    };
  }, [props, shape, buttonType]);

  return {
    buttonProps,
  };
};

export default useMakeButtonProps;
