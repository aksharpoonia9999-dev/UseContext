import HomePage from "./components/HomePage";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LangContext";

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HomePage />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
