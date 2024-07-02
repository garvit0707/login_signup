import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({navigation}) => {
    const handlesignin=()=>(
        navigation.navigate("SignIN")
    )
    const handleregister=()=>{
        navigation.navigate("Register")
    }
    
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../logo/image1.png')} style={styles.image1} />
      <Text style={styles.heading1}>Team Work All</Text>
      <Text style={styles.heading2}>
        Lorem ipsum dolor sitting idle, amet consect adipiwdwf elit. Commodi officia optio eos.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={handlesignin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleregister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
      alignItems: 'center',
      backgroundColor: "white",
    },
    image1: {
      height: 350,
      width: 350,
      marginTop: 90,
    },
    heading1: {
      marginTop: 30,
      fontSize: 35,
      fontWeight: '800',
      color: 'black',
    },
    heading2: {
      color: 'black',
      fontSize: 16,
      fontWeight: '900',
      width: 280,
      lineHeight: 30,
      marginTop: 10,
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: 10,
      marginTop: 36,
    },
    button1: {
      backgroundColor: 'black',
      padding: 20,
      fontSize: 34,
      marginRight: 10,
      width: 160,
      cursor: "pointer",
      borderRadius: 6,
    },
  
    button2: {
      backgroundColor: 'rgba(0, 0, 255, 0.5)',
      padding: 20,
      width: 160,
      borderRadius: 6,
      
    },
    buttonText: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  

export default Home;