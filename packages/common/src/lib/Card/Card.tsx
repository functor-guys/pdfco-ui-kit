import classnames from 'classnames';
import React, { useMemo } from 'react';
import { CardProps as AntdCardProps } from 'antd';

import * as CardStyled from './styled';

export interface CardProps extends AntdCardProps {
  $hasBorder?: boolean;
  $hasBgFrame?: boolean;
  footer?: React.ReactNode;
  variant?: 'primary' | 'default';
  classNames?: {
    wrapper?: string;
    card?: string;
  };
}

const Card: React.FC<CardProps> = ({
  $hasBorder,
  footer,
  variant,
  classNames,
  ...props
}) => {
  const $hasFooter = useMemo(() => Boolean(footer), [footer]);

  return (
    <CardStyled.CardWrapper
      $hasBorder={$hasBorder}
      $hasFooter={$hasFooter}
      variant={variant}
      className={classNames?.wrapper}
    >
      <CardStyled.Card
        {...props}
        className={classnames(props.className, classNames?.card)}
      />

      {$hasFooter && <CardStyled.Footer>{footer}</CardStyled.Footer>}
    </CardStyled.CardWrapper>
  );
};

export default Card;
