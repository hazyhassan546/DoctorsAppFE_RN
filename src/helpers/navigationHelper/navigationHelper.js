import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Toast from 'react-native-toast-message';
import SideMenu from './sideMenu';
/// Drawer screens
import Home from '../../screens/home';

//// Stack screens out of drawer.
import Welcome from '../../screens/welcome';
import Login from '../../screens/login';
import Signup from '../../screens/signup';
import ForgetPassword from '../../screens/forgetPassword';
import DoctorListing from '../../screens/doctorListing';
import DoctorDetail from '../../screens/doctorDetail';
import Dashboard from '../../screens/dashboard';
import { AsyncStorage } from 'react-native';
import UserProfile from '../../screens/UserProfile/UserProfile';
import History from '../../screens/History/History';
import Setting from '../../screens/Setting/Setting';
import BookAppointment from '../../screens/BookAppointmentScreens/BookAppointment';
import { store } from '../../redux/store';
// here is our app screen stack
const ApplicationStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// App extra screens stack

function AuthStack() {
  return (
    <ApplicationStack.Navigator>

    </ApplicationStack.Navigator>);
}

function AppStack() {
  const AppState = store.getState();
  // alert(JSON.stringify(AppState));
  const initialRouteName = AppState?.user ? "DrawerMenus" : "Welcome";
  return (
    <ApplicationStack.Navigator initialRouteName={initialRouteName}>
      <ApplicationStack.Screen
        headerMode="none"
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <ApplicationStack.Screen
        headerMode="none"
        name="UserProfile"
        component={UserProfile}
        options={{ headerShown: false }}
      />

      <ApplicationStack.Screen
        headerMode="none"
        name="BookAppointment"
        component={BookAppointment}
        options={{ headerShown: false }}
      />

      <ApplicationStack.Screen
        headerMode="none"
        name="History"
        component={History}
        options={{ headerShown: false }}
      />

      <ApplicationStack.Screen
        headerMode="none"
        name="Setting"
        component={Setting}
        options={{ headerShown: false }}
      />

      <ApplicationStack.Screen
        headerMode="none"
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <ApplicationStack.Screen
        headerMode="none"
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
      <ApplicationStack.Screen
        headerMode="none"
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <ApplicationStack.Screen
        headerMode="none"
        name="DoctorListing"
        component={DoctorListing}
        options={{ headerShown: false }}
      />

      <ApplicationStack.Screen
        headerMode="none"
        name="DoctorDetail"
        component={DoctorDetail}
        options={{ headerShown: false }}
      />

      <ApplicationStack.Screen
        headerMode="none"
        name="DrawerMenus"
        component={DrawerMenus}
        options={{ headerShown: false }}
      />
    </ApplicationStack.Navigator>
  );
}

// this function returns side menu of our app.
function DrawerMenus() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={{
        backgroundColor: '#fff',
      }}
      drawerContent={props => {
        return <SideMenu {...props} />;
      }}>
      <ApplicationStack.Screen
        headerMode="none"
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
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
