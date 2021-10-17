import React from 'react';
import {TouchableOpacity, StyleSheet,Dimensions} from 'react-native';
const  windowWidth = Dimensions.get("window").width
const  windowHeight = Dimensions.get("window").height
const FormButton = ({ButtonTitle, ...rest}) => {
  

  return (
    
    <TouchableOpacity style = {styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{ButtonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 3,
    padding:10,
    width:'100%',
    height: 15,
    marginTop: 3,
    marginRight: 3,
    backgroundColor: '#2e64e5',
    alignItems:'center',
    justifyContent:'center',

  },
  buttonText:{
   alignItems:'center',
   fontSize:18,
   fontFamily:'Lato-Regular',
   fontWeight:'bold',
   color:'#ffffff'
  }
});

export default FormButton