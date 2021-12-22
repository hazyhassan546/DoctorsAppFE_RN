import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import COLORS from '../common/colors';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../helpers/commonHelpers/helpers';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        disabled={this.props?.loading}
        style={styles.button}
        onPress={this.props.onPress}>
        {this.props?.loading ? (
          <ActivityIndicator color={COLORS.SECONDARY} />
        ) : (
          <Text style={styles.fonts}>{this.props.text}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: GetOptimalWidth(335),
    height: GetOptimalHieght(43),
    borderRadius: 10,
    backgroundColor: COLORS.PRIMARY,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fonts: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaledFontSize(14),
    color: COLORS.WHITE,
  },
});
