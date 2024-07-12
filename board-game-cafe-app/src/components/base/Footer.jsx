import {  Layout } from "antd";
import { TEXTS } from "../../constants";
import SocialMedia from "./SocialMedia";
import a_logo from '../../assets/a_logo.png'
import { HorizontalImage } from "../../styles/main";

export default function Footer() {
  return (
    <>
      <Layout.Footer>
        <HorizontalImage src={a_logo}></HorizontalImage>
        <div id="social-media">
          <SocialMedia></SocialMedia>
        </div>
        <address>{TEXTS.address}</address>
        <a href={`tel:+${TEXTS.tel}`}>Tel: {TEXTS.tel}</a>
        <div id="email">{TEXTS.email}</div>
      </Layout.Footer>
    </>
  );
}
