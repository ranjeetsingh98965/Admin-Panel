import React from 'react';
import {View, Text, Switch} from 'react-native';

const DashboardSettings = (props: {
  bgColor: any;
  marginTop: any;
  borderWidth: any;
  textSize: any;
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
  switchOnTrackColor: any;
  switchIsEnabled: boolean | undefined;
  toggleSwitch: ((value: boolean) => void | Promise<void>) | null | undefined;
}) => {
  return (
    <View
      style={{
        backgroundColor: props.bgColor,
        width: '95%',
        marginTop: props.marginTop,
        padding: '3%',
        flexDirection: 'row',
        borderBottomRightRadius: props.borderBottomRightRadius,
        borderBottomLeftRadius: props.borderBottomLeftRadius,
        borderTopLeftRadius: props.borderTopLeftRadius,
        borderTopRightRadius: props.borderTopRightRadius,
        elevation: 10,
      }}>
      <View
        style={{
          flex: 6,
          justifyContent: 'center',
          paddingLeft: 10,
        }}>
        <Text style={{color: props.textColor, fontSize: props.textSize}}>
          {props.title}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Switch
          trackColor={{false: '#767577', true: props.switchOnTrackColor}}
          thumbColor={
            props.switchIsEnabled ? props.activeThumbColor : '#f4f3f4'
          }
          onValueChange={props.toggleSwitch}
          value={props.switchIsEnabled}
        />
      </View>
    </View>
  );
};
export default DashboardSettings;
