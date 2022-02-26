import { useEffect, useState } from "react";
import { NavbarSection, NavbarContainer, NavButton } from "./style";
import {
  HomeRounded,
  AlternateEmailRounded,
  PersonRounded,
  RssFeedRounded,
} from "@mui/icons-material";
import useMouseDetector from "../../lib/useMouseDetector";

export default function Navbar(props) {
  const [active, setActive] = useState({
    active: false,
    timerId: undefined,
  });
  const isMouseCapable = useMouseDetector();

  useEffect(() => {
    setActive({
      active: true,
      timerId: setTimeout(() => {
        setActive({
          active: false,
          deactivating: false,
          timerId: undefined,
        });
      }, 2000),
    });
  }, [isMouseCapable]);

  const handleMouseEnter = (e) => {
    if (active.timerId) {
      clearTimeout(active.timerId);
    }
    setActive({
      active: true,
      timerId: undefined,
    });
  };
  const handleMouseLeave = (e) => {
    setActive({
      active: true,
      timerId: setTimeout(() => {
        setActive({
          active: false,
          deactivating: false,
          timerId: undefined,
        });
      }, 500),
    });
  };

  return (
    <NavbarSection>
      <NavbarContainer
        className={[active.active && "active", !isMouseCapable && "active"]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavButton
          className={[active.active && "visible", !isMouseCapable && "visible"]}
          to="/"
        >
          <HomeRounded style={{ fontSize: "2rem" }} />
        </NavButton>
        <NavButton
          className={[active.active && "visible", !isMouseCapable && "visible"]}
          to="/about"
        >
          <PersonRounded style={{ fontSize: "2rem" }} />
        </NavButton>
        <NavButton
          className={[active.active && "visible", !isMouseCapable && "visible"]}
          to="/blog"
        >
          <RssFeedRounded style={{ fontSize: "2rem" }} />
        </NavButton>
        <NavButton
          className={[active.active && "visible", !isMouseCapable && "visible"]}
          to="/contact"
        >
          <AlternateEmailRounded style={{ fontSize: "2rem" }} />
        </NavButton>
      </NavbarContainer>
    </NavbarSection>
  );
}
