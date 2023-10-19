import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import PermissionDataField from '../components/permissionScreenComponents/PermissionsDataFields';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const w = (windowWidth * 95) / 100;

const PermissionScreen = () => {
  console.log(w);
  return (
    <>
      <View style={styles.bgCont}>
        <Image
          source={require('../images/bg.png')}
          style={{width: '100%', height: '100%', opacity: 0.2}}
        />
      </View>

      <View style={styles.mainCont}>
        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginTop: '10%',
          }}>
          {/* ##### Profile Image  ##### */}

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 80,
              borderColor: '#18468C',
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            resizeMode="center"
          />
        </View>
        {/* ##### Name and Role Container View  ##### */}
        <View style={styles.nameAndRoleCont}>
          <Text style={{color: '#18468C', fontSize: 30, fontWeight: 'bold'}}>
            John Wick
          </Text>
          <Text style={{color: '#000', fontSize: 15}}>App Developer</Text>
        </View>
        {/* ##### Permission Body  ##### */}

        <View style={styles.permissionBody}>
          <View
            style={{
              width: '100%',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              overflow: 'hidden',
              marginBottom: '28%',
              borderWidth: 1,
              borderColor: '#ccc',
            }}>
            {/* ##### Permission title Container View  ##### */}

            <View
              style={{
                backgroundColor: '#18468C',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                width: '100%',
              }}>
              <Text style={{fontSize: 16, color: '#fff', padding: 14}}>
                Permissions
              </Text>
            </View>

            {/* ##### User all Permission ##### */}

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}>
              <PermissionDataField
                textColor={'#000'}
                bgc={'#fff'}
                marginTop={0}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                width={w}
                title={'Banner'}
              />
              <PermissionDataField
                textColor={'#000'}
                bgc={'#fff'}
                marginTop={0}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                width={w}
                title={'Banner'}
              />

              <PermissionDataField
                textColor={'#000'}
                bgc={'#fff'}
                marginTop={0}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                width={w}
                title={'Banner'}
              />
              <PermissionDataField
                textColor={'#000'}
                bgc={'#fff'}
                marginTop={0}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                width={w}
                title={'Banner'}
              />
              <PermissionDataField
                textColor={'#000'}
                bgc={'#fff'}
                marginTop={0}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                width={w}
                title={'Banner'}
              />
              <PermissionDataField
                textColor={'#000'}
                bgc={'#fff'}
                marginTop={0}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                width={w}
                title={'Banner'}
              />
              <PermissionDataField
                textColor={'#000'}
                bgc={'#fff'}
                marginTop={0}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                width={w}
                title={'Banner'}
              />
              <PermissionDataField
                textColor={'#000'}
                bgc={'#fff'}
                marginTop={0}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                width={w}
                title={'Banner'}
              />
              <PermissionDataField
                textColor={'#000'}
                bgc={'#fff'}
                marginTop={0}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                width={w}
                title={'Banner'}
              />
              <PermissionDataField
                textColor={'#000'}
                bgc={'#fff'}
                marginTop={0}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                width={w}
                title={'Banner'}
              />
              <PermissionDataField
                textColor={'#000'}
                bgc={'#fff'}
                marginTop={0}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                width={w}
                title={'Banner'}
              />
              <PermissionDataField
                textColor={'#000'}
                bgc={'#fff'}
                marginTop={0}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                width={w}
                title={'Banner'}
              />
              <PermissionDataField
                textColor={'#000'}
                bgc={'#fff'}
                marginTop={0}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                width={w}
                title={'Banner'}
              />
              <PermissionDataField
                textColor={'#000'}
                bgc={'#fff'}
                marginTop={0}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                width={w}
                title={'Banner'}
              />
              <PermissionDataField
                textColor={'#000'}
                bgc={'#ccc'}
                marginTop={0}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                width={w}
                title={'Banner'}
              />
            </ScrollView>
          </View>
        </View>
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
    alignItems: 'center',
  },
  nameAndRoleCont: {
    width: '100%',
    height: '8%',
    marginTop: '4%',
    alignItems: 'center',
  },
  permissionBody: {
    flex: 1,
    overflow: 'hidden',
    width: '95%',
    alignItems: 'center',
    marginTop: '6%',
    borderRadius: 10,
    marginBottom: '10%',
  },
});

export default PermissionScreen;
