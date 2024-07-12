import React, { useEffect, useState } from "react";
import { MenuMain } from "../styles/fooddrink";
import { BaseTitle, HeroTitle, SmallHeroContainer } from "../styles/styles";
import { useSelector } from "react-redux";
import { menuItemsSelector } from "../feautures/menuItemsSlice";
import MenuItemCard from "../components/food-drink/MenuItemCard";
import { Col, Row } from "antd";
import heart from '../assets/heart.png'
import { Helmet } from "react-helmet";
import HeaderMenu from "../components/food-drink/HeaderMenu";
import { ImageContainer } from "../components/CardComponent";

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
    <>
      <Helmet>
        <title>Food&Drink | Menu | Sip&Play</title>
        <meta
          name="description"
          content="Some snacks,
                meals, and beverages"
        />
      </Helmet>
      <MenuMain>
        <Row justify="center">
          <BaseTitle>Our Menu</BaseTitle>
        </Row>
        <HeaderMenu></HeaderMenu>

        <Col>
          {itemsCard.length === 0 ? (
            <SmallHeroContainer>
              <ImageContainer><img src={heart}></img></ImageContainer>
              <HeroTitle>Choose smth delicious!</HeroTitle>
            </SmallHeroContainer>
          ) : (
            itemsCard
          )}
        </Col>
      </MenuMain>
    </>
  );
}
