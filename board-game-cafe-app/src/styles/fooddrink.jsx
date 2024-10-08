import { Layout, Menu, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

export const MenuMain = styled.main`
  display: grid;
  padding: 1em;
`;

export const SideMenuContainer = styled.div`
  font-size: 1em;
  font-family: "Nunito";
`;

export const VerticalMenu = styled(Menu)`
  font-family: "Nunito";
  font-size: 1.2em;
  border: unset;
`;

export const VerticalMenuSider = styled(Sider)`
  @media only screen and (max-width: 450px) {
    display: none;
  }
`;

export const Card = styled.div`
  font-family: "Nunito";
  display: grid;
  width: 100%;
  margin: 1em 0.5em;

  border: 4px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-color: transparent;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const StyledCanvas = styled(Canvas)`
  background:white;
  border-radius: 15px; 
`;

export const CardRow = styled(Row)`
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
export const RowWithoutWrapping = styled(Row)`
  flex-flow: nowrap;
`;


export const ItemName = styled.p`
  font-size: 1.5em;
  font-weight: 800;
  font-family: "Nunito";
`;
export const ItemDescription = styled.p`
  font-size: 1em;
  font-weight: 600;
  font-family: "Nunito";
`;

export const ItemPrice = styled.p`
  font-size: 1em;
  font-family: "Nunito";
`;



const { Header, Content } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
  
`;

export const StyledHeader = styled(Header)`
  background-color: #DEE9D3;
  padding: 0;
  box-shadow: 0 2px 8px #f0f1f2;
`;

export  const StyledContent = styled(Content)`
  margin: 24px 16px 0;
  padding: 24px;
  background: #DEE9D3;
`;