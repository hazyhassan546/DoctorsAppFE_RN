import React, {Component} from 'react';
import {Image} from 'react-native';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

import Swiper from 'react-native-swiper';
import COLORS from '../common/colors';
import images from '../common/images';
import {commonStyle} from '../common/styles';
import {
  GetOptimalHieght,
  GetOptimalWidth,
} from '../helpers/commonHelpers/helpers';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: null,
    height: GetOptimalHieght(160),
  },
  slide1: {
    backgroundColor: COLORS.WHITE,
    padding: GetOptimalWidth(15),
    borderRadius: GetOptimalWidth(10),
    ...commonStyle.elevatedShadow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: GetOptimalHieght(20),
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default class HomeSlider extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper}>
        <View style={styles.slide1}>
          <Text
            numberOfLines={2}
            style={{
              ...commonStyle.globalTextStyles,
              width: GetOptimalWidth(180),
            }}>
            Covid-19 Prevention Steps
          </Text>
          <Image
            source={images.corona}
            style={{
              width: GetOptimalHieght(60),
              height: GetOptimalHieght(60),
              resizeMode: 'contain',
            }}></Image>
        </View>
        <View style={styles.slide1}>
          <Text
            numberOfLines={2}
            style={{
              ...commonStyle.globalTextStyles,
              width: GetOptimalWidth(180),
            }}>
            Covid-19 Prevention Steps
          </Text>
          <Image
            source={images.corona}
            style={{
              width: GetOptimalHieght(60),
              height: GetOptimalHieght(60),
              resizeMode: 'contain',
            }}></Image>
        </View>
      </Swiper>
    );
  }
}
