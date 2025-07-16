import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View,Button } from 'react-native';
import { useNavigation, DarkTheme, DefaultTheme, } from '@react-navigation/native';
import { useAppTheme } from './context/ThemeContext';

const HomeScreen = () => {
    const navigation = useNavigation()
    const {theme, isDark, toggleTheme} = useAppTheme()

    const handlePress =()=>{
        navigation.navigate("Home") 
    }

    // const togglethemes=()=>{
    //     console.log("the toggle theme triggered",theme)
    //     toggletheme
    // }

    // console.log("the theme value i am getting through my application is this @@@@@@@@@@@@@@@@@@",theme)
    console.log("isdark value ",isDark)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:  theme.colors.background
      }}>
      <Text style={{color: theme.colors.text }}>
        This is demo of default dark/light theme using navigation hdwhdihfi.
      </Text>
       <Button title = "data" onPress={handlePress}></Button>
       <Button title = "toggle the theme" onPress={toggleTheme}/>
    </View>

  );
};

export default HomeScreen;


// import { Text, View, Button } from 'react-native';
// import { useAppTheme } from './context/ThemeContext';

// const HomeScreen = () => {
//   const { theme, isDark, toggleTheme, isUsingSystemTheme, useSystemTheme } = useAppTheme();

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: theme.colors.background,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <Text style={{ color: theme.colors.text, marginBottom: 20 }}>
//         Current Theme: {isDark ? 'Dark' : 'Light'}
//       </Text>

//       <Button title="Toggle Theme" onPress={toggleTheme} />

//       <View style={{ height: 15 }} />

//       {!isUsingSystemTheme && (
//         <Button title="Use System Theme" onPress={useSystemTheme} />
//       )}
//     </View>
//   );
// };

// export default HomeScreen;
