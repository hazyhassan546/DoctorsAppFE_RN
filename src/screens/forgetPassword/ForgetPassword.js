import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../../common/colors';
import images from '../../common/images';
import {commonStyle} from '../../common/styles';
import Button from '../../components/button';
import StyledInput from '../../components/styledInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import styles from './style';
import Toast from 'react-native-toast-message';
export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  componentDidMount() {
    this.props.setError('');
  }

  componentWillUnmount() {
    this.props.setError('');
  }

  onChangeEmail = text => {
    this.setState({
      email: text,
    });
    this.props.setError('');
  };

  validateEmail = () => {
    const text = this.state.email;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text);
  };

  sendPasswordLink = async () => {
    const {email} = this.state;
    await auth()
      .sendPasswordResetEmail(email)
      .then(function (user) {
        Toast.show({
          type: 'success',
          text1: 'Please check your email.',
        });
      })
      .catch(function (e) {
        console.log(e);
      });
    this.props.navigation.goBack();
  };

  validate = () => {
    const {email} = this.state;
    if (email === '' || !this.validateEmail()) {
      this.props.setError('Email is not valid');
      return;
    }
    this.sendPasswordLink();
  };

  render() {
    const {email, password} = this.state;
    const {error, loading} = this.props.authData;
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
          {'Forget Password'}
        </Text>
        <Text
          style={{
            ...commonStyle.globalTextStyles,
            fontSize: scaledFontSize(12),
            marginTop: GetOptimalHieght(20),
          }}>
          {'Enter your email id to reset password'}
        </Text>
        <View style={{marginTop: 30}}></View>
        <StyledInput
          name={'email'}
          placeholder={'Email'}
          onChange={this.onChangeEmail}
          value={email}
          iconComponent={
            <Ionicons
              name="person"
              size={GetOptimalHieght(20)}
              color={COLORS.PRIMARY}
            />
          }
        />
        <View style={{marginTop: 30}}></View>
        <Button
          text={'Send Password Reset Link'}
          onPress={this.validate}
          loading={loading}
        />
        <Text
          style={{
            ...commonStyle.globalTextStyles,
            fontSize: scaledFontSize(12),
            color: COLORS.RED,
            marginTop: GetOptimalHieght(20),
          }}>
          {error ? error : ''}
        </Text>
        <Text
          style={{
            ...commonStyle.globalTextStyles,
            fontSize: scaledFontSize(12),
            marginTop: GetOptimalHieght(20),
            position: 'absolute',
            bottom: 20,
          }}>
          {''}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontSize: scaledFontSize(12),
                fontWeight: 'bold',
              }}>
              {'< Login'}
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    );
  }
}
