import React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import Icon from 'react-native-vector-icons/dist/Feather';
import {NavigationContainer} from '@react-navigation/native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import PermissionScreen from './src/screens/PermissionScreen';
import AppControlScreen from './src/screens/AppControlScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './src/screens/ProfileScreen';
import HexagonLoading from './src/components/LoadingIndicator/HexagonLoading';

const Tabs = AnimatedTabBarNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  function Tab() {
    return (
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: '#18468C',
          inactiveTintColor: '#000',
          activeBackgroundColor: '#E6EAFF',
        }}
        appearance={{
          tabBarBackground: '#fff',
          tabBarActiveBackgroundColor: '#E6EAFF',
          horizontalPadding: 20,
          dotSize: 'small',
        }}>
        <Tabs.Screen
          name="Permission"
          component={PermissionScreen}
          // style={{width: 20, height: 10}}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Icon
                name="shield"
                size={size ? size : 24}
                color={focused ? color : '#000'}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="App Control"
          component={AppControlScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Icon
                name="tool"
                size={size ? size : 24}
                color={focused ? color : '#000'}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Icon
                name="user"
                size={size ? size : 24}
                color={focused ? color : '#000'}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="tab"
          component={Tab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <SplashScreen />
    // <LoginScreen />
    // <PermissionScreen />
    // <AppControlScreen />
    // <ProfileScreen />
  );
};

export default App;
