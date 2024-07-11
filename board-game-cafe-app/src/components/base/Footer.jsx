import {  Layout } from "antd";
import { BaseTitle } from "../../styles/styles";
import { TEXTS } from "../../constants";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <>
      <Layout.Footer>
        <BaseTitle>{TEXTS.cafe_name}</BaseTitle>
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
