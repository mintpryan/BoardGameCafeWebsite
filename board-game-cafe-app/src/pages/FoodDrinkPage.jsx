import React, { useEffect, useState } from "react";
import SideMenu from "../components/food-drink/SideMenu";
import { CardRow, MenuMain, RowWithoutWrapping } from "../styles/fooddrink";
import { BaseTitle } from "../styles/styles";
import { useSelector } from "react-redux";
import { menuItemsSelector } from "../feautures/menuItemsSlice";
import MenuItemCard from "../components/food-drink/MenuItemCard";
import { Col, Row } from "antd";
import { isAnyOf } from "@reduxjs/toolkit";

export default function FoodDrinkPage() {
  const menuItems = useSelector(menuItemsSelector);
  const [itemsCard, setItemsCard] = useState([]);
  useEffect(() => {
    const cards = menuItems.map((item) => (
      <MenuItemCard
        name={item.name}
        description={item.description}
        price={item.price}
        model_file_name={item.file_name}
      ></MenuItemCard>
    ));
    setItemsCard(cards);
  }, [menuItems]);

  return (
    <MenuMain>
      <Row justify="center">
        <BaseTitle>Our Menu</BaseTitle>
      </Row>
      <RowWithoutWrapping>
        <Col>
          <SideMenu></SideMenu>
        </Col>
        <Col>{itemsCard.length == 0 ? <h1>No elements</h1> : itemsCard}</Col>
      </RowWithoutWrapping>
    </MenuMain>
  );
}
