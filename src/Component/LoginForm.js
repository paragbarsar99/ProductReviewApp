import React, {useState, useContext, useEffect} from 'react';
import {Context as AuthContext} from '../Context/AuthContext';
import {View, StyleSheet, ToastAndroid,Button, TextInput} from 'react-native';
import InputForm from '../Component/InputForm';
import FormButton from './FormButton';
import SocialButton from './SocialButton';

const LoginForm = ({text, actionButton, buttonlable}) => {
  const {
    state: {errormessage},
  } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  useEffect(() => {
    if (errormessage) {
      if (Platform.OS === 'android') {
        ToastAndroid.show(errormessage, ToastAndroid.SHORT);
      } else {
        AlertIOS.alert(errormessage);
      }
    }
  }, [errormessage]);

  return (
    <View>
      <Text style={styles.Text}>{text}</Text>
      <TextInput
        style={styles.email}
        value={email}
        onChangeText={setEmail}></TextInput>

      <TextInput
        style={styles.password}
        value={password}
        onChangeText={setPassword}></TextInput>
      <Button
        style={styles.Button}
        title={buttonlable}
        onPress={() => actionButton}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
  },
  Text: {
    fontSize: 18,
    alignSelf: 'center',
    padding: 5,
  },
  email: {
    alignSelf: 'center',
    fontSize: 15,
    backgroundColor: 'gray',
  },
  password: {
    alignSelf: 'center',
    fontSize: 15,
    backgroundColor: 'gray',
  },
  Button: {
    borderRadius: 5,
    padding: 5,
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: '#FF7F7F',
  },
  errormessage: {
    alignSelf: 'center',
    padding: 10,
  },
});

export default LoginForm;

{
  /* <InputForm
        icontype={'user'}
        placeholdertext="Email"
        lableinput={email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}></InputForm>

      <InputForm
        icontype={'password'}
        placeholdertext="password"
        lableinput={password}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setPassword}></InputForm>
      <FormButton
        ButtonTitle = {buttonlable}
        onPress={() => actionButton(email, password)}></FormButton> */
}
