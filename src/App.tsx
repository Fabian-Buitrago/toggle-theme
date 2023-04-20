import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./components";

import "./styles/_main.scss";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Navbar />
      <div className="background flex">
        <h1 className="text">Hello World</h1>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Switch Theme
        </button>
      </div>
    </div>
  );
}

export default App;
