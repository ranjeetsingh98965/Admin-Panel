import React from 'react';
import {View, Text} from 'react-native';

const PermissionDataField = props => {
  return (
    <View
      style={{
        backgroundColor: props.bgc,
        borderTopLeftRadius: props.borderTopLeftRadius,
        borderTopRightRadius: props.borderTopRightRadius,
        borderBottomLeftRadius: props.borderBottomLeftRadius,
        borderBottomRightRadius: props.borderBottomRightRadius,
        width: props.width,
        marginTop: props.marginTop,
        elevation: 10,
      }}>
      <Text style={{fontSize: 14, color: props.textColor, padding: 14}}>
        {props.title}
      </Text>
    </View>
  );
};
export default PermissionDataField;
