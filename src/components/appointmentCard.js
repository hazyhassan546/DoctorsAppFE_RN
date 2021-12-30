import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, StyleSheet, View} from 'react-native';
import COLORS from '../common/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {commonStyle} from '../common/styles';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../helpers/commonHelpers/helpers';

export default class AppointmentCard extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          ...commonStyle.elevatedShadow,
          backgroundColor: COLORS.WHITE,
          marginVertical: GetOptimalHieght(20),
          borderRadius: GetOptimalHieght(10),
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: GetOptimalHieght(5),
            borderBottomWidth: 1,
            borderColor: COLORS.PRIMARY,
          }}>
          <Text
            style={{
              ...commonStyle.globalTextStyles,
              fontSize: scaledFontSize(12),
            }}>
            Appointment Confirmed!
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: GetOptimalHieght(15),
            paddingVertical: GetOptimalHieght(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontSize: scaledFontSize(16),
                fontWeight: 'bold',
                color: COLORS.PRIMARY,
              }}>
              Dr. Clara Odding
            </Text>
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontSize: scaledFontSize(16),
                color: '#1c1c1c',
              }}>
              - Dentist
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontSize: scaledFontSize(24),
                color: '#1c1c1c',
              }}>
              Thu, 09 Apr
            </Text>
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontSize: scaledFontSize(24),
              }}>
              08:00
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: COLORS.SECONDARY,
              paddingHorizontal: GetOptimalWidth(10),
              paddingVertical: GetOptimalHieght(5),
              borderRadius: GetOptimalHieght(10),
            }}>
            <Text style={{...commonStyle.globalTextStyles}}>
              Appointment no
            </Text>
            <Text style={{...commonStyle.globalTextStyles}}>221</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: GetOptimalWidth(10),
              paddingVertical: GetOptimalHieght(5),
              alignItems: 'center',
            }}>
            <Ionicons name="location" size={18} color={COLORS.PRIMARY} />
            <Text style={{...commonStyle.globalTextStyles}}>Address</Text>
            <Text style={{...commonStyle.globalTextStyles}}> -2km</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});
