import React, {useCallback} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Context as AuthContext} from '../Context/AuthContext';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Loading = () => {
  const {AutoLogin} = React.useContext(AuthContext);
  React.useEffect(() => {
    AutoLogin();
  }, []);
  return (
    <View style={style.container}>
      <Image style={style.image} source={require('../assets/cabsharing.png')} />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#26262D',
    height: windowHeight,
    width: windowWidth,
  },
  image: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    marginVertical: 160,
  },
});
export default Loading;
