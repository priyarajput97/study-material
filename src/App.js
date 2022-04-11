import "./App.css";
import StyledComponentEg from "./components/StyledComponentEg";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const theme = {
  dark: {
    primary: "#383838",
    text: "#F2F2F2",
  },
  light: {
    primary: "#F2F2F2",
    text: "#383838",
  },
};

const GlobalStyles = createGlobalStyle`
  * {
    font-family: Roboto
  }`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <StyledComponentEg />
      </div>
    </ThemeProvider>
  );
}

export default App;
