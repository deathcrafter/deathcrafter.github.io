import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const NavbarSection = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6rem;
  justify-content: center;
  align-items: flex-end;
`;

const navAnim = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 30rem;
  min-width: 20rem;
  width: 4rem;
  height: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.palette.primary[800]};
  transition: all 200ms ease;
  animation-name: ${navAnim};
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  overflow: hidden;
  &.active {
    width: 50%;
    height: 4rem;
    margin-bottom: 1rem;
    animation: none;
  }
`;

export const NavButtonContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NavButton = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.palette.text.inactive};
  transition: background-color 100s ease, all 200ms ease;
  transform: scale(0);
  &:hover {
    transition: all 100ms ease;
    background-color: ${(props) => props.theme.palette.text.inactive + "33"};
  }
  &:active {
    background-color: ${(props) => props.theme.palette.text.inactive + "4d"};
  }
  &.active {
    color: ${(props) => props.theme.palette.text.default};
    /* padding: 0.4rem 0.15rem; */
    border-left: 0.25rem solid ${(props) => props.theme.palette.accent.default};
    border-right: 0.25rem solid ${(props) => props.theme.palette.accent.default};
  }
  &.visible {
    transform: scale(1);
  }
`;
