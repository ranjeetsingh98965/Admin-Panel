import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const UserDetailField = props => {
  let h =
    props.width < 400 ? (props.height * 6.5) / 100 : (props.height * 7.5) / 100;
  let w = (props.width * 95) / 100;
  return (
    <View
      style={{
        ...styles.detailField,
        width: w,
        height: h,
        marginTop: props.width < 400 ? '4%' : '3%',
      }}>
      <Text style={{fontSize: 12, color: '#18468C', fontWeight: '500'}}>
        {props.title}
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#000',
        }}>
        {props.name}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  detailField: {
    backgroundColor: '#fff',
    paddingHorizontal: '3%',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 10,
  },
});
export default UserDetailField;
