import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import Toast from 'react-native-toast-message';
import COLORS from '../../common/colors';
import images from '../../common/images';
import {commonStyle} from '../../common/styles';
import BackHeader from '../../components/backHeader';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import {hospitalConnect} from '../../redux/connectors/hospitalConnect';
class AddDays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availability: [
        {
          day: 'Monday',
          availability: false,
        },
        {
          day: 'Tuesday',
          availability: false,
        },
        {
          day: 'Wednesday',
          availability: false,
        },
        {
          day: 'Thursday',
          availability: false,
        },
        {
          day: 'Friday',
          availability: false,
        },
        {
          day: 'Saturday',
          availability: false,
        },
        {
          day: 'Sunday',
          availability: false,
        },
      ],
    };
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item?.availability) {
            this.props.selectDay(item);
            this.props.navigation.goBack();
          } else {
            Toast.show({
              text1: 'Doctor is not available on ' + item.day,
            });
          }
          // let days = this.state.availability;
          // days[index].availability = !days[index].availability;
          // this.props.setDocAvailability(days);
        }}
        style={{
          marginHorizontal: GetOptimalWidth(20),
          padding: GetOptimalWidth(20),
          backgroundColor: COLORS.WHITE,
          borderRadius: GetOptimalWidth(10),
          flexDirection: 'row',
          marginTop: GetOptimalHieght(20),
          justifyContent: 'space-between',
        }}>
        <Text
          numberOfLines={1}
          style={{
            ...commonStyle.globalTextStyles,
            fontSize: scaledFontSize(16),
            color: COLORS.PRIMARY_TEXT,
          }}>
          {'Every '}
          {item?.day}
        </Text>
        {item?.availability ? (
          <Image
            source={images.check}
            style={{
              width: GetOptimalWidth(20),
              height: GetOptimalWidth(20),
              resizeMode: 'contain',
            }}></Image>
        ) : null}
      </TouchableOpacity>
    );
  };

  render() {
    const {availability} = this.state;
    return (
      <View
        style={{
          backgroundColor: COLORS.SECONDARY,
        }}>
        <BackHeader
          onMenuPress={() => {
            this.props.navigation.goBack();
          }}
          onBellPress={() => {
            alert('bell');
          }}
        />
        <Text
          style={{
            ...commonStyle.globalTextStyles,
            fontWeight: '600',
            color: COLORS.PRIMARY,
            alignSelf: 'center',
            marginBottom: GetOptimalHieght(20),
          }}>
          {'Days in a Week'}
        </Text>
        <FlatList
          data={this.props.route.params.data}
          keyExtractor={item => item.day}
          renderItem={this.renderItem}></FlatList>
      </View>
    );
  }
}

export default hospitalConnect()(AddDays);
