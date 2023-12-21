import Icon from '@ant-design/icons';
import React from 'react';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ListSvg = () => (
  <svg
    fill="none"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 16H27"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 8H27"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 24H27"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ListIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
  <Icon component={ListSvg} {...props} />
);

export default ListIcon;
