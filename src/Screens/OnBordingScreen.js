import React from 'react'
import {Image, StyleSheet} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const OnBordingScreen = ({navigation}) => {
     //here we can make custom componenet like button for DONE button 
  return (
   <Onboarding
    // SkipButtonComponent = {}
    // NextButtonComponent = {}
    // DoneButtonComponent = {}
    onSkip = {() =>{navigation.replace('AuthFlow')}}
    onDone = {() => {navigation.replace('AuthFlow')}}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/circle.png')} />,
          title: 'how you doing',
          subtitle: '✋',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/square.png')} />,
          title: 'Are you ready for sharing',
          subtitle: 'i think it\'s a great opportunity to make friend\'s' 
        },
        {
          backgroundColor: '#e9bceb',
          image: <Image source={require('../assets/triangle.png')} />,
          title: 'so let\'s start this amazing journey',
          subtitle: '✌',
        },
      ]}
    />
  );
};

const styles  = StyleSheet.create({})
export default OnBordingScreen; 
