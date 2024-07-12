import { Col } from "antd";
import { Card, CardRow, ItemDescription, ItemName, ItemPrice } from "../../styles/fooddrink";
import Scene from "./Scene";
import { useState } from "react";

export default function MenuItemCard({
  name,
  description,
  price,
  model_file_name,
}) {

  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card onPointerOver={() => setIsHovered(true)}
    onPointerOut={() => setIsHovered(false)}>
      <CardRow>
        <Col span={8}>
          <Scene file_name={model_file_name} isHovered={isHovered}></Scene>
        </Col>
        <Col flex={7}>
          <ItemName>{name}</ItemName>
          <ItemDescription>{description}</ItemDescription>
          <ItemPrice>Price: {price}$</ItemPrice>
        </Col>
      </CardRow>
    </Card>
  );
}
