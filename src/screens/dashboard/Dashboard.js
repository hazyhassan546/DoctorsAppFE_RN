import React, {Component, useEffect} from 'react';
import {ImageBackground} from 'react-native';
import {View, ScrollView, Text} from 'react-native';
import COLORS from '../../common/colors';
import HomeHeader from '../../components/homeHeader';
import styles from './style';
import Images from '../../common/images';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import images from '../../common/images';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import {commonStyle} from '../../common/styles';
import AppointmentCard from '../../components/appointmentCard';
import HomeSlider from '../../components/homeSlider';
import database from '@react-native-firebase/database';
import Toast from 'react-native-toast-message';

const Dashboard = props => {
  useEffect(() => {
    /////////////////////////////---  ---////////////////////////////////
    const child_changed = database()
      .ref('/DoctorApp/appointments/')
      .on('child_changed', snapshot => {
        const appointment = snapshot.val();

        ///////////
        if (props.authData?.user?._user?.uid == appointment?.uid) {
          if (appointment?.approved_status == true) {
            Toast.show({
              text1: 'Your appointment is Booked',
            });
            props.addNotification({
              text: 'Your appointment is Booked',
              date: new Date(),
              id: new Date(),
            });
            props.addNotification({
              text: 'Your appointment request has been accepted',
              date: new Date(),
              id: new Date(),
            });
          } else {
            Toast.show({
              text1: 'Your appointment is Rejected',
            });
            props.addNotification({
              text: 'Your appointment is Rejected',
              date: new Date(),
              id: new Date(),
            });
          }
          //////////

          if (appointment?.complete_status == true) {
            Toast.show({
              text1: 'Your appointment status is Completed',
            });
            props.addNotification({
              text: 'Your appointment status is Completed',
              date: new Date(),
              id: new Date(),
            });
          }
        }
      });

    // Stop listening for updates when no longer required
    return () =>
      database()
        .ref('/DoctorApp/appointments')
        .off('child_changed', child_changed);
  }, []);

  const EmptyComponent = () => {
    return (
      <>
        <Text
          style={{
            ...commonStyle.globalTextStyles,
            fontSize: scaledFontSize(14),
            fontWeight: 'bold',
            color: COLORS.PRIMARY,
            alignSelf: 'center',
            marginVertical: GetOptimalHieght(20),
          }}>
          Upcoming Appointments
        </Text>
        <Text
          style={{
            ...commonStyle.globalTextStyles,
            fontSize: scaledFontSize(14),
            color: COLORS.PRIMARY,
            width: GetOptimalWidth(200),
            textAlign: 'center',
            alignSelf: 'center',
            marginBottom: GetOptimalHieght(100),
          }}>
          No Upcoming Appointments yet
        </Text>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <HomeHeader
        onMenuPress={() => {
          props.navigation.openDrawer();
        }}
        onBellPress={() => {
          props.navigation.navigate('Notifications');
        }}
      />
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
            paddingHorizontal: GetOptimalWidth(20),
          }}>
          <HomeSlider />
          <EmptyComponent />
          <AppointmentCard />
          <TouchableOpacity
            onPress={() => {
              props.getHospital();
              props.navigation.navigate('HospitalListing');
            }}
            style={{
              backgroundColor: COLORS.WHITE,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: GetOptimalWidth(20),
              paddingVertical: GetOptimalHieght(10),
              ...commonStyle.elevatedShadow,
              borderRadius: GetOptimalHieght(10),
            }}>
            <View>
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  fontSize: scaledFontSize(16),
                  color: COLORS.PRIMARY,
                }}>
                {'Book New'}
              </Text>
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  fontSize: scaledFontSize(16),
                  color: COLORS.PRIMARY,
                }}>
                {'Appointment'}
              </Text>
            </View>

            <Image
              source={images.calendar}
              style={{
                width: GetOptimalHieght(60),
                height: GetOptimalHieght(60),
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Dashboard;
