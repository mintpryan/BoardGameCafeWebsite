import MenuItem from "antd/es/menu/MenuItem";
import { DesktopBaseMenu, NamedLogo } from "../../../styles/header";
import AppLogo from "../AppLogo";
import { NavLink } from "react-router-dom";
import { Desktop } from "../../../styles/main";
import { HEADER_MENU_ITEMS,TEXTS } from "../../../constants";

export default function DesktopHeader() {
  const header_items = HEADER_MENU_ITEMS.map((item) => (
    <MenuItem>
      <NavLink to={item.link}>{item.name}</NavLink>
    </MenuItem>
  ));
  return (
    <Desktop>
      <NamedLogo>
        <AppLogo size="md"></AppLogo>
      </NamedLogo>

      <DesktopBaseMenu mode="horizontal" defaultSelectedKeys={["1"]}>
        {header_items}
      </DesktopBaseMenu>
    </Desktop>
  );
}
