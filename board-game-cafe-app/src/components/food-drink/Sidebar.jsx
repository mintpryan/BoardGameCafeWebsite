// Sidebar.js
import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  .ant-layout-sider-trigger {
   background: transparent;
  }
  .ant-menu-item {
    display: flex;
    align-items: center;
  }
  .ant-menu-item-icon {
    margin-right: 10px;
  }
`;

const StyledMenu = styled(Menu)`
  border-radius: 10px;
  overflow: hidden;
`;

const Sidebar = () => {
  return (
    <StyledSider collapsible>
      <StyledMenu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          User
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </StyledMenu>
    </StyledSider>
  );
};

export default Sidebar;
