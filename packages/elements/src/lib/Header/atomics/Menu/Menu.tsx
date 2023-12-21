import {
  Menu as AntdMenu,
  ConfigProvider,
  Grid,
  theme,
  MenuProps as AntdMenuProps,
} from 'antd';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  ArrowUpRightIcon,
  Label,
  colorPalettes,
} from '@functor-guys/ui-kit-common';

import { GlobalStyle } from './styled';

export const useMakeMenuItems = () => {
  const leftItemSharedClassName =
    '[&:not(:first-of-type)]:xl:!ml-4 [&:not(:first-of-type)]:!ml-1';

  const rightItemSharedClassName =
    '[&:not(:first-of-type)]:xl:!ml-4 [&:not(:first-of-type)]:!ml-[1px]';

  const ITEMS = useMemo(() => {
    return {
      HOME: {
        key: '/',
        // icon: <CategoryIcon />,
        label: (
          <Link to="/">
            <Label className="!text-current">Home</Label>
          </Link>
        ),
        className: classNames(leftItemSharedClassName, 'js-main-home-menu'),
      },
      API_KEY: {
        key: '/account/api-key',
        // icon: <KeyIcon />,
        label: (
          <Link to="/account/api-key">
            <Label className="!text-current">API Key</Label>
          </Link>
        ),
        className: leftItemSharedClassName,
      },
      API_LOGS: {
        key: '/account/logs/api',
        // icon: <BracketsCurlyIcon />,
        label: (
          <Link to="/account/logs/api">
            <Label className="!text-current">API Logs</Label>
          </Link>
        ),
        className: classNames(leftItemSharedClassName, 'js-main-api-log-menu'),
      },
      API_TOOLS: {
        key: '/api-tools',
        // icon: <BookIcon />,
        label: (
          <Link to="/api-tools">
            <Label className="!text-current">API Tools</Label>
          </Link>
        ),
        className: classNames(
          leftItemSharedClassName,
          'js-main-api-tools-menu'
        ),
      },
      SUBSCRIPTION: {
        key: '/subscriptions',
        // icon: <CoinsIcon />,
        label: (
          <Link to="/subscriptions">
            <Label className="!text-current">Subscription</Label>
          </Link>
        ),
        className: classNames(
          leftItemSharedClassName,
          'js-main-subscription-menu'
        ),
      },
      TUTORIALS: {
        key: 'tutorials',
        label: (
          <a
            href="https://pdf.co/tutorials"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Label className="!text-neutral-800 !m-0">Tutorials</Label>

            <div className="rounded-full border border-neutral-300 flex items-center justify-center w-[18px] h-[18px]">
              <ArrowUpRightIcon
                className="text-black !min-w-[auto]"
                style={{ fontSize: 10 }}
              />
            </div>
          </a>
        ),
        className: rightItemSharedClassName,
      },
      API_DOCS: {
        key: 'api_docs',
        label: (
          <a
            href="https://developer.pdf.co"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Label className="!text-neutral-800 !m-0">API Docs</Label>

            <div className="rounded-full border border-neutral-300 flex items-center justify-center w-[18px] h-[18px]">
              <ArrowUpRightIcon
                className="text-black !min-w-[auto]"
                style={{ fontSize: 10 }}
              />
            </div>
          </a>
        ),
        className: rightItemSharedClassName,
      },
      SUPPORT: {
        key: 'support',
        label: (
          <a
            href="https://support.bytescout.com/hc/en-us/requests/new?subject=PDF.co Dashboard"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Label className="!text-neutral-800 !m-0">Support</Label>

            <div className="rounded-full border border-neutral-300 flex items-center justify-center w-[18px] h-[18px]">
              <ArrowUpRightIcon
                className="text-black !min-w-[auto]"
                style={{ fontSize: 10 }}
              />
            </div>
          </a>
        ),
        className: rightItemSharedClassName,
      },
    };
  }, []);

  return {
    items: ITEMS,
  };
};

interface MenuProps extends AntdMenuProps {
  me?: Record<string, unknown>;
}

const Menu: React.FC<MenuProps> = ({ className, me, ...props }) => {
  const { token } = theme.useToken();
  const breakpoints = Grid.useBreakpoint();
  // const location = useLocation();

  const { items: ITEMS } = useMakeMenuItems();

  const itemsFromHeader = useMemo<MenuProps['items']>(() => {
    if (!breakpoints.md) {
      return [
        {
          type: 'divider',
        },
        ITEMS.TUTORIALS,
        ITEMS.API_DOCS,
        ITEMS.SUPPORT,
      ];
    }

    return [];
  }, [ITEMS, breakpoints.md]);

  const menuItems = useMemo<MenuProps['items']>(() => {
    if (me) {
      return [
        ITEMS.HOME,
        ITEMS.API_TOOLS,
        ITEMS.API_LOGS,
        ITEMS.SUBSCRIPTION,
        ...itemsFromHeader!,
      ];
    }

    return [
      ITEMS.HOME,
      ITEMS.API_TOOLS,
      ITEMS.SUBSCRIPTION,
      ...itemsFromHeader!,
    ];
  }, [itemsFromHeader, me, ITEMS]);

  const selectedKeys = useMemo(() => {
    // return [location.pathname];
    return [];
    // }, [location]);
  }, []);

  return (
    <>
      <GlobalStyle />

      <ConfigProvider
        theme={{
          components: {
            Menu: {
              horizontalItemSelectedBg: colorPalettes.orange['200'],
              horizontalItemHoverBg: token.colorBgTextHover,
              horizontalItemBorderRadius: 8,
              padding: 12,
              activeBarHeight: 0,
              itemBorderRadius: 8,
              horizontalLineHeight: '32px',
            },
          },
        }}
      >
        <AntdMenu
          mode="inline"
          selectedKeys={selectedKeys}
          className={classNames('js-main-menu !border-0', className)}
          items={menuItems}
          {...props}
        />
      </ConfigProvider>
    </>
  );
};

export default Menu;
