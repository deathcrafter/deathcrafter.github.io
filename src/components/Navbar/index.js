import { useState } from "react";
import { NavbarSection, NavbarContainer, NavButton } from "./style";
import {
  HomeRounded,
  AlternateEmailRounded,
  PersonRounded,
  RssFeedRounded,
} from "@mui/icons-material";

export default function Navbar(props) {
  const [active, setActive] = useState({
    active: false,
    timerId: undefined,
  });

  const handleMouseEnter = (e) => {
    console.log("mouse enter");
    if (active.timerId) {
      clearTimeout(active.timerId);
    }
    setActive({
      active: true,
      timerId: undefined,
    });
  };
  const handleMouseLeave = (e) => {
    console.log("mouse leave");
    setActive({
      active: true,
      timerId: setTimeout(() => {
        setActive({
          active: false,
          deactivating: false,
          timerId: undefined,
        });
      }, 300),
    });
  };

  return (
    <NavbarSection>
      <NavbarContainer
        className={active.active && "active"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavButton className={active.active && "visible"} to="/">
          <HomeRounded style={{ fontSize: "2rem" }} />
        </NavButton>
        <NavButton className={active.active && "visible"} to="/about">
          <PersonRounded style={{ fontSize: "2rem" }} />
        </NavButton>
        <NavButton className={active.active && "visible"} to="/blog">
          <RssFeedRounded style={{ fontSize: "2rem" }} />
        </NavButton>
        <NavButton className={active.active && "visible"} to="/contact">
          <AlternateEmailRounded style={{ fontSize: "2rem" }} />
        </NavButton>
      </NavbarContainer>
    </NavbarSection>
  );
}
