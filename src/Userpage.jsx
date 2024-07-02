import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

const Userpage = ({route,navigation}) => {

    const {signedInUser} = route.params;
    const handleHome=()=>{
        navigation.navigate("Home")
    }
    const handleSignin=()=>{
        navigation.navigate("SignIN")
    }
    const handleRegister=()=>{
        navigation.navigate("Register")
    }


  return (
    <View style ={{paddingTop: 20,height: 1000,backgroundColor: 'rgba(0, 0, 255, 0.5)',}}>
        <Text style = {{fontSize: 30, textAlign: "center",color: "black",fontStyle: "italic",fontFamily: 'lucida grande',}}>User's Details!!</Text>
        <View style = {{borderWidth: 1, margin: 20,backgroundColor: "lightblue",borderRadius: 10,paddingLeft: 12}}>
            <View style={{ margin: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: '700',color: "black",marginBottom: 10,fontStyle: "italic"}}>Name:             {signedInUser.name}</Text>
                <Text style={{ fontSize: 18,fontWeight: "700",color: "black",marginBottom: 10 ,fontStyle: "italic"}}>Email:              {signedInUser.email}</Text>
                <Text style ={{fontSize: 18,fontWeight: "700",color: "black",marginBottom: 10,fontStyle: "italic" }}>Password:      {signedInUser.password}</Text>
                {/* <Text style ={{fontSize: 18,fontWeight: "700",color: "black",marginBottom: 10,fontStyle: "italic" }}>ConfirmPassword:      {signedInUser.confirmpassword}</Text> */}
            </View>
        </View>
        <View style ={{alignItems: "center",fontStyle: "italic"}}>
            <TouchableOpacity>
            <Text  onPress={handleHome} style={{fontSize: 25,fontStyle: "italic",color: "black",textDecorationLine: "underline",marginBottom: 10}}>Go to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text  onPress={handleSignin} style={{fontSize: 25,fontStyle: "italic",fontweight:"bold",color: "black",textDecorationLine: "underline",marginBottom: 10}}>Go to Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text  onPress={handleRegister} style={{fontSize: 25,fontStyle: "italic",fontweight:"bold",color: "black",textDecorationLine: "underline",marginBottom: 10}}>Go to Register</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  );
};

export default Userpage;
