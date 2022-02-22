import { NavContainer, StyledLink } from "../../styles/Navbar.style";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";

export default function Navbar(props) {
  return (
    <NavContainer>
      <StyledLink to="/">
        <HomeRoundedIcon fontSize="28px" />
      </StyledLink>
      <StyledLink to="/about">
        <PersonRoundedIcon fontSize="28px" />
      </StyledLink>
      <StyledLink to="/blog">
        <RssFeedRoundedIcon fontSize="28px" />
      </StyledLink>
      <StyledLink to="/contact">
        <AlternateEmailRoundedIcon fontSize="28px" />
      </StyledLink>
    </NavContainer>
  );
}
