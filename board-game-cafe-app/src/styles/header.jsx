import { Drawer, Layout, Menu } from "antd";
import { tokens } from "./main";
import styled from "styled-components";
import SocialMedia from "../components/base/SocialMedia";
import RefIcon from "@ant-design/icons/lib/icons/AccountBookFilled";

export const BaseHeader = styled(Layout)`
  display: flex;
  padding: 0.5em;

  background-color: ${tokens.bodyBg};
  border-bottom: 0.1em solid rgba(5, 52, 99, 0.06);

  @media only screen and (max-width: 767.98px) {
    min-height: 9vh;
  }

  @media only screen and (min-width: 768px) and (max-width: 991.98px) {
    min-height: 10vh;
  }
  @media only screen and (min-width: 992px) {
    min-height: 12vh;
  }
`;
export const DesktopBaseMenu = styled(Menu)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
  font-weight: 700;
  font-family: "Nunito";
  border-bottom: unset;

  @media only screen and (max-width: 767.98px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 991.98px) {
    font-size: 1em;
  }
  @media only screen and (min-width: 992px) {
    font-size: 1.4em;
  }
`;

export const MenuDrawer = styled(Drawer)`
  background-color: ${tokens.bodyBg};
  max-width: 70%;
  font-family: "Nunito";
  font-size: 1.5em;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2em;
`;

export const NamedLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;