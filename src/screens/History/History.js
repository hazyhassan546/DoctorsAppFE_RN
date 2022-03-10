import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {TextInput} from 'react-native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Toast from 'react-native-toast-message';
import COLORS from '../../common/colors';
import images from '../../common/images';
import {commonStyle} from '../../common/styles';
import BackHeader from '../../components/backHeader';
import BackWhiteHeader from '../../components/whiteHeader';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import {authConnect} from '../../redux/connectors/authConnect';
import {hospitalConnect} from '../../redux/connectors/hospitalConnect';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAppointment(this?.props?.authData?.user?._user?.uid);
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('AppointmentDetails', {
            appointment: item,
          });
        }}
        style={{
          marginHorizontal: GetOptimalWidth(20),
          paddingVertical: GetOptimalHieght(15),
          borderBottomWidth: 1,
          borderColor: '#848484',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              ...commonStyle.globalTextStyles,
              fontSize: scaledFontSize(12),
            }}>
            {item?.day?.day}
          </Text>
          <Text
            style={{
              ...commonStyle.globalTextStyles,
              fontSize: scaledFontSize(12),
            }}>
            {item?.day?.time ? item?.day?.time : '0:00 pm'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text
            style={{
              ...commonStyle.globalTextStyles,
              color: '#848484',
              fontWeight: '600',
            }}>
            {item?.doctor?.specialization}
            {' - '}
            {item?.doctor?.name}
          </Text>

          {item?.complete_status ? (
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontSize: scaledFontSize(12),
                backgroundColor: 'white',
                paddingHorizontal: 10,
              }}>
              {'*  complete'}
            </Text>
          ) : (
            <Text
              style={{
                ...commonStyle.globalTextStyles,
                fontSize: scaledFontSize(12),
                backgroundColor: 'white',
                paddingHorizontal: 10,
                color: '#CF4848',
              }}>
              {'*  incomplete'}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {appointments} = this.props?.hospitalData;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.SECONDARY,
        }}>
        <BackWhiteHeader
          title={'Recent Appointments'}
          onMenuPress={() => {
            this.props.navigation.goBack();
          }}
          onBellPress={() => {
            alert('bell');
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 20,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingHorizontal: GetOptimalWidth(10),
              marginHorizontal: 20,
              backgroundColor: COLORS.WHITE,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: GetOptimalWidth(10),
              ...commonStyle.elevatedShadow,
            }}>
            <TextInput
              value={''}
              placeholder={'Search'}
              style={{
                backgroundColor: COLORS.WHITE,
                width: '90%',
                height: GetOptimalHieght(40),
              }}></TextInput>
            <Image
              source={images.search}
              style={{
                width: GetOptimalWidth(16),
                height: GetOptimalWidth(16),
                resizeMode: 'contain',
                marginLeft: 10,
              }}></Image>
          </View>
        </View>

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            this.props.hospitalData.loading ? null : (
              <Text>{'Nothing found'}</Text>
            )
          }
          renderItem={this.renderItem}
          refreshing={this.props?.hospitalData?.loading}
          onRefresh={() =>
            this.props.getAppointment(this?.props?.authData?.user?._user?.uid)
          }
        />
      </View>
    );
  }
}

export default authConnect()(hospitalConnect()(History));
