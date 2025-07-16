import React ,{useState} from 'react'
import {View,Text, TextInput, StyleSheet} from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import Snackbar from 'react-native-snackbar'
import { useAppTheme } from './context/ThemeContext'
  
const SigninScreen = ({navigation,users}) => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  // console.log("the userapptheme is here",useAppTheme());
  const {dark, theme} = useAppTheme()
 
  const handleit=()=>{
    navigation.navigate("Register")
  }
 
  function handlesignin() {
    if (email && password) {
      const foundUserdata = users.find(data => data.email === email && data.password === password)
      console.log(foundUserdata)
      if (foundUserdata) {
        // Alert.alert("Sucessfully Entered")  
        Snackbar.show({
          text: "Sucessfully Entered",
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: "UNDO",
            textColor: "green"
          }
        })
        setTimeout(()=>{
          navigation.navigate("Userpage", { signedInUser: foundUserdata })
        },2000)
        
        setEmail("")
        setPassword("")
        return;
        
        
      } 
      else 
          dat = users.find(data => data.email ===email);
          if (!dat){
        // Alert.alert("invalid email or password, plz Register")
          Snackbar.show({
            text: "invalid email, plz Register",
            duration: Snackbar.LENGTH_LONG,
            action: {
              text: "UNDO",
              textColor: "green",
            }})} 
          else if (dat.password != password){
            Snackbar.show({
              text: "Plz enter the correct password",
              duration: Snackbar.LENGTH_LONG,
              action: {
                text: "UNDO",
                textColor: "green",
              }
          })}
        }
      else {
      // Alert.alert("Please enter the both email and password!")
      Snackbar.show({
        text: "Please enter the both email and password!",
        duration: Snackbar.LENGTH_SHORT,
        action: {
          text: "UNDO",
          textColor: "green"
        }
      })
    }
  }

  return (
    <SafeAreaView style = {Styles.signdata}>
        <Text style = {[Styles.signdata1,{color: theme.colors.text}]}>
            Lets Sign you in
        </Text>
        <Text style = {[Styles.signdata2,{color:theme.colors.text}]}>
          Welcome Back,
        </Text>
        <Text style = {[Styles.signdata3,{color:theme.colors.text}]}>
        You have been missed
        </Text>
        <TextInput style = {[Styles.input1,{textColor: theme.colors.text}]} placeholder='Enter your email' value={email} onChangeText={text=>setEmail(text)} placeholderTextColor={theme.colors.text}/>
        <TextInput style = {[Styles.input1,{textColor: theme.colors.text}]} placeholder='Password' value = {password} onChangeText={text=>setPassword(text)} placeholderTextColor={theme.colors.text}/>
        <Text style = {[Styles.signdata4,{color:theme.colors.text}]}>Forgot Password?</Text>
        <TouchableOpacity>
          <Text style = {[Styles.signdata5,{color:theme.colors.text}]} onPress={handlesignin}>Sign in</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center',marginTop: 30,width: 340}}>
          <View style={{flex: 1, height: 1, backgroundColor: theme.colors.text}} />
            <View>
              <Text style={{width: 40, textAlign: 'center',fontSize: 20,fontWeight: "700",color: theme.colors.text}}>Or</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: theme.colors.background}} />
        </View>
        <View style = {Styles.imagess}>
          <Image source={require('../logo/instagram.png')} style ={Styles.im} />
          <Image source={require('../logo/facebook.png')}  style ={Styles.im}/>
          <Image source={require('../logo/apple.png')} style ={Styles.im}/>
        </View>
        <View style = {Styles.head}>
          <Text style = {[Styles.signdata7,{color:theme.colors.text}]}>Don't have an account?
            <Text style = {[Styles.signdata8,{color:theme.colors.text}]} onPress={handleit}>   Register Now</Text>
          </Text>
        </View>  
    </SafeAreaView>
  )
}


const Styles = StyleSheet.create({
  signdata:{
    marginLeft:25,
    marginTop:36, 
  },
  signdata1:{
    marginTop: 40,
    fontSize: 35,
    fontWeight: '900',
    // color: 'black', 
  },
  signdata2:{
    fontSize: 24,
    fontWeight: "800",
    // color: "black",
    marginTop: 15,
  },
  signdata3:{
    fontSize: 24,
    fontWeight: "800",
    // color: "black",
    marginTop: 3,
    marginBottom: 45,
  },
  input1:{
    height: 65,
    width: 340,
    borderRadius: 7,
    padding: 13,
    marginBottom: 20,
    gap: 20,
    fontSize: 22,
    // textColor: "black",
    fontWeight: "600",
    borderColor: "grey",
    borderWidth: 2,
  },
  signdata4:{
    marginLeft:210,
    // color: "black",
    fontSize: 16
  },
  signdata5:{
    marginTop:35,
    height: 65,
    borderWidth: 1,
    borderRadius: 7,
    padding: 15,
    width: 340,
    backgroundColor:  'rgba(0, 0, 255, 0.5)',
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontWeight: "500"
  },
  signdata6: {
    marginTop: 25,
    borderBottomWidth:1,
    width:340,
    marginBottom:40,
  },
  
  imagess:{
    flex: 1,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  im:{
    height: 40,
    width:40,
  },
  
  signdata7:{
    marginTop:20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "900",
    // color: "black",
  },
  signdata8:{
    marginTop:20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "900",
    color: 'rgba(0, 0, 255, 0.5)',
  },

  head:{
    marginTop:30,
  },

})

export default SigninScreen