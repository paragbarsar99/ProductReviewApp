import React, {useEffect} from 'react';
import {View,TextInput, TouchableOpacity, StyleSheet,Dimensions} from 'react-native';
import {AntDesign} from 'react-native-vector-icons';
const  windowWidth = Dimensions.get("window").width
const  windowHeight = Dimensions.get("window").height
  const InputForm = ({lableinput, placeholdertext, icontype, ...rest}) => {
  return (
    <View style = {styles.inputContainer}>
      <View style= {styles.iconStyle}>
        <AntDesign name={icontype} size={25} color={'#666'} />
      </View>
      <TextInput
        style = {styles.input}
        placeholder={placeholdertext}
        placeholderTextColor={'#666'}
        value={lableinput}
        {...rest}>

        </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer:{
   marginTop:5,
   marginBottom:10,
   width:'100%',
   height:WindowHeight/15,
   borderColor:"#ccc",
   borderRadius:3,
   borderWidth:1,
   flexDirection:'row',
   alignItems:'center',
   backgroundColor:'#fff'
  },
  iconStyle:{
    padding:10,
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderRightColor:'#ccc',
    borderRightWidth:1,
    width:50
  },
  input:{
   padding:10,
   flex:1,
   fontSize:16,
   fontFamily:'Lato-Regular',
   color:'#333',
   justifyContent:'center',
   alignItems:'center'
  },
  inputField:{
    padding:10,
    marginTop:5,
    marginBottom:10,
    width:10,
    height:15,
    fontSize:16,
    borderRadius:8,
    borderWidth:1
  }
});

export default InputForm;
