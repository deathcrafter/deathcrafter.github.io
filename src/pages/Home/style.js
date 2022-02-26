import styled from "styled-components";
import DCLogo from "../../images/DC";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100%;
  width: 100%;
  overflow: auto;
  background-color: ${(props) => props.theme.palette.primary};
  @media screen and (max-width: ${(props) => props.theme.breakpoints.medium}) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: center;
  /* align-items: center; */
`;

const HomeText = styled.p`
  font-family: "Ubuntu", sans-serif;
  color: ${(props) => props.theme.palette.text.default};
  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    padding: 0 1.5rem;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.big}) {
    padding: 0 2.25rem;
  }
`;

export const HomeHello = styled(HomeText)`
  font-size: 1.3rem;
  font-weight: 400;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.big}) {
    font-size: 2.25rem;
  }
`;

export const HomeName = styled(HomeText)`
  font-family: "Galderglynn Regular", sans-serif;
  font-size: calc(1.3rem * (6 / 2.25));
  font-weight: 700;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    font-size: calc(1.5rem * (6 / 2.25));
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.big}) {
    font-size: 6rem;
  }
`;

export const HomeDesc = styled(HomeText)`
  font-size: calc(1.3rem * (1.5 / 2.25));
  font-weight: 300;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    font-size: calc(1.5rem * (1.5 / 2.25));
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.big}) {
    font-size: 1.5rem;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(DCLogo)`
  height: 8rem;
  aspect-ratio: 1/1;
  color: ${(props) => props.theme.palette.text.default};

  @media screen and (min-width: calc(${(props) =>
      props.theme.breakpoints.medium} + 1px)) {
    height: calc(1.5rem * (25 / 2.25));
    transform: rotate(90deg);
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.big}) {
    height: 25rem;
    transform: rotate(90deg);
  }

  & path {
    fill: ${(props) => props.theme.palette.text.default};
  }
`;
