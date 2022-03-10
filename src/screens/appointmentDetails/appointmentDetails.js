import React, {Component} from 'react';
import {Alert} from 'react-native';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import COLORS from '../../common/colors';
import images from '../../common/images';
import {commonStyle} from '../../common/styles';
import BackHeader from '../../components/backHeader';
import Button from '../../components/button';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import {TextInput} from 'react-native';
import ReactNativeModal from 'react-native-modal';
class AppointmentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props?.route?.params?.appointment,
      modalVisible: false,
    };
  }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  render() {
    const {data} = this.state;
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
                fontSize: scaledFontSize(14),
              }}>
              {data?.doctor?.name}
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  color: 'black',
                  fontWeight: '400',
                  fontSize: scaledFontSize(14),
                }}>
                {data?.complete_status ? '  Completed' : '  Incomplete'}
              </Text>
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: GetOptimalHieght(10),
                justifyContent: 'space-between',
                marginTop: GetOptimalHieght(26),
                borderRadius: 10,
              }}>
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  color: 'black',
                  fontSize: scaledFontSize(22),
                  marginLeft: 10,
                }}>
                {data?.day.day}
                {''}
                {data?.day.date}
              </Text>
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  color: '#2AC052',
                  fontWeight: 'bold',
                  fontSize: scaledFontSize(22),
                  marginRight: 10,
                }}>
                {data?.day.time}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: GetOptimalHieght(10),
                justifyContent: 'space-between',
                marginTop: GetOptimalHieght(10),
                borderRadius: 10,
              }}>
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  color: 'black',
                  fontSize: scaledFontSize(18),
                  marginLeft: 10,
                }}>
                {'Appointment'}
              </Text>
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  color: '#2AC052',
                  fontWeight: 'bold',
                  fontSize: scaledFontSize(20),
                  marginRight: 10,
                }}>
                {'221'}
              </Text>
            </View>
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                color: 'black',
                fontWeight: 'bold',
                fontSize: scaledFontSize(14),
                marginTop: GetOptimalHieght(26),
                marginLeft: GetOptimalWidth(20),
              }}>
              {data?.doctor?.name}
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  color: 'black',
                  fontWeight: '400',
                  fontSize: scaledFontSize(14),
                }}>
                {'  -  '}
                {data?.doctor?.specialization}
              </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
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
                marginTop: GetOptimalHieght(30),
                marginBottom: 20,
                borderColor: COLORS.PRIMARY,
              }}
            />
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontWeight: '600',
                color: '#0FD3C4',
              }}>
              {'Message'}
            </Text>
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontSize: scaledFontSize(12),
                color: 'black',
              }}>
              {data?.message == '' || !data?.message
                ? 'You did not mentioned any message for he doctor'
                : data?.message}
            </Text>

            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontWeight: '600',
                marginTop: GetOptimalHieght(20),
                color: '#0FD3C4',
              }}>
              {'Reason of the Visit'}
            </Text>
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontSize: scaledFontSize(12),
                color: 'black',
              }}>
              {data?.reason == '' || !data?.reason
                ? 'You did not mentioned any message for he doctor'
                : data.reason}
            </Text>

            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontWeight: '500',
                color: '#22B1A6',
                fontSize: scaledFontSize(22),
                marginTop: 20,
              }}>
              {'Paid'}
            </Text>
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontWeight: '400',
                color: '#22B1A6',
                fontSize: scaledFontSize(22),
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
                {data?.paymentMethod}
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default AppointmentDetails;
