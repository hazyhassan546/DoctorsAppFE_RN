import React, {Component} from 'react';
import {Alert} from 'react-native';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import COLORS from '../../common/colors';
import images from '../../common/images';
import {commonStyle} from '../../common/styles';
import BackHeader from '../../components/backHeader';
import Button from '../../components/button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import {TextInput} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {authConnect} from '../../redux/connectors/authConnect';
import {hospitalConnect} from '../../redux/connectors/hospitalConnect';
class BookAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props?.route?.params?.bookingData,
      modalVisible: false,
      message: '',
      reason: '',
    };
  }

  componentDidMount() {
    Toast.show({
      text1: 'You can add Message and Reason',
      text2: 'Not Mandatory',
    });
  }

  bookAppointment = () => {
    const {data, reason, message} = this.state;
    const appointment = {
      doctor: {
        ...data.doctor,
        availability: null,
      },
      day: data?.day,
      reason: reason,
      message: message,
      approved_status: false,
      complete_status: false,
      paymentMethod: 'Easy Paisa',
      paymentPaid: false,
      seen: false,
      user: this.props.authData.user?.data,
    };

    this.props.bookAppointment(appointment);
  };

  toggleModal = () => {
    this.props.showModal(!this.props.hospitalData.showModal);
  };
  render() {
    const {data, reason, message} = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.SECONDARY,
        }}>
        <BackHeader
          edit={true}
          onMenuPress={() => {
            this.props.navigation.goBack();
          }}
          onBellPress={() => {
            this.props.navigation.navigate('UpdateHospital', {data: data});
          }}
        />
        <ScrollView>
          <View
            style={{
              marginHorizontal: GetOptimalWidth(20),
            }}>
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                color: 'black',
                fontWeight: 'bold',
                fontSize: scaledFontSize(16),
              }}>
              {'Dr. ' + data?.doctor?.name}
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  color: 'black',
                  fontWeight: '400',
                  fontSize: scaledFontSize(16),
                }}>
                {' Confirmation'}
              </Text>
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                alignSelf: 'flex-start',
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginVertical: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#1C1C1C1A',
              }}>
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  fontWeight: '500',
                  color: '#0FD3C4',
                  fontSize: scaledFontSize(26),
                }}>
                {data?.day?.day}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Ionicons name="location" size={18} color={COLORS.PRIMARY} />
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                }}>
                {'Address - '}
                {data?.doctor?.address}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                marginTop: 20,
                marginBottom: 30,
                borderColor: COLORS.PRIMARY,
              }}
            />
            <TextInput
              placeholder={'Message'}
              placeholderTextColor={'#22B1A6'}
              value={message}
              onChangeText={text => {
                this.setState({
                  message: text,
                });
              }}
              style={{
                backgroundColor: 'white',
                padding: 20,
                fontWeight: '600',
                borderRadius: 10,
                color: '#22B1A6',
                fontSize: scaledFontSize(16),
                ...commonStyle.elevatedShadow,
              }}
            />
            <TextInput
              placeholder={'Reason of the Visit'}
              placeholderTextColor={'#22B1A6'}
              value={reason}
              onChangeText={text => {
                this.setState({
                  reason: text,
                });
              }}
              style={{
                backgroundColor: 'white',
                padding: 20,
                fontWeight: '600',
                borderRadius: 10,
                color: '#22B1A6',
                marginTop: 20,
                fontSize: scaledFontSize(16),
                ...commonStyle.elevatedShadow,
              }}
            />

            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontWeight: '500',
                color: '#22B1A6',
                fontSize: scaledFontSize(24),
                marginTop: 20,
              }}>
              {'CheckOut'}
            </Text>
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontWeight: '400',
                color: '#22B1A6',
                fontSize: scaledFontSize(24),
              }}>
              {'Rs. '}
              {data?.doctor?.appointmentPrice}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: GetOptimalWidth(20),
              marginTop: GetOptimalHieght(20),
            }}>
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontWeight: '600',
                color: '#22B1A6',
                fontSize: scaledFontSize(13),
              }}>
              {'Payment method'}
            </Text>
            <TouchableOpacity
            // onPress={() => {
            //   this.setState({
            //     modalVisible: true,
            //   });
            // }}
            >
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  fontWeight: '600',
                  color: '#0FD3C4',
                  fontSize: scaledFontSize(13),
                }}>
                {'+ Add Card'}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: GetOptimalHieght(20),
              padding: GetOptimalHieght(15),
              borderRadius: 10,
              ...commonStyle.elevatedShadow,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={images.calendar}
                style={{
                  width: GetOptimalWidth(20),
                  height: GetOptimalWidth(20),
                  marginRight: GetOptimalWidth(10),
                }}
              />
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  fontWeight: '600',
                  color: '#0FD3C4',
                  fontSize: scaledFontSize(13),
                }}>
                {'Easy paisa'}
              </Text>
            </View>

            <Image
              source={images.check}
              style={{
                width: GetOptimalWidth(20),
                height: GetOptimalWidth(20),
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>

          <View
            style={{
              marginVertical: 20,
              alignSelf: 'center',
            }}>
            <Button
              text={'Pay Now'}
              onPress={() => {
                // this.props.navigation.navigate('SelectCategory');
                // this.toggleModal();
                this.bookAppointment();
              }}
              loading={this.props?.hospitalData?.bookingLoading}
            />
          </View>
        </ScrollView>

        {/* ----------------- Modal --------------- */}

        <ReactNativeModal
          isVisible={this.props.hospitalData.showModal}
          onSwipeComplete={this.toggleModal}
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}
          onModalHide={() => {
            const {data, reason, message} = this.state;
            const appointment = {
              doctor: {
                ...data.doctor,
                availability: null,
              },
              day: data?.day,
              reason: reason,
              message: message,
              paymentMethod: 'Easy Paisa',
              paymentPaid: false,
              user: this.props.authData.user?.data,
            };

            this.props.navigation.navigate('WaitingScreen', {
              appointment: appointment,
            });
          }}
          style={{
            marginTop: 100,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: 'white',
              width: '90%',
              padding: GetOptimalHieght(20),
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontWeight: '600',
                color: '#0FD3C4',
                fontSize: scaledFontSize(14),
              }}>
              {'Appointment Confirmation'}
            </Text>

            <Text
              style={{
                ...commonStyle.globalTextStyles,
                color: '#848484',
                fontSize: scaledFontSize(11),
                textAlign: 'center',
                width: 200,
                marginVertical: GetOptimalHieght(25),
              }}>
              {
                'Please Wait...for few minutes you will be notified for your appointment timings'
              }
            </Text>

            <Image
              source={images.timer}
              style={{
                width: GetOptimalWidth(135),
                height: GetOptimalWidth(135),
                resizeMode: 'contain',
              }}></Image>

            <TouchableOpacity
              onPress={() => {
                this.toggleModal();
              }}>
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  color: '#848484',
                  fontSize: scaledFontSize(16),
                  textAlign: 'center',
                  width: 200,
                  marginTop: GetOptimalHieght(25),
                }}>
                {'Go to Next'}
              </Text>
            </TouchableOpacity>
          </View>
        </ReactNativeModal>
      </View>
    );
  }
}

export default hospitalConnect()(authConnect()(BookAppointment));
