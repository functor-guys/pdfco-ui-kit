import { Dropdown } from 'antd';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Button, ProfileIcon, Body, Label } from '@functor-guys/ui-kit-common';

interface ProfileProps {
  me: Record<string, unknown>;
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ me, onLogout }) => {
  const menuProps = useMemo(() => {
    return {
      className: '!p-2',
      items: [
        {
          key: 'account_settings',
          label: (
            <Link to="/account">
              <Body variant="large" className="!m-0">
                Account Settings
              </Body>
            </Link>
          ),
          className: '!py-2',
        },
        {
          key: 'security_settings',
          label: (
            <Link to="/account/security">
              <Body variant="large" className="!m-0">
                Security Settings
              </Body>
            </Link>
          ),
          className: '!py-2',
        },
        {
          label: (
            <a href="https://pdfco.onfastspring.com/account">
              <Body variant="large" className="!m-0">
                Payment Settings
              </Body>
            </a>
          ),
          key: 'payment_settings',
          className: '!py-2',
        },
        {
          label: (
            <Body variant="large" className="!m-0">
              Logout
            </Body>
          ),
          className: '!py-2',
          key: 'logout',
          onClick: onLogout,
        },
      ],
    };
  }, [onLogout]);

  return (
    <Dropdown menu={menuProps} placement="bottomRight" trigger={['click']}>
      <div
        className="group flex items-center gap-2.5 cursor-pointer"
        title={me?.name as string}
      >
        <Button
          shape="circle"
          icon={<ProfileIcon />}
          className="!text-black !border-gray-200"
        />

        <Label className="!m-0 max-w-[80px] truncate !text-black">
          {me?.name as string}
        </Label>
      </div>
    </Dropdown>
  );
};

export default Profile;
