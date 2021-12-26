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
import DropdownComponent from '../../components/dropDown';
import * as ImagePicker from 'react-native-image-picker';

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
        image: '',
      },
      error: '',
    };
  }

  componentDidMount() {
    this.props.setError('');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.authData.signUpSuccess == true &&
      prevProps.authData.signUpSuccess == false
    ) {
      this.props.navigation.navigate('Login');
    }
  }

  componentWillUnmount() {
    this.props.setError('');
  }
  onChange = (value, name) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  validateEmail = () => {
    const text = this.state.user.email;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text);
  };

  signUp = () => {
    this.props.signupUser(this.state.user);
  };

  validate = () => {
    const {
      name,
      phone,
      email,
      address,
      gender,
      confirmPassword,
      password,
      image,
    } = this.state.user;

    if (image === '') {
      this.props.setError('Profile picture is required');
      return;
    } else if (name === '') {
      this.props.setError('Name is required');
      return;
    } else if (email === '' || !this.validateEmail()) {
      this.props.setError('Email is not valid');
      return;
    } else if (phone === '') {
      this.props.setError('Phone is required');
      return;
    } else if (password === '' || password?.length < 8) {
      this.props.setError('Password not valid, minimum 8 characters required');
      return;
    } else if (confirmPassword === '' || confirmPassword !== password) {
      this.props.setError('Password do not match');
      return;
    } else if (address === '') {
      this.props.setError('Address is required');
      return;
    } else if (gender === '') {
      this.props.setError('Gender is required');
      return;
    }
    this.props.setError('');
    this.signUp();
  };

  pickImage = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        console.log(response.assets[0].uri);
        const res = {
          filePath: response.assets[0],
          fileData: response.assets[0].data,
          fileUri: response.assets[0].uri,
        };
        this.setState({
          user: {
            ...this.state.user,
            image: res,
          },
        });
      }
    });
  };

  render() {
    const {
      name,
      phone,
      email,
      address,
      gender,
      confirmPassword,
      password,
      image,
    } = this.state.user;
    const {error, loading} = this.props.authData;
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: COLORS.SECONDARY,
        }}>
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
            disabled={loading}
            onPress={this.pickImage}
            style={{
              width: GetOptimalHieght(100),
              height: GetOptimalHieght(100),
              borderRadius: GetOptimalHieght(50),
              backgroundColor: COLORS.WHITE,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: GetOptimalHieght(20),
              ...commonStyle.elevatedShadow,
            }}>
            {image.fileUri ? (
              <Image
                source={{
                  uri: image?.fileUri,
                }}
                style={{
                  width: GetOptimalHieght(100),
                  height: GetOptimalHieght(100),
                  resizeMode: 'cover',
                  borderRadius: GetOptimalHieght(50),
                }}
              />
            ) : (
              <FontAwesome5
                name="image"
                size={GetOptimalHieght(50)}
                color={COLORS.PRIMARY}
              />
            )}

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
            onChange={text => this.onChange(text, 'name')}
            value={name}
            iconComponent={null}
            editable={!loading}
          />
          <StyledInput
            name={'email'}
            placeholder={'Email'}
            onChange={text => this.onChange(text, 'email')}
            value={email}
            keyboardType={'email-address'}
            iconComponent={null}
            editable={!loading}
          />
          <StyledInput
            name={'phone'}
            placeholder={'Phone no'}
            onChange={text => this.onChange(text, 'phone')}
            value={phone}
            keyboardType={'number-pad'}
            iconComponent={null}
            editable={!loading}
          />
          <StyledInput
            name={'password'}
            placeholder={'Password'}
            onChange={text => this.onChange(text, 'password')}
            value={password}
            type={'password'}
            iconComponent={null}
            editable={!loading}
          />
          <StyledInput
            name={'confirmPassword'}
            placeholder={'Confirm Password'}
            onChange={text => this.onChange(text, 'confirmPassword')}
            value={confirmPassword}
            type={'password'}
            iconComponent={null}
            editable={!loading}
          />
          <StyledInput
            name={'address'}
            placeholder={'Address'}
            onChange={text => this.onChange(text, 'address')}
            value={address}
            editable={!loading}
            iconComponent={
              <Ionicons name="location" size={20} color={COLORS.PRIMARY} />
            }
          />
          <DropdownComponent
            value={gender}
            onChange={text => this.onChange(text, 'gender')}
          />
          <Button text={'Continue'} onPress={this.validate} loading={loading} />
          <Text
            style={{
              ...commonStyle.globalTextStyles,
              fontSize: scaledFontSize(12),
              color: COLORS.RED,
              marginTop: GetOptimalHieght(10),
            }}>
            {error ? error : ''}
          </Text>
          <Text
            style={{
              ...commonStyle.globalTextStyles,
              fontSize: scaledFontSize(12),
              marginTop: GetOptimalHieght(10),
            }}>
            {'Already have an account? '}
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  fontSize: scaledFontSize(12),
                  fontWeight: 'bold',
                }}>
                {' Login'}
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    );
  }
}
