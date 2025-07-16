import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import Navigation from './src/Navigation'
import { useColorScheme } from 'react-native';
import { ThemeProvider, useAppTheme } from './src/context/ThemeContext';


const AppWrapper = () => {
  const { theme } = useAppTheme();
  return (
    <NavigationContainer theme={theme}>
      <Navigation />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  );
}