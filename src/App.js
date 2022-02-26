import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { Navbar } from "./components";
import { Home, About, Blog, Contact } from "./pages";
import { GlobalStyle, darkTheme, lightTheme, useThemeDetector } from "./themes";

export default function App(props) {
  const isDarkTheme = useThemeDetector();
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
