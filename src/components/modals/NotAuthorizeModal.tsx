import React from 'react';
import {View, Text, Modal} from 'react-native';
import LottieView from 'lottie-react-native';

const NotAuthorizeModal = props => {
  return (
    <Modal visible={props.visible} transparent={true}>
      {/* ######## modal bg view #######*/}
      <View
        style={{
          height: props.height,
          width: props.width,
          backgroundColor: 'rgba(0,0,0,0.8)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* ######## modal Container view #######*/}
        <View
          style={{
            width: '60%',
            flex: 0.3,
            backgroundColor: '#fff',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              marginTop: 10,
              color: '#18468C',
              fontWeight: 'bold',
            }}>
            Oops!
          </Text>
          <LottieView
            source={require('../../lottie/warning.json')}
            autoPlay
            loop
            style={{width: '40%', height: '50%'}}
          />
          <Text
            style={{
              fontSize: 17,
              marginTop: '1%',
              color: '#000',
              width: '90%',
              textAlign: 'center',
            }}>
            You are not eligible to use this page.
          </Text>
        </View>
      </View>
    </Modal>
  );
};
export default NotAuthorizeModal;
