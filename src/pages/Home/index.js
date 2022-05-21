import {
	HomeContainer,
	LogoSection,
	TextSection,
	HomeHello,
	HomeName,
	HomeDesc,
	Logo,
} from "./style";
import { Helmet } from "react-helmet";

export default function Home(props) {
	return (
		<>
			<Helmet>
				<title>Home</title>
			</Helmet>
			<HomeContainer>
				<TextSection>
					<HomeHello>Hello! I'm</HomeHello>
					<HomeName>
						SHAKTIJEET
						<br />
						SAHOO, A<br />
						SOFTWARE
						<br />
						DEVELOPER
					</HomeName>
					<HomeDesc>efficient in C/C++, C#, JavaScript and HTML & CSS.</HomeDesc>
				</TextSection>
				<LogoSection>
					<Logo theme={props.theme} />
				</LogoSection>
			</HomeContainer>
		</>
	);
}
