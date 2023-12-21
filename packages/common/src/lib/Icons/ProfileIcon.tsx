import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React from 'react';

const ProfileSvg = () => (
  <svg
    fill="none"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="15.4386"
      cy="9.70396"
      r="6.37071"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.33352 24.9352C5.33181 24.4873 5.43197 24.0449 5.62642 23.6415C6.23665 22.4211 7.95747 21.7742 9.38539 21.4813C10.4152 21.2615 11.4592 21.1147 12.5097 21.042C14.4546 20.8711 16.4107 20.8711 18.3556 21.042C19.406 21.1156 20.45 21.2624 21.48 21.4813C22.9079 21.7742 24.6287 22.36 25.2389 23.6415C25.63 24.4639 25.63 25.4186 25.2389 26.241C24.6287 27.5225 22.9079 28.1083 21.48 28.389C20.4514 28.6179 19.407 28.7688 18.3556 28.8406C16.7727 28.9748 15.1823 28.9992 13.5959 28.9138C13.2298 28.9138 12.8759 28.9138 12.5097 28.8406C11.4623 28.7697 10.4219 28.6187 9.39759 28.389C7.95747 28.1083 6.24885 27.5225 5.62642 26.241C5.43296 25.8329 5.3329 25.3868 5.33352 24.9352Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProfileIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
  <Icon component={ProfileSvg} {...props} />
);

export default ProfileIcon;
