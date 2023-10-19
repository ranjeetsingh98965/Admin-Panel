import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import UserDetailField from '../components/UserDetailField';
import UpdateProfileModal from '../components/modals/UpdateProfileModal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfileScreen = () => {
  const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);

  const updateProfile = () => {
    setShowUpdateProfileModal(true);
  };

  return (
    <>
      {/* ######## UpdateProfileModal #######*/}
      <UpdateProfileModal
        visible={showUpdateProfileModal}
        width={windowWidth}
        height={windowHeight}
        setShowUpdateProfileModal={setShowUpdateProfileModal}
      />
      <View style={styles.bgCont}>
        <Image
          source={require('../images/bg.png')}
          style={{width: '100%', height: '100%', opacity: 0.2}}
        />
      </View>

      <View style={styles.mainCont}>
        {/* ######## Appbar #######*/}
        <View style={styles.appbar}>
          <Text style={{color: '#18468C', fontSize: 18, fontWeight: 'bold'}}>
            Profile
          </Text>
        </View>

        {/* ######## Body #######*/}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            height: windowHeight,
            alignItems: 'center',
          }}>
          {/* ######## Profile Image #######*/}
          <View style={styles.imgBorder}>
            <View style={styles.profileImg}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                }}
                style={{width: '100%', height: '100%', borderRadius: 120}}
                resizeMode="center"
              />
            </View>
          </View>

          {/* ######## User Details Fields #######*/}
          <UserDetailField
            title={'First Name'}
            name={'John'}
            width={windowWidth}
            height={windowHeight}
          />
          <UserDetailField
            title={'Last Name'}
            name={'Wick'}
            width={windowWidth}
            height={windowHeight}
          />
          <UserDetailField
            title={'Email'}
            name={'john@gmail.com'}
            width={windowWidth}
            height={windowHeight}
          />
          <UserDetailField
            title={'Phone No.'}
            name={'+91 ' + '9999999999'}
            width={windowWidth}
            height={windowHeight}
          />

          {/* ######## Update and Logout Btn Container #######*/}

          <TouchableOpacity style={styles.updateBtn} onPress={updateProfile}>
            <Text style={{color: '#fff'}}>UPDATE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutBtn}>
            <Text style={{color: '#fff'}}>LOGOUT</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bgCont: {
    width: windowWidth,
    height: windowHeight,
  },
  mainCont: {
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    zIndex: 999,
  },
  appbar: {
    height:
      windowWidth < 400 ? (windowHeight * 6) / 100 : (windowHeight * 7) / 100,
    backgroundColor: '#fff',
    elevation: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBorder: {
    width: 180,
    height: 180,
    borderRadius: 120,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#18468C',
    marginTop:
      windowWidth < 400 ? (windowWidth * 10) / 100 : (windowWidth * 6) / 100,
    marginBottom:
      windowWidth < 400 ? (windowWidth * 5) / 100 : (windowWidth * 3) / 100,
    elevation: 5, // new effect by applying elevation <<<<---------------------
  },
  profileImg: {
    width: '75%',
    height: '75%',
    borderRadius: 120,
  },
  updateBtn: {
    backgroundColor: '#18468C',
    width: (windowWidth * 95) / 100,
    height:
      windowWidth < 400 ? (windowHeight * 6) / 100 : (windowHeight * 7) / 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowWidth < 400 ? '9%' : '4%',
    elevation: 10,
  },
  logoutBtn: {
    backgroundColor: '#F68B29',
    width: (windowWidth * 95) / 100,
    height:
      windowWidth < 400 ? (windowHeight * 6) / 100 : (windowHeight * 7) / 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowWidth < 400 ? '6%' : '4%',
    elevation: 10,
  },
});

export default ProfileScreen;
