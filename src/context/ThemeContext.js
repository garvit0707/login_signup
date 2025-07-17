// import {DarkTheme, DefaultTheme} from '@react-navigation/native';
// import React, {createContext, useContext, useState} from 'react';
// import {View, Text} from 'react-native';
// import {useColorScheme} from 'react-native';

// const ThemeContext = createContext();

// export const ThemeProvider = ({children}) => {
//   const colorScheme = useColorScheme();
//   console.log("color schema is here!!!@@@@@@2",colorScheme)
//   const [isDark, setIsDark] = useState(colorScheme === 'dark');
//   //   const isDark = colorScheme === 'dark';

//   const toggleTheme = () => {
//     console.log("toggletheme is called",isDark)
//     setIsDark(prev => !prev);
//   };

//   console.log("is dark in themecontext",isDark)
//   const theme = isDark ? DarkTheme : DefaultTheme;
//   return (
//     <ThemeContext.Provider value={{theme, isDark, toggleTheme}}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useAppTheme = () => useContext(ThemeContext);

// import { DarkTheme, DefaultTheme } from '@react-navigation/native';
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useColorScheme } from 'react-native';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const colorScheme = useColorScheme();

//   const [isDark, setIsDark] = useState(colorScheme === 'dark');
//   const [userOverridden, setUserOverridden] = useState(false); 
//   useEffect(() => {
//     if (!userOverridden) {
//       setIsDark(colorScheme === 'dark');
//     }
//   }, [colorScheme, userOverridden,]);

//   const toggleTheme = () => {
//     setIsDark(prev => !prev);
//     setUserOverridden(true);
//   };

//   const theme = isDark ? DarkTheme : DefaultTheme;

//   console.log('colorScheme:', colorScheme);
//   console.log('isDark:', isDark);
//   console.log('userOverridden:', userOverridden);

//   return (
//     <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useAppTheme = () => useContext(ThemeContext);


// import { DarkTheme, DefaultTheme } from '@react-navigation/native';
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useColorScheme } from 'react-native';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const systemColorScheme = useColorScheme(); 
//   const [isUsingSystemTheme, setIsUsingSystemTheme] = useState(true);
//   const [isDark, setIsDark] = useState(systemColorScheme === 'dark');

//   console.log("the darktheme is ",DarkTheme)
//   console.log("the light theme is ",DefaultTheme)
//   // Sync with system when allowed
//   useEffect(() => {
//     if (isUsingSystemTheme) {
//       setIsDark(systemColorScheme === 'dark');
//     }
//   }, [systemColorScheme, isUsingSystemTheme]);

//   const toggleTheme = () => {
//     // Manual toggle: stop using system
//     setIsUsingSystemTheme(false);
//     setIsDark(prev => !prev);
//   };

//   const useSystemTheme = () => {
//     setIsUsingSystemTheme(true);
//     setIsDark(systemColorScheme === 'dark'); // force sync now
//   };

//   const theme = isDark ? DarkTheme : DefaultTheme;

//   return (
//     <ThemeContext.Provider value={{ theme, isDark, toggleTheme, isUsingSystemTheme, useSystemTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useAppTheme = () => useContext(ThemeContext);


import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

const STORAGE_KEY = 'APP_THEME_PREFERENCE';

export const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();

  const [isUsingSystemTheme, setIsUsingSystemTheme] = useState(true);
  const [isDark, setIsDark] = useState(systemColorScheme === 'dark');

  // getting theme preference from AsyncStorage on initial mount
  useEffect(() => {
    const loadPreferences = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved !== null) {
          const parsed = JSON.parse(saved);
          setIsUsingSystemTheme(parsed.useSystem);
          setIsDark(parsed.isDark);
        }
      } catch (e) {
        console.log('Failed to load theme from storage:', e);
      }
    };
    loadPreferences();
  }, []);

  useEffect(() => {
    if (isUsingSystemTheme) {
      setIsDark(systemColorScheme === 'dark');
    }
  }, [systemColorScheme, isUsingSystemTheme]);

  // function to Save in AsyncStorage.
  const savePreferences = async (useSystem, isDarkValue) => {
    try {
      const payload = JSON.stringify({ useSystem, isDark: isDarkValue });
      await AsyncStorage.setItem(STORAGE_KEY, payload);
    } catch (e) {
      console.log('Failed to save theme to storage:', e);
    }
  };

  // Manual toggle theme
  const toggleTheme = () => {
    setIsUsingSystemTheme(false);
    setIsDark(prev => {
      const newVal = !prev;
      savePreferences(false, newVal);
      return newVal;
    });
  };

  // system theme Follow
  const useSystemTheme = () => {
    setIsUsingSystemTheme(true);
    const currentSystemDark = systemColorScheme === 'dark';
    setIsDark(currentSystemDark);
    savePreferences(true, currentSystemDark);
  };

  const theme = isDark ? DarkTheme : DefaultTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        toggleTheme,
        isUsingSystemTheme,
        useSystemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);
