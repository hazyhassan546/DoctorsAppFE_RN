import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../common/colors';
import {commonStyle} from '../common/styles';
import {
  GetOptimalHieght,
  scaledFontSize,
} from '../helpers/commonHelpers/helpers';

const data = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
];

const DropdownComponent = props => {
  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      maxHeight={100}
      labelField="label"
      valueField="value"
      placeholder="Gender"
      value={props.value}
      onChange={item => {
        props.onChange(item.value);
      }}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    marginVertical: GetOptimalHieght(20),
    marginBottom: GetOptimalHieght(40),
    height: GetOptimalHieght(20),
    width: '100%',
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalHieght(5),
    padding: GetOptimalHieght(20),
    ...commonStyle.elevatedShadow,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: scaledFontSize(12),
    color: COLORS.PRIMARY_GREY,
  },
  selectedTextStyle: {
    fontSize: scaledFontSize(12),
    color: COLORS.PRIMARY_GREY,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
