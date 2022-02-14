import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {TextInput} from 'react-native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
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

const data = [
  {
    id: 0,
    name: 'Umar Hospital',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
    specialization: 'Specialization',
    address: '2km',
    description: 'here is hospital description',
  },
  {
    id: 2,
    name: 'Umar Hospital',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
    specialization: 'Specialization',
    address: '2km',
  },
  {
    id: 3,
    name: 'Umar Hospital',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
    specialization: 'Specialization',
    address: '2km',
  },
  {
    id: 4,
    name: 'Umar Hospital',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
    specialization: 'Specialization',
    address: '2km',
  },
  {
    id: 5,
    name: 'Umar Hospital',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
    specialization: 'Specialization',
    address: '2km',
  },
  {
    id: 6,
    name: 'Umar Hospital',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
    specialization: 'Specialization',
    address: '2km',
  },
  {
    id: 7,
    name: 'Umar Hospital',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
    specialization: 'Specialization',
    address: '2km',
  },
  {
    id: 8,
    name: 'Umar Hospital',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
    specialization: 'Specialization',
    address: '2km',
  },
  {
    id: 9,
    name: 'Umar Hospital',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
    specialization: 'Specialization',
    address: '2km',
  },
  {
    id: 10,
    name: 'Umar Hospital',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
    specialization: 'Specialization',
    address: '2km',
  },
  {
    id: 11,
    name: 'Umar Hospital',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
    specialization: 'Specialization',
    address: '2km',
  },
  {
    id: 12,
    name: 'Umar Hospital',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
    specialization: 'Specialization',
    address: '2km',
  },
];
export default class SelectDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('DoctorDetail', {data: item});
        }}
        style={{
          flexDirection: 'row',
          marginHorizontal: GetOptimalWidth(20),
          paddingVertical: GetOptimalHieght(20),
          borderBottomWidth: 1,
          borderBottomColor: COLORS.PRIMARY_GREY,
        }}>
        <View
          style={{
            width: GetOptimalWidth(70),
            height: GetOptimalWidth(70),
            resizeMode: 'contain',
            backgroundColor: 'white',
            borderRadius: GetOptimalWidth(10),
            ...commonStyle.elevatedShadow,
          }}>
          <Image
            source={{uri: item?.image}}
            style={{
              width: GetOptimalWidth(70),
              height: GetOptimalWidth(70),
              resizeMode: 'cover',
              borderRadius: GetOptimalWidth(10),
            }}></Image>
        </View>
        <View
          style={{
            paddingHorizontal: GetOptimalWidth(20),
            width: GetOptimalWidth(240),
          }}>
          <Text
            numberOfLines={1}
            style={{
              ...commonStyle.globalTextStyles,
              fontWeight: '600',
              color: COLORS.BLACK,
            }}>
            {item?.name}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...commonStyle.globalTextStyles,

              fontSize: scaledFontSize(12),
            }}>
            {item?.specialization}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...commonStyle.globalTextStyles,
              fontSize: scaledFontSize(12),
            }}>
            {'Adress - '}
            {item?.address}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Image
            source={images.dots}
            style={{
              width: GetOptimalWidth(16),
              height: GetOptimalWidth(16),
              resizeMode: 'contain',
              marginLeft: 10,
            }}></Image>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    // const { hospitals } = this.props?.hospitalData;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.SECONDARY,
        }}>
        <BackWhiteHeader
          title={'Select Doctor'}
          onMenuPress={() => {
            this.props.navigation.goBack();
          }}
          onBellPress={() => {
            alert('bell');
          }}
        />

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            padding: GetOptimalWidth(20),
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              ...commonStyle.globalTextStyles,
              alignSelf: 'center',
            }}>
            {'Add Preferences'}
          </Text>
          <Image
            source={images.filter}
            style={{
              width: 20,
              height: 20,
            }}></Image>
        </TouchableOpacity>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          // refreshing={this.props?.hospitalData?.loading}
          // onRefresh={() => this.props.getHospital()}
        />
      </View>
    );
  }
}
