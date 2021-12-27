import React, {Component} from 'react';
import {ImageBackground} from 'react-native';
import {View, ScrollView, Text} from 'react-native';
import COLORS from '../../common/colors';
import HomeHeader from '../../components/homeHeader';
import styles from './style';
import Images from '../../common/images';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <HomeHeader />
        <ImageBackground
          source={Images.docBg}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLORS.SECONDARY,
          }}>
          <ScrollView
            style={{
              height: '100%',
              width: '100%',
            }}>

              
            </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
