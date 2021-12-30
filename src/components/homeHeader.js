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

class HomeHeader extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: COLORS.WHITE,
          paddingVertical: GetOptimalHieght(10),
          paddingHorizontal: GetOptimalWidth(20),
        }}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.props.onMenuPress}
            style={[styles.touchableHide]}>
            <Icon name="menu" type="MaterialIcons" color={COLORS.PRIMARY} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.props.onBellPress}
            style={[styles.touchableHide]}>
            <Icon name="bell" type="feather" color={COLORS.PRIMARY} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.title, {color: COLORS.PRIMARY}]}>
          {'Hello, '}
          <Text style={styles.title}>{'Hassan!'}</Text>
        </Text>
      </View>
    );
  }
}
export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: GetOptimalHieght(10),
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
