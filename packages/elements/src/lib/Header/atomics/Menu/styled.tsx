import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .js-main-menu {
    &.ant-menu-inline {
      .ant-menu-sub {
        background: transparent !important;
      }

      .ant-menu-item {
        &.ant-menu-item {
          padding: 10px 12px;

          &:first-child {
            margin-top: 0;
            margin-bottom: 0;
          }

          &:not(:first-child):not(:last-child) {
            margin-top: 20px;
            margin-bottom: 20px;
          }

          &.ant-menu-item-selected {
            font-weight: 500;
          }
        }
      }

      .ant-menu-submenu-title {
        &.ant-menu-submenu-title {
          padding: 10px 12px;
          margin-top: 20px;
          margin-bottom: 20px;
        }
      }
    }
    
    &.ant-menu-horizontal {
      .ant-menu-item:not(:first-of-type) {
        margin-left: 16px;
      }
    }
  }
`;
