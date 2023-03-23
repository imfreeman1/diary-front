import React from "react";
import Button from "../Button";
import {
  CURRENT_ROUTER_PATH,
  NAVBAR_HOVER_BG_COLOR_OBJECT,
} from "@/constants/navbarConstants";

function NavItem({ title }) {
  return (
    <li
      className={`font-bold p-2 w-min ${
        NAVBAR_HOVER_BG_COLOR_OBJECT[CURRENT_ROUTER_PATH()]
      }`}
    >
      <Button content={title} onClick={() => {}} />
    </li>
  );
}

export default NavItem;
