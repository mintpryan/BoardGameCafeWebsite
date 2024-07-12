// HeaderMenu.js
import React, { useEffect } from "react";
import { Menu } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSelector, categorySelector, categoryStatus, fetchCategories, selectItem } from "../../feautures/categorySlice";
import { fetchMenuItems } from "../../feautures/menuItemsSlice";

const StyledMenu = styled(Menu)`
  line-height: 4em;
`;

const HeaderMenu = () => {
  const dispatch = useDispatch();

  const categories = useSelector(categoriesSelector);
  const selectedItem = useSelector(categorySelector);
  const status = useSelector(categoryStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [selectedItem, dispatch]);

  const onSelect = (e) => {
    dispatch(selectItem(e.key));
  };

  return (
    <StyledMenu mode="horizontal"  onSelect={onSelect} items={categories}> 

    </StyledMenu>
  );
};

export default HeaderMenu;
