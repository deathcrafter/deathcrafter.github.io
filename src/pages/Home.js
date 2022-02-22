import {
  HomeContainer,
  TextContainer,
  Hello,
  Name,
  Desc,
  LogoSection,
  LogoContainer,
  Logo,
} from "../styles/Home.style";

export default function Home(props) {
  return (
    <HomeContainer>
      <TextContainer>
        <Hello>Hello! I am</Hello>
        <Name>
          SHAKTIJEET <br />
          SAHOO, A <br />
          FRONTEND <br />
          DEVELOPER
        </Name>
        <Desc>efficient in HTML & CSS and inefficient in ReactJS.</Desc>
      </TextContainer>
      <LogoSection>
        <LogoContainer>
          <Logo>D</Logo>
          <Logo className="second">C</Logo>
          {/* <Parallelogram /> */}
        </LogoContainer>
      </LogoSection>
    </HomeContainer>
  );
}
