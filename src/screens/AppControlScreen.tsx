import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import DashboardSettings from '../components/DashboardSettings';
import NotAuthorizeModal from '../components/modals/NotAuthorizeModal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AppControlScreen = () => {
  const [switchIsEnabled, setSwitchIsEnabled] = useState(false);

  let temp;
  useEffect(() => {
    console.log(switchIsEnabled);
  }, [switchIsEnabled]);
  const toggleSwitch = () => {
    // setSwitchIsEnabled(!switchIsEnabled);
    temp = switchIsEnabled;

    if (temp == true) {
      setSwitchIsEnabled(false);
    } else {
      setSwitchIsEnabled(true);
    }
    console.log(switchIsEnabled);
  };
  return (
    <>
      <NotAuthorizeModal
        height={windowHeight}
        width={windowWidth}
        visible={false}
      />
      <View style={styles.bgCont}>
        <Image
          source={require('../images/bg.png')}
          style={{width: '100%', height: '100%', opacity: 0.2}}
        />
      </View>
      <View style={styles.mainCont}>
        {/* ######## appbar #######*/}

        <View style={styles.appbar}>
          <Text style={{color: '#18468C', fontSize: 18, fontWeight: 'bold'}}>
            Dashboard
          </Text>
        </View>

        {/* ######## Body #######*/}
        <ScrollView
          contentContainerStyle={{alignItems: 'center', paddingBottom: '5%'}}>
          {/* ######## Banner Settings #######*/}

          <DashboardSettings
            title={'Banner'}
            switchIsEnabled={switchIsEnabled}
            toggleSwitch={toggleSwitch}
            switchOnTrackColor={'#EAEEFE'}
            activeThumbColor={'#18468C'}
            bgColor={'#fff'}
            marginTop={'5%'}
            textSize={16}
            textColor={'#000'}
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
          />

          {/* ######## Word of the day Settings #######*/}

          <View
            style={{
              flex: 1,
              borderWidth: 0,
              marginTop: '5%',
              borderRadius: 10,
              backgroundColor: '#fff',
            }}>
            <DashboardSettings
              title={'Word of the day'}
              switchIsEnabled={switchIsEnabled}
              toggleSwitch={toggleSwitch}
              switchOnTrackColor={'#fff'}
              activeThumbColor={'#F68B29'}
              bgColor={'#18468C'}
              marginTop={'0%'}
              textSize={16}
              textColor={'#fff'}
              borderBottomLeftRadius={0}
              borderBottomRightRadius={0}
              borderTopLeftRadius={8}
              borderTopRightRadius={8}
            />
            {/* ******* Definition Settings *******  */}
            <DashboardSettings
              title={'Definition'}
              switchIsEnabled={switchIsEnabled}
              toggleSwitch={toggleSwitch}
              switchOnTrackColor={'#EAEEFE'}
              activeThumbColor={'#18468C'}
              bgColor={'#fff'}
              marginTop={'0%'}
              textSize={14}
              textColor={'#000'}
              borderBottomLeftRadius={0}
              borderBottomRightRadius={0}
              borderTopLeftRadius={0}
              borderTopRightRadius={0}
            />
            {/* ******* Example Usage Settings *******  */}
            <DashboardSettings
              title={'Example Usage'}
              switchIsEnabled={switchIsEnabled}
              toggleSwitch={toggleSwitch}
              switchOnTrackColor={'#EAEEFE'}
              activeThumbColor={'#18468C'}
              bgColor={'#fff'}
              marginTop={'0%'}
              textSize={14}
              textColor={'#000'}
              borderBottomLeftRadius={10}
              borderBottomRightRadius={10}
              borderTopLeftRadius={0}
              borderTopRightRadius={0}
            />
          </View>

          {/* ######## Main Categories Settings #######*/}

          <View
            style={{
              flex: 1,
              borderWidth: 0,
              marginTop: '5%',
              borderRadius: 10,
            }}>
            <DashboardSettings
              title={'Main Categories'}
              switchIsEnabled={switchIsEnabled}
              toggleSwitch={toggleSwitch}
              switchOnTrackColor={'#fff'}
              activeThumbColor={'#F68B29'}
              bgColor={'#18468C'}
              marginTop={'0%'}
              textSize={16}
              textColor={'#fff'}
              borderBottomLeftRadius={0}
              borderBottomRightRadius={0}
              borderTopLeftRadius={8}
              borderTopRightRadius={8}
            />
            {/* ******* Exam Settings *******  */}
            <DashboardSettings
              title={'Exam Settings'}
              switchIsEnabled={switchIsEnabled}
              toggleSwitch={toggleSwitch}
              switchOnTrackColor={'#EAEEFE'}
              activeThumbColor={'#18468C'}
              bgColor={'#fff'}
              marginTop={'0%'}
              textSize={14}
              textColor={'#000'}
              borderBottomLeftRadius={0}
              borderBottomRightRadius={0}
              borderTopLeftRadius={0}
              borderTopRightRadius={0}
            />
            {/* ******* Online Course Settings *******  */}
            <DashboardSettings
              title={'Online Course'}
              switchIsEnabled={switchIsEnabled}
              toggleSwitch={toggleSwitch}
              switchOnTrackColor={'#EAEEFE'}
              activeThumbColor={'#18468C'}
              bgColor={'#fff'}
              marginTop={'0%'}
              textSize={14}
              textColor={'#000'}
              borderBottomLeftRadius={0}
              borderBottomRightRadius={0}
              borderTopLeftRadius={0}
              borderTopRightRadius={0}
            />
            {/* ******* FMT Settings *******  */}
            <DashboardSettings
              title={'FMT'}
              switchIsEnabled={switchIsEnabled}
              toggleSwitch={toggleSwitch}
              switchOnTrackColor={'#EAEEFE'}
              activeThumbColor={'#18468C'}
              bgColor={'#fff'}
              marginTop={'0%'}
              textSize={14}
              textColor={'#000'}
              borderBottomLeftRadius={10}
              borderBottomRightRadius={10}
              borderTopLeftRadius={0}
              borderTopRightRadius={0}
            />
          </View>

          {/* ******* Mock Test Settings *******  */}
          <DashboardSettings
            title={'Mock Test'}
            switchIsEnabled={switchIsEnabled}
            toggleSwitch={toggleSwitch}
            switchOnTrackColor={'#EAEEFE'}
            activeThumbColor={'#18468C'}
            bgColor={'#fff'}
            marginTop={'5%'}
            textSize={14}
            textColor={'#000'}
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
          />
          {/* ******* Latest Blog Settings *******  */}
          <DashboardSettings
            title={'Latest Blog'}
            switchIsEnabled={switchIsEnabled}
            toggleSwitch={toggleSwitch}
            switchOnTrackColor={'#EAEEFE'}
            activeThumbColor={'#18468C'}
            bgColor={'#fff'}
            marginTop={'5%'}
            textSize={14}
            textColor={'#000'}
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
          />
          {/* ******* Beepedia Settings *******  */}
          <DashboardSettings
            title={'Beepedia'}
            switchIsEnabled={switchIsEnabled}
            toggleSwitch={toggleSwitch}
            switchOnTrackColor={'#EAEEFE'}
            activeThumbColor={'#18468C'}
            bgColor={'#fff'}
            marginTop={'5%'}
            textSize={14}
            textColor={'#000'}
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
          />
          {/* ******* Testimonials Settings *******  */}
          <DashboardSettings
            title={'Testimonials'}
            switchIsEnabled={switchIsEnabled}
            toggleSwitch={toggleSwitch}
            switchOnTrackColor={'#EAEEFE'}
            activeThumbColor={'#18468C'}
            bgColor={'#fff'}
            marginTop={'5%'}
            textSize={14}
            textColor={'#000'}
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
          />
          {/* ******* YT Session Settings *******  */}
          <DashboardSettings
            title={'YT Session'}
            switchIsEnabled={switchIsEnabled}
            toggleSwitch={toggleSwitch}
            switchOnTrackColor={'#EAEEFE'}
            activeThumbColor={'#18468C'}
            bgColor={'#fff'}
            marginTop={'5%'}
            textSize={14}
            textColor={'#000'}
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
          />
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  bgCont: {
    flex: 1,
  },
  mainCont: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    zIndex: 999,
  },
  appbar: {
    height:
      windowWidth < 400 ? (windowHeight * 6) / 100 : (windowHeight * 7) / 100,
    backgroundColor: '#fff',
    borderBlockColor: '#000',
    elevation: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppControlScreen;
