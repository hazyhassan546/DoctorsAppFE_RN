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
import {hospitalConnect} from '../../redux/connectors/hospitalConnect';

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
class HospitalListing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          this.props.navigation.navigate('HospitalDetail', {data: item});
        }}
        style={{
          flexDirection: 'row',
          marginHorizontal: GetOptimalWidth(20),
          paddingVertical: GetOptimalHieght(30),
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
          title={'Select Hospital'}
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
          data={this.props?.hospitalData?.hospitals}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            this.props.hospitalData.loading ? null : (
              <Text>{'Nothing found'}</Text>
            )
          }
          renderItem={this.renderItem}
          refreshing={this.props?.hospitalData?.loading}
          onRefresh={() => this.props.getHospital()}
        />
      </View>
    );
  }
}

export default hospitalConnect()(HospitalListing);
