import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Toast from 'react-native-toast-message';
import SideMenu from './sideMenu';
/// Drawer screens
import Home from '../../screens/home';

//// Stack screens out of drawer.
import Welcome from '../../screens/welcome';
// here is our app screen stack
const ApplicationStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// App extra screens stack

function AppStack() {
  return (
    <ApplicationStack.Navigator initialRouteName={'Welcome'}>
      <ApplicationStack.Screen
        headerMode="none"
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <ApplicationStack.Screen
        headerMode="none"
        name="DrawerMenus"
        component={DrawerMenus}
        options={{headerShown: false}}
      />
    </ApplicationStack.Navigator>
  );
}

// this function returns side menu of our app.
function DrawerMenus() {
  return (
    <Drawer.Navigator
      initialRouteName="DrawerHome"
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={{
        backgroundColor: '#fff',
      }}
      drawerContent={props => {
        return <SideMenu {...props} />;
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        headerMode="none"
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <AppStack />
      <Toast ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}

export default Navigator;
