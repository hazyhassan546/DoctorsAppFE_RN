import React, {Component} from 'react';
import {Alert} from 'react-native';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import COLORS from '../../common/colors';
import images from '../../common/images';
import {commonStyle} from '../../common/styles';
import BackHeader from '../../components/backHeader';
import Button from '../../components/button';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
class HospitalDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props?.route?.params?.data,
    };
  }

  render() {
    const {data} = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.SECONDARY,
        }}>
        <BackHeader
          edit={true}
          onMenuPress={() => {
            this.props.navigation.goBack();
          }}
          onBellPress={() => {
            this.props.navigation.navigate('UpdateHospital', {data: data});
          }}
        />
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: GetOptimalWidth(20),
              paddingVertical: GetOptimalHieght(30),
            }}>
            <View
              style={{
                width: GetOptimalWidth(110),
                height: GetOptimalWidth(110),
                resizeMode: 'contain',
                backgroundColor: 'white',
                borderRadius: GetOptimalWidth(10),
                ...commonStyle.elevatedShadow,
              }}>
              <Image
                source={{uri: data?.image}}
                style={{
                  width: GetOptimalWidth(110),
                  height: GetOptimalWidth(110),
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
                {data?.name}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  ...commonStyle.globalTextStyles,
                  fontSize: scaledFontSize(12),
                }}>
                {data?.specialization}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  ...commonStyle.globalTextStyles,
                  fontSize: scaledFontSize(12),
                }}>
                {'Adress - '}
                {data?.address}
              </Text>
            </View>
          </View>
          {data?.description ? (
            <View
              style={{
                marginHorizontal: GetOptimalWidth(20),
                borderBottomWidth: 1,
                borderColor: COLORS.PRIMARY_GREY,
                paddingBottom: GetOptimalHieght(20),
              }}>
              <Text
                numberOfLines={1}
                style={{
                  ...commonStyle.globalTextStyles,
                  fontWeight: '600',
                  fontSize: scaledFontSize(12),
                  color: COLORS.BLACK,
                  marginBottom: GetOptimalHieght(10),
                }}>
                {'Description'}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                    marginTop: 3,
                    marginRight: GetOptimalWidth(10),
                  }}
                  source={images.dot}></Image>
                <Text
                  style={{
                    width: '80%',
                    ...commonStyle.globalTextStyles,
                    fontSize: scaledFontSize(12),
                  }}>
                  {data?.description}
                </Text>
              </View>
            </View>
          ) : null}
          <View
            style={{
              marginVertical: 20,
              alignSelf: 'center',
            }}>
            <Button text={'Select'} onPress={()=>{
              this.props.navigation.navigate("SelectCategory");
            }} loading={false} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default HospitalDetail;
