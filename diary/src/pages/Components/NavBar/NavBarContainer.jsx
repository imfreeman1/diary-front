import { useRouter } from "next/router";
import React from "react";
import NavBarPresent from "./NavBarPresent";

const NavBarContainer = ({ setSelectedMonth }) => {
  const router = useRouter();
  const currMonth = new Date().getMonth();
  const routerSelector = (e) => {
    const routerKey = e.target.innerText;
    switch (routerKey) {
      case "Cover":
        return router.push("/Main");
      case "Weekly":
        return router.push(routerKey);
      case "Daily":
        return router.push(routerKey);
      case "Personal":
        return;
      case "2023":
        setSelectedMonth(currMonth);
        return router.push("/Monthly");
      default:
        setSelectedMonth(+routerKey - 1);
        return router.push("/Monthly");
    }
  };
  return <NavBarPresent routerSelector={routerSelector} />;
};

export default NavBarContainer;
