import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('login');
    }, 3000);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../images/splash.png')}
          style={{width: '100%', height: '100%'}}
        />
        <View style={styles.logo}>
          <Image
            source={require('../images/ixambeeLogo.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '60%',
    height: '15%',
    position: 'absolute',
    zIndex: 999,
  },
});

export default SplashScreen;
