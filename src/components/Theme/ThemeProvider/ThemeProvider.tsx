import { FC, ReactNode, useState } from "react";
import { lightTheme, darkTheme } from "../theme";
import ColorContext from "../ColorContext/ColorContext";

interface IThemeProvider {
  children: ReactNode | ReactNode[] | any;
}

const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ColorContext.Provider value={{ theme: currentTheme }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ThemeProvider;
