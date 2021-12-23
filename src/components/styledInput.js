import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../common/colors';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../helpers/commonHelpers/helpers';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {commonStyle} from '../common/styles';

export default class StyledInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideText: true,
    };
  }

  setHideText = () => {
    this.setState({
      hideText: !this.state.hideText,
    });
  };

  render() {
    const {
      ref,
      placeholder,
      value,
      onSubmit,
      onChange,
      styleBox,
      style,
      iconComponent,
      type,
    } = this.props;
    const {hideText} = this.state;
    return (
      <View style={[styles.container, styleBox]}>
        <TextInput
          {...this.props}
          ref={this.props.ref}
          placeholder={placeholder ? placeholder : 'Enter Value'}
          value={value}
          onSubmitEditing={onSubmit}
          onChangeText={onChange}
          ref={ref}
          secureTextEntry={hideText && type == 'password'}
          style={[styles.input, style]}
        />
        {type == 'password' ? (
          hideText ? (
            <TouchableOpacity onPress={this.setHideText}>
              <FontAwesome name="lock" size={20} color={COLORS.PRIMARY} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.setHideText}>
              <FontAwesome name="unlock" size={20} color={COLORS.PRIMARY} />
            </TouchableOpacity>
          )
        ) : (
          iconComponent
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...commonStyle.elevatedShadow,
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
  input: {
    color: COLORS.PRIMARY,
    width: '85%',
    fontSize: scaledFontSize(12),
  },
});
