import { Helmet } from "react-helmet";
import { Container, Section, Text, SectionTitle, CardGrid, Card, ProfilePicture } from "./style";
import Loading from "react-loading";

export default function About(props) {
	return (
		<>
			<Helmet>
				<title>About</title>
			</Helmet>
			<Container>
				<Section style={{}}>
					<ProfilePicture src="./images/about.jpg" />
				</Section>
				<Section>
					<SectionTitle>About</SectionTitle>
					<Text>
						I am a student who loves to code. I love the way a bunch of lines do thousands of
						things. I am especially interested in robotics and AI stuff that I haven't wrapped my
						head around yet but hope to soon. As of now I am learning web development. I am
						comfortable with either MERN stack or Django. I have also worked with ASP.NET.
						<br />
						<br />
						As a hobby, I read books, especially of the fantasy genre. The Ember Quartet is my
						favourite book series as of now. I also love to watch anime and I have watched enough to
						call my self a seasoned weeb.
					</Text>
				</Section>
				<Section>
					<SectionTitle>Languages</SectionTitle>
					<CardGrid>
						<Card
							id="c-plusplus"
							icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
							text="C/C++"
							href="https://isocpp.org/"
						/>
						<Card
							id="c-sharp"
							icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
							text="C#"
							href="https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/"
						/>
						<Card
							id="javascript"
							icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
							text="JavaScript"
							href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
						/>
						<Card
							id="lua"
							icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg"
							text="Lua"
							href="https://www.lua.org/"
						/>
						<Card
							id="powershell"
							icon="./images/powershell.svg"
							text="PowerShell"
							href="https://docs.microsoft.com/en-us/powershell/scripting/overview"
						/>
						<Card
							id="python"
							icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
							text="Python"
							href="https://www.python.org/"
						/>
						<Card
							id="rust"
							icon="./images/rust.png"
							text="Rust"
							href="https://www.rust-lang.org/"
						/>
					</CardGrid>
				</Section>
				<Section>
					<SectionTitle>Technologies</SectionTitle>
					<CardGrid>
						<Card
							id="mongodb"
							icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
							text="MongoDB"
							href="https://www.mongodb.com/"
						/>
						<Card
							id="express"
							icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
							text="Express.js"
							href="https://expressjs.com/"
						/>
						<Card
							id="react"
							icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
							text="React"
							href="https://reactjs.org/"
						/>
						<Card
							id="node"
							icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
							text="Node.js"
							href="https://nodejs.org"
						/>
						<Card
							id="django"
							icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
							text="Django"
							href="https://www.djangoproject.com/"
						/>
						<Card
							id="tailwind"
							icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
							text="TailwindCSS"
							href="https://tailwindcss.com/"
						/>
						<Card
							id="bulma"
							icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg"
							text="Bulma"
							href="https://bulma.io"
						/>
					</CardGrid>
				</Section>
				<Section>
					<SectionTitle>Projects</SectionTitle>
					<CardGrid>
						<Card
							id="cmngsoon"
							text="Coming soon..."
							before={<Loading type="spin" color="#9b78ff" height="2rem" width="2rem" />}
						/>
					</CardGrid>
				</Section>
				<div style={{ display: "flex", marginBottom: "6rem" }} />
			</Container>
		</>
	);
}
