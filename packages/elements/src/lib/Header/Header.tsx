import React, { useCallback, useState } from 'react';
import { Link, createSearchParams } from 'react-router-dom';

import { Button } from '@functor-guys/ui-kit-common';
import { ListIcon } from '@functor-guys/ui-kit-common';

import { MenuDrawer, Profile, Logo, Menu, useMakeMenuItems } from './atomics';
import * as HeaderStyled from './styled';

interface HeaderProps {
  me: Record<string, unknown>;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ me, onLogout }) => {
  const { items } = useMakeMenuItems();

  const [menuDrawer, setMenuDrawer] = useState({
    open: false,
  });

  const handleToggleMenuDrawer = useCallback(() => {
    setMenuDrawer((item) => ({
      open: !item.open,
    }));
  }, []);

  const handleCloseMenuDrawer = useCallback(() => {
    setMenuDrawer({
      open: false,
    });
  }, []);

  return (
    <HeaderStyled.Header className="border-b border-neutral-300">
      <MenuDrawer onClose={handleCloseMenuDrawer} open={menuDrawer.open} />

      <div className="flex h-full items-center justify-between px-4 sm:px-8 lg:px-4 xl:px-8">
        <div className="flex flex-1 items-center gap-2 sm:gap-4 lg:gap-2 xl:gap-4">
          <div className="lg:hidden">
            <Button
              shape="circle"
              type="text"
              icon={<ListIcon style={{ fontSize: 24 }} />}
              onClick={handleToggleMenuDrawer}
            />
          </div>

          <Link to="/" className="py-3 px-1 shrink-0">
            <Logo />
          </Link>

          <div className="flex-1 max-lg:hidden js-header-main-menu">
            <Menu mode="horizontal" />
          </div>
        </div>

        <div className="flex items-center gap-2 xl:gap-4">
          <div className="max-md:invisible max-md:absolute max-md:left-0 max-md:right-0">
            <Menu
              mode="horizontal"
              items={[items.TUTORIALS, items.API_DOCS, items.SUPPORT]}
            />
          </div>

          {me ? (
            <Profile me={me} onLogout={onLogout} />
          ) : (
            <>
              <Link
                to={{
                  pathname: '/signup',
                  search: createSearchParams({
                    utm_source: 'app',
                    utm_medium: 'sign-up',
                  }).toString(),
                }}
              >
                <Button variant="primary">Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </HeaderStyled.Header>
  );
};

export default Header;
