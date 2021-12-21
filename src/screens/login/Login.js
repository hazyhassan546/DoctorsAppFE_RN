import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../../common/colors';
import images from '../../common/images';
import {commonStyle} from '../../common/styles';
import Button from '../../components/button';
import StyledInput from '../../components/styledInput';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import styles from './style';
export default class Login extends Component {
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
            fontWeight: 'bold',
            color: COLORS.PRIMARY,
          }}>
          {'Login'}
        </Text>
        <Text
          style={{
            ...commonStyle.globalTextStyles,
            fontSize: scaledFontSize(12),
            marginTop: GetOptimalHieght(20),
          }}>
          {'Login to your account to get appointments'}
        </Text>
        <StyledInput placeholder={'Email'} />
        <StyledInput placeholder={'Password'} />
        <Text
          style={{
            marginBottom: GetOptimalHieght(60),
            alignSelf: 'flex-end',
            ...commonStyle.globalTextStyles,
            fontSize: scaledFontSize(12),
          }}>
          Forgot password?
        </Text>
        <Button text={'Continue'} onPress={this.press} />

        <Text
          style={{
            ...commonStyle.globalTextStyles,
            fontSize: scaledFontSize(12),
            marginTop: GetOptimalHieght(20),
            position: 'absolute',
            bottom: 20,
          }}>
          {"Don't have account? Sign Up Here"}
        </Text>
      </View>
    );
  }
}
