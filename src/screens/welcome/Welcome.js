import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Button from '../../components/button';
import styles from './style';
export default class Welcome extends Component {
  press = () => {};
  render() {
    return (
      <View style={styles.container}>
        <Button text={'Book App'} onPress={this.press} />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('DrawerMenus');
          }}>
          <Text> textInComponent </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
