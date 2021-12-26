import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../../common/colors';
import images from '../../common/images';
import {commonStyle} from '../../common/styles';
import Button from '../../components/button';
import StyledInput from '../../components/styledInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import styles from './style';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeEmail = text => {
    this.setState({
      email: text,
    });
    this.props.setError('');
  };

  onChangePassword = text => {
    this.setState({
      password: text,
    });
    this.props.setError('');
  };

  validateEmail = () => {
    const text = this.state.email;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text);
  };

  login = () => {
    const {email, password, error} = this.state;
    this.props.loginUser({
      email: email,
      password: password,
    });
  };

  validate = () => {
    const {email, password, error} = this.state;
    if (email === '' || !this.validateEmail()) {
      this.props.setError('Email is not valid');
      return;
    } else if (password === '' || password?.length < 8) {
      this.props.setError('Password not valid, minimum 8 characters required');
      return;
    }
    this.login();
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
          {'Dashboard'}
        </Text>
        <Text
          style={{
            ...commonStyle.globalTextStyles,
            fontSize: scaledFontSize(12),
            marginTop: GetOptimalHieght(20),
          }}>
          {'Login to your account to get appointments'}
        </Text>
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
        <StyledInput
          onChange={this.onChangePassword}
          name={'password'}
          value={password}
          placeholder={'Password'}
          type={'password'}
        />
        <TouchableOpacity
          style={{
            marginBottom: GetOptimalHieght(60),
            width: '100%',
          }}>
          <Text
            style={{
              alignSelf: 'flex-end',
              ...commonStyle.globalTextStyles,
              fontSize: scaledFontSize(12),
            }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <Button text={'Continue'} onPress={this.validate} loading={loading} />
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
          {"Don't have account? "}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Signup');
            }}>
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontSize: scaledFontSize(12),
                fontWeight: 'bold',
              }}>
              {'Sign Up Here'}
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    );
  }
}
