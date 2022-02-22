// class BackHeader extends Component {

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import COLORS from '../common/colors';
import {Icon} from 'react-native-elements';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../helpers/commonHelpers/helpers';
import {commonStyle} from '../common/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import images from '../common/images';
class BackHeader extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: COLORS.SECONDARY,
          paddingVertical: GetOptimalHieght(10),
          paddingTop: GetOptimalHieght(50),
          paddingHorizontal: GetOptimalWidth(20),
        }}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.props.onMenuPress}
            style={[styles.touchableHide]}>
            <Image
              source={images.backArrow}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.onBellPress}
            style={[styles.touchableHide]}>
            <Icon name="bell" type="feather" color={COLORS.PRIMARY} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default BackHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SECONDARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: GetOptimalHieght(20),
    paddingBottom: GetOptimalHieght(20),
    height: GetOptimalHieght(25),
  },
  imageStyle: {
    width: GetOptimalHieght(28),
    height: GetOptimalHieght(28),
    position: 'absolute',
    resizeMode: 'contain',
  },
  buttonStyle: {
    width: GetOptimalHieght(30),
    height: GetOptimalHieght(30),
    backgroundColor: COLORS.REDISH,
    borderRadius: GetOptimalHieght(40),
    justifyContent: 'center',
    alignItems: 'center',
    ...commonStyle.elevatedShadow,
  },
  touchable: {
    width: GetOptimalHieght(30),
    height: GetOptimalHieght(30),
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: GetOptimalHieght(15),
    marginHorizontal: GetOptimalWidth(5),
  },
  touchableHide: {
    width: GetOptimalHieght(30),
    height: GetOptimalHieght(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.PRIMARY,
    fontSize: scaledFontSize(22),
    ...commonStyle.globalTextStyles,
    fontSize: scaledFontSize(22),
  },
});
