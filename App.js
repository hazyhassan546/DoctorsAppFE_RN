import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Navigator from './src/helpers/navigationHelper/navigationHelper';
// import { Provider } from "./src/redux/provider";
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from './src/common/colors';

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.SECONDARY}}>
        <StatusBar animated={true} hidden={true} />
        {/* <Provider> */}
        <Navigator />
        {/* </Provider> */}
      </SafeAreaView>
    );
  }
}

export default App;
