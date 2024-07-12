import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoriesSelector,
  categorySelector,
  categoryStatus,
  fetchCategories,
  selectItem,
} from "../../feautures/categorySlice";

import { SideMenuContainer, VerticalMenu, VerticalMenuSider } from "../../styles/fooddrink";
import {
  fetchMenuItems,
} from "../../feautures/menuItemsSlice";


export default function SideMenu() {
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
  }, [selectedItem,dispatch]);

  const onSelect = (e) => {
    dispatch(selectItem(e.key));
  };
  return (
    <SideMenuContainer>
      <VerticalMenuSider>
        <VerticalMenu onSelect={onSelect} items={categories} />
      </VerticalMenuSider>
    </SideMenuContainer>
  );
}
