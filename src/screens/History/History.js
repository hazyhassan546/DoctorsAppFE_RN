import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class History extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: 10,
          }}
          onPress={() => {
            this.props.navigation.goBack();
          }}>
          Work in Progress
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
