import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: min(4vw, 4vh);
  height: 100%;
  width: min(13vw, 13vh);
  background-color: #25252a;

  @media (orientation: portrait) {
    flex-direction: row;
    height: min(13vw, 13vh);
    width: 100%;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  color: #969696;
  font-size: min(5.5vw, 5.5vh);
  border-radius: 10%;
  transition: all ease-in 70ms;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  :active {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &.active {
    color: whitesmoke;
  }
`;
