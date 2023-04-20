import React, { createContext, useState } from "react";

export const ThemeContext = createContext<any>({ theme: "light", undefined });

type ThemeProviderProps = {
  children: React.ReactNode; //👈 children prop type
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  //localstorage to save the themechice
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
