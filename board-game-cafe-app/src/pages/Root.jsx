import { Outlet } from "react-router-dom";
import AppHeader from "../components/base/header/AppHeader";
import Footer from "../components/base/Footer";

import Link from "antd/es/typography/Link";
import HeroSection from "../components/hero/HeroSection";
import { Carousel } from "antd";
import { HeroContainer } from "../styles/styles";
import MobileHeader from "../components/base/header/MobileHeader";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function Root() {
  return (
    <>
      <AppHeader></AppHeader>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
