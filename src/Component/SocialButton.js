import React from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {FontAwesome} from 'react-native-vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SocialButton = ({
  ButtonTitle,
  btnType,
  color,
  backgroundcolor,
  ...rest
}) => {
  let bgColor = backgroundcolor;

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, (backgroundcolor = bgColor)]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <FontAwesome
          name={btnType}
          style={styles.icon}
          size={22}
          color={color}
        />
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, {color}]}>{ButtonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 3,
    padding: 10,
    width: '100%',
    height:15,
    marginTop: 10,
    backgroundColor: '#2e64e5',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
});

export default SocialButton;
