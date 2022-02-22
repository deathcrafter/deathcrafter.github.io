import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background-color: #1c1c1c;
  overflow-y: auto;
`;

export const TextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-left: min(1vw, 1vh);
`;

export const Hello = styled.p`
  color: #fefefe;
  font-size: min(3.9vw, 3.9vh);
  font-weight: 500;
  padding-bottom: min(0.3vw, 0.3vh);
`;

export const Name = styled.p`
  color: #fefefe;
  font-size: min(10vw, 10vh);
  font-weight: 800;
  letter-spacing: 0.25rem;
`;

export const Desc = styled.p`
  color: #fefefe;
  font-size: min(4vw, 4vh);
  font-weight: 300;
  padding-top: min(2vw, 2vh);
`;

export const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 30vw;
  background-color: #fefefe;
  overflow: hidden;

  @media (max-aspect-ratio: 1620/1080) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  padding-left: min(13vw, 13vh);
  padding-bottom: min(5vw, 5vh);
  background-color: #fefefe;
  transform: rotate(90deg);
`;

export const Logo = styled.p`
  display: inline-block;
  width: fit-content;
  height: fit-content;
  font-family: "Aquire", sans-serif;
  font-size: min(50vw, 50vh);
  font-weight: 700;
  color: #1c1c1c;
  text-shadow: 0 0 5px #424242;
  &.second {
    transform: translateX(-31.5%);
  }
`;
