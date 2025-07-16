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

import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();

  const [isDark, setIsDark] = useState(colorScheme === 'dark');
  const [userOverridden, setUserOverridden] = useState(false); 
  useEffect(() => {
    if (!userOverridden) {
      setIsDark(colorScheme === 'dark');
    }
  }, [colorScheme, userOverridden,]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
    setUserOverridden(true);
  };

  const theme = isDark ? DarkTheme : DefaultTheme;

  console.log('colorScheme:', colorScheme);
  console.log('isDark:', isDark);
  console.log('userOverridden:', userOverridden);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);


// import { DarkTheme, DefaultTheme } from '@react-navigation/native';
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useColorScheme } from 'react-native';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const systemColorScheme = useColorScheme(); 

//   const [isUsingSystemTheme, setIsUsingSystemTheme] = useState(true);
//   const [isDark, setIsDark] = useState(systemColorScheme === 'dark');

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
