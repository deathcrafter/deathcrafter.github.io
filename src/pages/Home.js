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
          SOFTWARE <br />
          DEVELOPER
        </Name>
        <Desc>
          efficient in C, C++ & JavaScript and inefficient in Rust & Python.
        </Desc>
      </TextContainer>
      <LogoSection>
        <LogoContainer>
          <Logo>D</Logo>
          <Logo className="second">C</Logo>
        </LogoContainer>
      </LogoSection>
    </HomeContainer>
  );
}
