import styled from "styled-components";

export const tokens = {
  headerBg: "#FFFCF9",
  bodyBg: "#FFFCF9",
  colorBgElevated: "#FFFCF9",
  colorPrimary: "#8783d1",
  colorSuccess: "#06D6A0",
  colorLink: "#5f4bb6",
  colorPrimaryHover: "#4A44B9",
  colorLinkHover: "#4A44B9",
  colorLinkActive: "#4A44B9",
  colorBgContainer: "#FFFCF9",
  colorText: "#4A44B9",
  socialIconSize: "3em",
};


export const Main = styled.main`
padding: 1em;
`

export const ResponsiveMobile = styled.aside`
  @media only screen and (min-width: 767.98px) {
    display: none;
  }
`;

export const ResponsiveDesktop = styled.aside`
  @media only screen and (max-width: 767.98px) {
    display: none;
  }
`;

export const Mobile = styled(ResponsiveMobile)`
  width: 100%;
  align-items: center;
  @media only screen and (max-width: 767.98px) {
    display: flex;
  }
`;

export const Desktop = styled(ResponsiveDesktop)`
  width: 100%;
  align-items: center;
  @media only screen and (min-width: 767.98px) {
    display: flex;
  }
`;
