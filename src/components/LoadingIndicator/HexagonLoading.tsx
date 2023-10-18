import React from 'react';
import {View, Dimensions, StyleSheet, Modal} from 'react-native';
import LottieView from 'lottie-react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HexagonLoading = props => {
  return (
    <Modal visible={props.loading} transparent={true}>
      <View style={styles.bg}>
        <LottieView
          source={require('../../lottie/HexagonLoding.json')}
          autoPlay
          loop
          style={{width: 100, height: 100, zIndex: 99999}}
        />
      </View>
    </Modal>
  );

  //   value ? (
  //     <View style={styles.bg}>
  //       <LottieView
  //         source={require('../../lottie/HexagonLoding.json')}
  //         autoPlay
  //         loop
  //         style={{width: 100, height: 100, zIndex: 99999}}
  //       />
  //     </View>
  //   ) : null;
};
const styles = StyleSheet.create({
  bg: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HexagonLoading;
