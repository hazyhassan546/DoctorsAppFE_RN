import React, {Component} from 'react';
import {Alert} from 'react-native';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import COLORS from '../../common/colors';
import images from '../../common/images';
import {commonStyle} from '../../common/styles';
import BackHeader from '../../components/backHeader';
import Button from '../../components/button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';

import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import {TextInput} from 'react-native';
import ReactNativeModal from 'react-native-modal';
function WaitingScreen(props) {
  React.useEffect(() => {
    const onChildAdd = database()
      .ref('/DoctorApp/appointments/' + props?.route?.params?.appointment.uid)
      .on('child_changed', snapshot => {
        const appointment = snapshot.val();
        if (
          appointment.id == props?.route?.params?.appointment.id &&
          appointment.approved_status == true
        ) {
          // now perform event
          // this function will compare the  id of the appointment for further navigation
          props.navigation.navigate('ConformAppointmentSuccess', {
            appointment: appointment,
          });
        }
      });

    // Stop listening for updates when no longer required
    return () =>
      database()
        .ref('/DoctorApp/appointments')
        .off('child_changed', onChildAdd);
  }, []);

  const data = props?.route?.params?.appointment;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.SECONDARY,
      }}>
      {/* <BackHeader
          edit={true}
          onMenuPress={() => {
            this.props.navigation.goBack();
          }}
          onBellPress={() => {
            this.props.navigation.navigate('UpdateHospital', {data: data});
          }}
        /> */}
      <ScrollView>
        <View
          style={{
            marginHorizontal: GetOptimalWidth(20),
            marginTop: GetOptimalHieght(80),
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
              {' Confirmation'}
            </Text>
          </Text>
          <Text
            style={{
              ...commonStyle.globalTextStyles,
              color: 'black',
              fontSize: scaledFontSize(12),
              marginBottom: 20,
            }}>
            {'Please wait for appointment your timings....'}
          </Text>
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
            {'CheckOut'}
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

        <TouchableOpacity
          style={{
            marginTop: 50,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              ...commonStyle.globalTextStyles,
              fontWeight: '600',
              color: '#0FD3C4',
              fontSize: scaledFontSize(13),
            }}>
            {'Please wait.....'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default WaitingScreen;
