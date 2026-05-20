import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [nightMode, setNightMode] = useState(() => {
    // Read from localStorage on first load, default to true
    const stored = localStorage.getItem("nightMode");
    return stored !== null ? stored === "true" : true;
  });

  useEffect(() => {
    localStorage.setItem("nightMode", nightMode);
  }, [nightMode]);

  return (
    <ThemeContext.Provider value={{ nightMode, setNightMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
