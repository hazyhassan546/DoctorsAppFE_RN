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
    name: 'Dentist',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
  },
  {
    id: 1,
    name: 'Cardiologist',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
  },
  {
    id: 2,
    name: 'Phycology',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
  },
  {
    id: 3,
    name: 'Dermatologist',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMaANAWXvBt8hZ7mw_nfH3lTA4Cd0eAYZER8DWv=w1080-k-no',
  },
];
export default class SelectCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('SelectDoctor');
        }}
        style={{
          flex: 1,
          marginHorizontal: GetOptimalWidth(20),
          marginVertical: GetOptimalHieght(20),
          paddingVertical: GetOptimalHieght(20),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderRadius: 10,
          ...commonStyle.elevatedShadow,
        }}>
        <Image
          source={{uri: item?.image}}
          style={{
            width: GetOptimalWidth(70),
            height: GetOptimalWidth(70),
            resizeMode: 'cover',
            marginBottom: 10,
          }}></Image>
        <Text
          numberOfLines={3}
          style={{
            ...commonStyle.globalTextStyles,
            fontWeight: '600',
            color: COLORS.PRIMARY,
            textAlign: 'center',
          }}>
          {item?.name}
        </Text>
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
          title={'Select Category'}
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
          data={data}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          numColumns={2}
          // refreshing={this.props?.hospitalData?.loading}
          // onRefresh={() => this.props.getHospital()}
        />
      </View>
    );
  }
}
