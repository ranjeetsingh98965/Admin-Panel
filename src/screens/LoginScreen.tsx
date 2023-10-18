import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import snackbar from '../components/snackbar';
import loginWithEmailAndPasswordAction from '../store/actions/loginWithEmailAndPasswordAction';
import HexagonLoading from '../components/LoadingIndicator/HexagonLoading';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = props => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const loginUserWithEmailAndPassword = async () => {
    setLoading(true);
    const data = {
      email: email,
      password: password,
    };
    if (email != null && email != '' && password != null && password != '') {
      const res = await loginWithEmailAndPasswordAction(data);
      if (res == 'success') {
        setTimeout(() => {
          setLoading(false);
          props.navigation.navigate('tab');
        }, 2000);
        setTimeout(() => {
          snackbar('Login Successfully.');
        }, 2500);
      } else if (res == 'passErr') {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setTimeout(() => {
          snackbar('Incorrect Password!');
        }, 2100);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setTimeout(() => {
          snackbar(`Account doesn't exist with this email!`);
        }, 2100);
      }
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setTimeout(() => {
        snackbar('Please enter all the fields!');
      }, 2100);
    }
  };

  return (
    <>
      <HexagonLoading loading={loading} />
      {/* ######## Background #######*/}

      <View style={styles.bgContainer}>
        <Image
          source={require('../images/bg.png')}
          style={{width: '100%', height: '100%', opacity: 0.2}}
        />
      </View>

      <View style={styles.mainCont}>
        {/* ########################################  flex Container 1 */}

        <View
          style={{
            // flex: 0.6,
            height: '30%',
            width: '100%',
            // backgroundColor: 'red',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          {/* ######## LOGO #######*/}
          <View style={{width: '80%', height: '60%'}}>
            <Image
              source={require('../images/ixambeeLogo.png')}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* ########################################  flex Container 2 */}

        <View
          style={{
            flex: 2,
            // backgroundColor: 'blue',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          {/* ######## Admin Login Text #######*/}

          <View style={styles.textCont}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingLeft: '8%',
                color: '#18468C',
              }}>
              Admin Login
            </Text>
          </View>

          {/* ######## Email Input Field #######*/}

          <View style={styles.emailInputCont}>
            <Icon name="mail" size={30} color="#9A9A9A" />
            <View style={{flex: 1}}>
              <TextInput
                placeholder="Email"
                placeholderTextColor={'#9A9A9A'}
                style={styles.emailInputField}
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>
          </View>

          {/* ######## Password Input Field #######*/}

          <View style={styles.passInputCont}>
            <Icon name="lock" size={30} color="#9A9A9A" />
            <View style={{flex: 1}}>
              <TextInput
                placeholder="Password"
                placeholderTextColor={'#9A9A9A'}
                secureTextEntry={true}
                style={styles.emailInputField}
                value={password}
                onChangeText={text => setPassword(text)}
              />
            </View>
          </View>

          {/* ######## Forgot Password Text #######*/}

          <View style={styles.forgotText}>
            <Text style={{fontSize: 14, color: '#18468C'}}>
              Forgot Password?
            </Text>
          </View>

          {/* ######## Login Btn #######*/}

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={loginUserWithEmailAndPassword}>
            <Text style={{color: '#fff', fontSize: 15}}>Login</Text>
          </TouchableOpacity>

          {/* ######## Or Login with Text #######*/}

          <View style={styles.anotherLoginText}>
            <Text style={{fontSize: 14, color: '#000'}}>Or Login with</Text>
          </View>

          {/* ######## Login with Google Btn #######*/}

          <TouchableOpacity style={styles.googleLoginBtn}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '2%',
              }}>
              <Image
                source={require('../images/googleLogo.png')}
                style={{width: 22, height: 22}}
              />
            </View>
            <View
              style={{
                flex: 8,
                paddingRight: '8.5%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#000', fontSize: 15}}>
                Login with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  bgContainer: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCont: {
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    // backgroundColor: 'green',
  },

  textCont: {
    marginTop: '10%',
    width: '100%',
    alignItems: 'flex-start',
  },
  emailInputCont: {
    marginTop: '5%',
    width: '84%',
    borderBottomWidth: 1,
    borderColor: '#9A9A9A',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passInputCont: {
    marginTop: '3%',
    width: '84%',
    borderBottomWidth: 1,
    borderColor: '#9A9A9A',
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailInputField: {
    fontSize: 16,
    color: '#000',
    paddingLeft: 10,
  },
  forgotText: {
    marginTop: '4%',
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: '8%',
  },
  loginBtn: {
    marginTop: '12%',
    backgroundColor: '#18468C',
    width: '84%',
    paddingVertical: '3.5%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  anotherLoginText: {
    marginTop: '4%',
  },
  googleLoginBtn: {
    marginTop: '4%',
    backgroundColor: '#fff',
    width: '84%',
    paddingVertical: '3.5%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    elevation: 3,
  },
});

export default LoginScreen;
