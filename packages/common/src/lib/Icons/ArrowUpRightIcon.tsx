import Icon from '@ant-design/icons';
import React from 'react';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ArrowUpRightSvg = () => (
  <svg
    fill="none"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 24L24 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 8H24V21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowUpRightIcon: React.FC<Partial<CustomIconComponentProps>> = (
  props
) => <Icon component={ArrowUpRightSvg} {...props} />;

export default ArrowUpRightIcon;
