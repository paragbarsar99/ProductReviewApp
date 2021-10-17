import React from 'react';
import {View ,StyleSheet} from 'react-native'
import {Button,Text} from 'react-native-elements'
import {Context as AuthContext} from '../Context/AuthContext'

const WelcomeScreen = ({navigation}) =>{
  const {SignOut} = React.useContext(AuthContext);
  return (
    <View>
      <Text style ={styles.text}>first React-native cli app</Text>
     <Button title= "Go to TestScreen" onPress= {() => navigation.navigate("TestScreen")}></Button>
     <Button title = "SignOut" onPress= {SignOut}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
     text:{
       alignSelf:'center',
       fontSize:30
     }
})

export default WelcomeScreen;