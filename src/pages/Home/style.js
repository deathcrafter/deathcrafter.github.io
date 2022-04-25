import styled from "styled-components";
import DCLogo from "../../images/DC";

export const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  min-height: 100%;
  width: 100%;
  overflow: auto;
  /* background-color: ${({ theme }) => theme.palette.primary.default}; */
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 6rem;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex: 1 0;
    align-items: center;
  }
`;

const HomeText = styled.p`
  font-family: "Ubuntu", sans-serif;
  color: ${({ theme }) => theme.palette.text.default};
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0 3rem;
    text-align: left;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.big}) {
    padding: 0 4.5rem;
    text-align: left;
  }
`;

export const HomeHello = styled(HomeText)`
  font-size: 1.3rem;
  font-weight: 400;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1.7rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.big}) {
    font-size: 2.25rem;
  }
`;

export const HomeName = styled(HomeText)`
  font-family: "Galderglynn Regular", sans-serif;
  font-size: calc(1.3rem * (6 / 2.25));
  font-weight: 700;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: calc(1.7rem * (6 / 2.25));
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.big}) {
    font-size: 6rem;
  }
`;

export const HomeDesc = styled(HomeText)`
  font-size: calc(1.3rem * (1.5 / 2.25));
  font-weight: 300;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: calc(1.7rem * (1.5 / 2.25));
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.big}) {
    font-size: 1.5rem;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem 0 3rem;

  background-image: url("./images/LogoBgHorSm.svg");
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    background-image: url("./images/LogoBgVer.svg");
    background-position: center top;
    width: 100%;
    padding: 2rem 0 1rem 0;
  }

  @media screen and (orientation: landscape) and (min-height: 710px) {
    background-position: right center;
    background-image: url("./images/LogoBgHorLg.svg");
  }
`;

export const Logo = styled(DCLogo)`
  height: 8rem;
  aspect-ratio: 1/1;
  color: ${({ theme }) => theme.palette.text.default};

  @media screen and (min-width: calc(${(props) =>
      props.theme.breakpoints.medium} + 1px)) {
    height: calc(1.5rem * (25 / 2.25));
    transform: rotate(90deg);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.big}) {
    height: 25rem;
    transform: rotate(90deg);
  }

  & path {
    fill: ${({ theme }) => theme.palette.text.default};
  }
`;
