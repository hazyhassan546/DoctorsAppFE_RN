import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import COLORS from '../common/colors';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../helpers/commonHelpers/helpers';

export default class StyledInput extends Component {
  render() {
    const {ref, placeholder, value, onSubmit, onChange, style, inputProps} =
      this.props;
    return (
      <View
        style={[
          {
            backgroundColor: COLORS.WHITE,
            width: GetOptimalWidth(335),
            marginTop: GetOptimalHieght(20),
            marginBottom: GetOptimalHieght(10),
            height: GetOptimalHieght(40),
            borderRadius: GetOptimalHieght(5),
            paddingVertical: GetOptimalHieght(10),
            paddingHorizontal: GetOptimalHieght(20),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
          style,
        ]}>
        <TextInput
          {...inputProps}
          ref={this.props.ref}
          placeholder={placeholder ? placeholder : 'Enter Value'}
          value={value}
          onSubmitEditing={onSubmit}
          onChangeText={onChange}
          ref={ref}
          style={{
            color: COLORS.PRIMARY,
            width: '85%',
            fontSize: scaledFontSize(12),
          }}
        />
        <Text>Icon</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
