import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <View>
          <Text> App </Text>
        </View>
      </NavigationContainer>
    );
  }
}
export default App;
