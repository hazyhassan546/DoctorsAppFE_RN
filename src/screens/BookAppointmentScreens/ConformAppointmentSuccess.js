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
class ConformAppointmentSuccess extends Component {
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={images.greenCheck}
                style={{
                  width: GetOptimalWidth(35),
                  height: GetOptimalWidth(35),
                  resizeMode: 'cover',
                }}></Image>
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: scaledFontSize(16),
                  marginLeft: 10,
                }}>
                {'Appointment Confirmed'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: GetOptimalHieght(10),
                justifyContent: 'space-between',
                marginTop: GetOptimalHieght(20),
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
                {', 09 Apr'}
              </Text>
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  color: '#2AC052',
                  fontWeight: 'bold',
                  fontSize: scaledFontSize(22),
                  marginRight: 10,
                }}>
                {'08:22'}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: GetOptimalHieght(10),
                justifyContent: 'space-between',
                marginTop: GetOptimalHieght(20),
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
                  fontSize: scaledFontSize(18),
                  marginRight: 10,
                }}>
                {'112'}
              </Text>
            </View>

            <Text
              style={{
                ...commonStyle.globalTextStyles,
                color: 'black',
                fontWeight: 'bold',
                fontSize: scaledFontSize(14),
                marginTop: 20,
              }}>
              {data?.doctor.name}
              <Text
                style={{
                  ...commonStyle.globalTextStyles,
                  color: 'black',
                  fontWeight: '400',
                  fontSize: scaledFontSize(14),
                }}>
                {' - '}
                {data.doctor.specialization}
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
                {data.doctor.address}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                marginTop: GetOptimalHieght(10),
                marginBottom: 30,
                borderColor: COLORS.PRIMARY,
              }}
            />
            <Image
              source={images.confirm}
              style={{
                width: GetOptimalHieght(200),
                height: GetOptimalHieght(200),
                alignSelf: 'center',
              }}></Image>
          </View>

          <View
            style={{
              marginVertical: 20,
              alignSelf: 'center',
            }}>
            <Button
              text={'Add to calendar'}
              onPress={() => {
                // this.props.navigation.navigate('SelectCategory');
                this.toggleModal();
              }}
              loading={false}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.reset({
                index: 0,
                routes: [{name: 'DrawerMenus'}],
              });
            }}>
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                alignSelf: 'center',
              }}>
              {'Go To Home'}
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <Text
          style={{
            ...commonStyle.globalTextStyles,
            alignSelf: 'center',
            position: 'absolute',
            fontSize: scaledFontSize(12),
            bottom: 50,
            color: 'black',
          }}>
          {'2 days 3 hours before the appointment'}
        </Text>
      </View>
    );
  }
}

export default ConformAppointmentSuccess;
