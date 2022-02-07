import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { View, ScrollView, Text } from 'react-native';
import COLORS from '../../common/colors';
import HomeHeader from '../../components/homeHeader';
import styles from './style';
import Images from '../../common/images';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import images from '../../common/images';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import { commonStyle } from '../../common/styles';
import AppointmentCard from '../../components/appointmentCard';
import HomeSlider from '../../components/homeSlider';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  EmptyComponent = () => {
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

  appointmentBookButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("BookAppointment")
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
            Book New
          </Text>
          <Text
            style={{
              ...commonStyle.globalTextStyles,
              fontSize: scaledFontSize(16),
              color: COLORS.PRIMARY,
            }}>
            Appointment
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
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <HomeHeader
          onMenuPress={() => {
            this.props.navigation.openDrawer();
          }}
          onBellPress={() => { }}
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
            <this.EmptyComponent />
            <AppointmentCard />
            <this.appointmentBookButton />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
