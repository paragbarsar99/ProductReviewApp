import React, {useState, useContext,useEffect} from 'react';
import {Text} from 'react-native-elements'
import {
  TouchableOpacity,
  StyleSheet,
  } from 'react-native';
import {Context as AuthContext} from '../Context/AuthContext';
import SocialButton from '../Component/SocialButton';
import LoginForm from '../Component/LoginForm';

const LoginScreen = ({navigation}) => {
  const {SignIn,clearErrorMessage} = useContext(AuthContext);
  useEffect(() =>{
    navigation.addListener('blur',() =>{
       clearErrorMessage(); 
    })
})
  
  return (
    <>
      <LoginForm
        text={'Login For Review App'}
        actionButton={SignIn}
        buttonlable={'SignIn'}
      />
    

      <TouchableOpacity onPress={ () =>navigation.navigate('SignupScreen')}>
        <Text style={{alignSelf: 'center', padding: 10}}>
          have not account?click here{' '}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;


  {/* <SocialButton
        ButtonTitle = "Google Login"
        btnType = 'google'
        actionButton = {() =>{
          console.log("Google Login") 
        }}
      />
      <SocialButton
        ButtonTitle = "facebook Login"
        btnType = 'facebook'
        actionButton = {() =>{
           console.log("facebook Login") 
        }}
      />
       */}