import { Card } from "antd";
import { BaseTitle } from "../styles/styles";

export default function FeaturesSection({ text, image, title }) {
  return (
    <Card>
      <BaseTitle>{title}</BaseTitle>
      <p>{text}</p>
      <img src={image}></img>
    </Card>
  );
}
