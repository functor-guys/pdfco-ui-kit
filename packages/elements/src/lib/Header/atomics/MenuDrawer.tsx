import { Drawer, DrawerProps } from 'antd';
import React, { useEffect, useMemo } from 'react';
// import { useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Menu from './Menu';

export const GlobalStyle = createGlobalStyle`
  .js-menu-drawer {
    .ant-drawer-header-title {
      flex-direction: row-reverse;
    }
  }
`;

const MenuDrawer: React.FC<DrawerProps> = ({ open, onClose }) => {
  // const location = useLocation();

  const bodyStyle = useMemo<React.CSSProperties>(() => {
    return {
      padding: '32px 24px',
    };
  }, []);

  useEffect(() => {
    // @ts-expect-error: No need to pass argument to onClose
    onClose?.();
  // }, [location.key]);
  }, []);

  return (
    <>
      <GlobalStyle />

      <Drawer
        styles={{
          body: bodyStyle,
        }}
        className="js-menu-drawer"
        open={open}
        onClose={onClose}
        closable={false}
        title={null}
        placement="left"
        width={320}
      >
        <Menu />
      </Drawer>
    </>
  );
};

export default MenuDrawer;
