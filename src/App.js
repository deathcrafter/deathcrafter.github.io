import { RecoilRoot } from "recoil";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Navbar } from "./components";
import { Home, About, Blog, Contact } from "./pages";
import { GlobalStyle, darkTheme, lightTheme, useThemeDetector } from "./themes";

import { useEffect } from "react";
import axios from "axios";

export default function App(props) {
	const isDarkTheme = useThemeDetector();

	useEffect(() => {
		// just a wake up call to the posts server since heroku puts the servers to sleep after inactivity
		axios.get("https://deathcrafter.herokuapp.com");
	}, []);

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<RecoilRoot>
				<Router>
					<GlobalStyle />
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="blog/*" element={<Blog />} />
						<Route path="contact" element={<Contact />} />
					</Routes>
				</Router>
			</RecoilRoot>
		</ThemeProvider>
	);
}
