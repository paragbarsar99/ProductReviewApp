import React, {useContext, useEffect} from 'react';
import { StyleSheet ,TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements'
import LoginForm from '../Component/LoginForm';
import {Context as AuthContext} from '../Context/AuthContext'
const SignupScreen = ({navigation}) => {
  const {SignUp,clearErrorMessage} = useContext(AuthContext);
  useEffect(() =>{
      navigation.addListener('blur',() =>{
         clearErrorMessage();
      })
  })
  return (
    <>
    <LoginForm 
     text = {'SignUp For Review App'}
     actionButton = {SignUp}
     buttonlable = {'Signup'}

     />
     <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={{alignSelf: 'center', padding: 10}}>
          have a account?Login here
        </Text>
      </TouchableOpacity>
   </>
  )
};

const styles = StyleSheet.create({});

export default SignupScreen;
