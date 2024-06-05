import React, { createContext, useEffect, useState, useContext } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const scheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(scheme === "dark");

  // Carregar a preferência do tema do AsyncStorage quando o componente monta
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const themeValue = await AsyncStorage.getItem("isDarkTheme");
        if (themeValue !== null) {
          setIsDarkTheme(JSON.parse(themeValue));
        } else {
          setIsDarkTheme(scheme === "dark");
        }
      } catch (error) {
        console.error("Erro ao carregar o tema", error);
      }
    };
    loadTheme();
  }, [scheme]);

  // Salvar a preferência do tema no AsyncStorage quando isDarkTheme muda
  useEffect(() => {
    const saveTheme = async () => {
      try {
        await AsyncStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
      } catch (error) {
        console.error("Erro ao salvar o tema", error);
      }
    };
    saveTheme();
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleTheme: () => setIsDarkTheme(!isDarkTheme),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
