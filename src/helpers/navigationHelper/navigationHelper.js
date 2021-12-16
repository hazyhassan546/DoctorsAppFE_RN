import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Toast from 'react-native-toast-message';

/// Drawer screens
import Home from '../../screens/home';

//// Stack screens out of drawer.

// here is our app screen stack
const ApplicationStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// App extra screens stack

function AppStack() {
  return (
    <ApplicationStack.Navigator initialRouteName={'WalkThrough'}>
      <ApplicationStack.Screen
        headerMode="none"
        name="WalkThrough"
        component={WalkThrough}
        options={{headerShown: false}}
      />
      <ApplicationStack.Screen
        headerMode="none"
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </ApplicationStack.Navigator>
  );
}

// this function returns side menu of our app.
function DrawerMenu() {
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
        name="DrawerHome"
        component={AppStack}
        headerMode="none"
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <DrawerMenu />
      <Toast ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}

export default Navigator;
