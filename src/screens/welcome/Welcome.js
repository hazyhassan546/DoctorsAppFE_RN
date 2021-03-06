import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import images from '../../common/images';
import {commonStyle} from '../../common/styles';
import Button from '../../components/button';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import styles from './style';
export default class Welcome extends Component {
  press = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={images.heart}
          style={{
            width: GetOptimalWidth(80),
            height: GetOptimalHieght(70),
            margin: GetOptimalHieght(20),
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            ...commonStyle.globalTextStyles,
            fontSize: scaledFontSize(24),
          }}>
          {'Find Your Doctor'}
        </Text>
        <Text
          style={{
            ...commonStyle.globalTextStyles,
            fontSize: scaledFontSize(12),
            marginBottom: GetOptimalHieght(80),
          }}>
          {'Get Appointments Easily'}
        </Text>

        <Image
          source={images.doctor}
          style={{
            width: GetOptimalWidth(300),
            height: GetOptimalHieght(360),
            resizeMode: 'contain',
          }}
        />
        <Button text={'Get Started'} onPress={this.press} />
      </View>
    );
  }
}
