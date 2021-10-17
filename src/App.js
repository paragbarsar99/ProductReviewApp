import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import TestScreen from './Screens/TestScreen';
import OnBordingScreen from './Screens/OnBordingScreen';
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from './Context/AuthContext';
import Loading from './Component/Loading';
const Stack = createStackNavigator();

const AuthFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          title: 'Signup',
        }}
      />
    </Stack.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          title: 'Welcome',
        }}
      />
      <Stack.Screen
        name="TestScreen"
        component={TestScreen}
        options={{
          title: 'Test',
        }}
      />
    </Stack.Navigator>
  );
};
//regular useFlow
const MainFlow = () => {
  const {
    state: {token},
  } = useContext(AuthContext);
  const [loading, isLoading] = useState(true);
  setInterval(() => {
    isLoading(false);
  }, 2000);
  if (loading) return <Loading />;
  console.log(`token is: ${token}`);
  return (
    <Stack.Navigator headerMode="none">
      {token ? (
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'HomeScreen'}}
        />
      ) : (
        <Stack.Screen
          name="AuthFlow"
          component={AuthFlow}
          options={{title: 'AuthFlow'}}
        />
      )}
    </Stack.Navigator>
  );
};
//First time app launching screen
const OnBordingFlow = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="OnBordingScreen" component={OnBordingScreen} />
      <Stack.Screen name="AuthFlow" component={AuthFlow} />
    </Stack.Navigator>
  );
};

const App = () => {
  return(
    <LoginScreen />
  )
  // const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  // useEffect(() => {
  //   AsyncStorage.getItem('alreadylaunched')
  //     .then(value => {
  //       if (value === null) {
  //         AsyncStorage.setItem('alreadylaunched', 'true');
  //         setIsFirstLaunch(true);
  //       } else {
  //         setIsFirstLaunch(false);
  //       }
  //     })
  //     .catch(err => {
  //       console.log(`error in firstlaunch flow ${err}`);
  //     });
  // }, []);

  // if (isFirstLaunch === null) {
  //   return null;
  // } else if (isFirstLaunch === true) {
  //   return <OnBordingFlow />;
  // } else {
  //   return <MainFlow />;
  // }
};

export default () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </AuthProvider>
  );
};

