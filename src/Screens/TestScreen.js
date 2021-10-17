import React from 'react';
import {View ,StyleSheet,Button,Text} from 'react-native'


const TestScreen = ({navigation}) =>{
  return (
    <View>
      <Text style ={styles.text}>first React-native cli app</Text>
     <Button title= "Go to WelcomeScreen" onPress= {() => navigation.navigate("WelcomeScreen")}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
     text:{
       alignSelf:'center',
       fontSize:30,
       
     }
})

export default TestScreen;