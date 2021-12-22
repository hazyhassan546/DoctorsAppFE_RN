import React, {Component} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../../common/colors';
import images from '../../common/images';
import {commonStyle} from '../../common/styles';
import Button from '../../components/button';
import StyledInput from '../../components/styledInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import styles from './style';
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        address: '',
        gender: '',
      },
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
    const {name, phone, email, address, gender, confirmPassword, password} =
      this.state.user;
    const {error, loading} = this.props.authData;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text
            style={{
              ...commonStyle.globalTextStyles,
              fontSize: scaledFontSize(24),
              fontWeight: 'bold',
              color: COLORS.PRIMARY,
            }}>
            {'Sign Up'}
          </Text>
          <Text
            style={{
              ...commonStyle.globalTextStyles,
              fontSize: scaledFontSize(12),
              marginTop: GetOptimalHieght(20),
            }}>
            {'Please sign up to your account'}
          </Text>
          <TouchableOpacity
            style={{
              width: GetOptimalHieght(100),
              height: GetOptimalHieght(100),
              borderRadius: GetOptimalHieght(50),
              backgroundColor: COLORS.WHITE,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: GetOptimalHieght(20),
            }}>
            <FontAwesome5
              name="image"
              size={GetOptimalHieght(50)}
              color={COLORS.PRIMARY}
            />
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontSize: scaledFontSize(10),
                color: COLORS.PRIMARY,
                marginTop: GetOptimalHieght(20),
                position: 'absolute',
                right: 120,
              }}>
              {'Upload Profile Picture'}
            </Text>
          </TouchableOpacity>
          <StyledInput
            name={'name'}
            placeholder={'Name'}
            onChange={this.onChangeEmail}
            value={name}
            iconComponent={null}
          />
          <StyledInput
            name={'email'}
            placeholder={'Email'}
            onChange={this.onChangeEmail}
            value={email}
            iconComponent={null}
          />
          <StyledInput
            name={'phone'}
            placeholder={'Phone no'}
            onChange={this.onChangeEmail}
            value={phone}
            iconComponent={null}
          />
          <StyledInput
            name={'password'}
            placeholder={'Password'}
            onChange={this.onChangeEmail}
            value={password}
            type={'password'}
            iconComponent={null}
          />
          <StyledInput
            name={'confirmPassword'}
            placeholder={'Confirm Password'}
            onChange={this.onChangeEmail}
            value={confirmPassword}
            type={'password'}
            iconComponent={null}
          />
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
              marginTop: GetOptimalHieght(10),
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
      </ScrollView>
    );
  }
}
