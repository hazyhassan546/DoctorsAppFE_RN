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
import {notificationConnect} from '../../redux/connectors/notificationConnect';
class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          padding: 20,
          marginBottom: GetOptimalHieght(10),
          ...commonStyle.elevatedShadow,
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...commonStyle.globalTextStyles,
            fontSize: scaledFontSize(12),
            width: GetOptimalWidth(200),
          }}>
          {item?.text}
        </Text>
        <Text
          style={{
            ...commonStyle.globalTextStyles,
            fontSize: scaledFontSize(12),
          }}>
          {'12:00 pm'}
        </Text>

        {/* <Text>{item?.date}</Text> */}
      </TouchableOpacity>
    );
  };

  render() {
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
          {'Notifications'}
        </Text>
        <FlatList
          data={this.props?.notificationData?.notifications}
          keyExtractor={item => item?.id}
          renderItem={this.renderItem}></FlatList>
      </View>
    );
  }
}

export default notificationConnect()(Notification);
