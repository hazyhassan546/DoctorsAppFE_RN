import React, {Component} from 'react';
import {Alert} from 'react-native';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import COLORS from '../../common/colors';
import images from '../../common/images';
import {commonStyle} from '../../common/styles';
import BackHeader from '../../components/backHeader';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';

const data = [
  {
    id: 0,
    name: 'Dr .Hassan',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62AUTV6YaIsWGg6pFu1OS9NGUy-DTxj5ZGw&usqp=CAU',
    spec: 'Dentist',
    address: '2km',
  },
  {
    id: 2,
    name: 'Dr .Hassan',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62AUTV6YaIsWGg6pFu1OS9NGUy-DTxj5ZGw&usqp=CAU',
    spec: 'Dentist',
    address: '2km',
  },
  {
    id: 3,
    name: 'Dr .Hassan',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62AUTV6YaIsWGg6pFu1OS9NGUy-DTxj5ZGw&usqp=CAU',
    spec: 'Dentist',
    address: '2km',
  },
  {
    id: 4,
    name: 'Dr .Hassan',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62AUTV6YaIsWGg6pFu1OS9NGUy-DTxj5ZGw&usqp=CAU',
    spec: 'Dentist',
    address: '2km',
  },
  {
    id: 5,
    name: 'Dr .Hassan',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62AUTV6YaIsWGg6pFu1OS9NGUy-DTxj5ZGw&usqp=CAU',
    spec: 'Dentist',
    address: '2km',
  },
  {
    id: 6,
    name: 'Dr .Hassan',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62AUTV6YaIsWGg6pFu1OS9NGUy-DTxj5ZGw&usqp=CAU',
    spec: 'Dentist',
    address: '2km',
  },
  {
    id: 7,
    name: 'Dr .Hassan',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62AUTV6YaIsWGg6pFu1OS9NGUy-DTxj5ZGw&usqp=CAU',
    spec: 'Dentist',
    address: '2km',
  },
  {
    id: 8,
    name: 'Dr .Hassan',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62AUTV6YaIsWGg6pFu1OS9NGUy-DTxj5ZGw&usqp=CAU',
    spec: 'Dentist',
    address: '2km',
  },
  {
    id: 9,
    name: 'Dr .Hassan',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62AUTV6YaIsWGg6pFu1OS9NGUy-DTxj5ZGw&usqp=CAU',
    spec: 'Dentist',
    address: '2km',
  },
  {
    id: 10,
    name: 'Dr .Hassan',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62AUTV6YaIsWGg6pFu1OS9NGUy-DTxj5ZGw&usqp=CAU',
    spec: 'Dentist',
    address: '2km',
  },
  {
    id: 11,
    name: 'Dr .Hassan',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62AUTV6YaIsWGg6pFu1OS9NGUy-DTxj5ZGw&usqp=CAU',
    spec: 'Dentist',
    address: '2km',
  },
  {
    id: 12,
    name: 'Dr .Hassan',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62AUTV6YaIsWGg6pFu1OS9NGUy-DTxj5ZGw&usqp=CAU',
    spec: 'Dentist',
    address: '2km',
  },
];
export default class DoctorDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props?.route?.params?.data,
    };
  }

  componentDidMount() {}

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('DoctorDetail')}
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
            borderRadius: GetOptimalWidth(10),
            ...commonStyle.elevatedShadow,
          }}>
          <Image
            source={{uri: item.avatar}}
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
            {item.name}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...commonStyle.globalTextStyles,

              fontSize: scaledFontSize(12),
            }}>
            {item.spec}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...commonStyle.globalTextStyles,
              fontSize: scaledFontSize(12),
            }}>
            {'Adress - '}
            {item.address}
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
    const {data} = this.state;
    return (
      <View
        style={{
          flex: 1,
        }}>
        <BackHeader
          edit={true}
          onMenuPress={() => {
            this.props.navigation.goBack();
          }}
          onBellPress={() => {
            alert('bell');
          }}
        />
        <ScrollView>
          <View
            // onPress={() => this.props.navigation.navigate("DoctorDetail")}
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
                borderRadius: GetOptimalWidth(10),
                backgroundColor: 'white',
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
                {data?.category}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  ...commonStyle.globalTextStyles,

                  fontSize: scaledFontSize(12),
                }}>
                {data?.hospitalName}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  ...commonStyle.globalTextStyles,
                  fontSize: scaledFontSize(12),
                }}>
                {'Address  ' + data?.address}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              // this.props.setDocAvailability(data.availability);
              this.props.navigation.navigate('AddDays');
            }}
            style={{
              marginHorizontal: GetOptimalWidth(20),
              padding: GetOptimalWidth(20),
              backgroundColor: COLORS.WHITE,
              borderRadius: GetOptimalWidth(10),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                numberOfLines={1}
                style={{
                  ...commonStyle.globalTextStyles,
                  fontSize: scaledFontSize(16),
                  color: COLORS.PRIMARY_TEXT,
                }}>
                {'Select Days'}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  ...commonStyle.globalTextStyles,
                  fontSize: scaledFontSize(20),
                }}>
                {'>'}
              </Text>
            </View>
            <Text
              numberOfLines={1}
              style={{
                ...commonStyle.globalTextStyles,
                fontSize: scaledFontSize(12),
                color: '#2EBFB8',
              }}>
              {'Sunday'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // this.props.setDocAvailability(data.availability);
              this.props.navigation.navigate('BookAppointment');
            }}
            style={{
              backgroundColor: COLORS.PRIMARY,
              marginHorizontal: GetOptimalWidth(20),
              padding: GetOptimalHieght(15),
              borderRadius: GetOptimalHieght(10),
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: GetOptimalHieght(20),
            }}>
            <Text
              numberOfLines={1}
              style={{
                ...commonStyle.globalTextStyles,
                fontSize: scaledFontSize(16),
                color: COLORS.WHITE,
              }}>
              {'Book Appointment'}
            </Text>
          </TouchableOpacity>
          {data.availability ? (
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
                {'Availability'}
              </Text>
              {data?.availability.map(item => {
                if (item?.availability) {
                  return (
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
                        numberOfLines={1}
                        style={{
                          ...commonStyle.globalTextStyles,
                          fontSize: scaledFontSize(12),
                        }}>
                        {item?.day}
                      </Text>
                    </View>
                  );
                }
              })}
            </View>
          ) : null}

          {data?.education ? (
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
                  marginTop: GetOptimalHieght(20),
                  marginBottom: GetOptimalHieght(10),
                }}>
                {'Education'}
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
                  numberOfLines={1}
                  style={{
                    ...commonStyle.globalTextStyles,
                    fontSize: scaledFontSize(12),
                  }}>
                  {data?.education}
                </Text>
              </View>
            </View>
          ) : null}
          {data?.specialization ? (
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
                  marginTop: GetOptimalHieght(20),
                  marginBottom: GetOptimalHieght(10),
                }}>
                {'Specialization'}
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
                  numberOfLines={1}
                  style={{
                    ...commonStyle.globalTextStyles,
                    fontSize: scaledFontSize(12),
                  }}>
                  {data?.specialization}
                </Text>
              </View>
            </View>
          ) : null}
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
                  marginTop: GetOptimalHieght(20),
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
                  numberOfLines={1}
                  style={{
                    ...commonStyle.globalTextStyles,
                    fontSize: scaledFontSize(12),
                  }}>
                  {data.description}
                </Text>
              </View>
            </View>
          ) : null}
        </ScrollView>
      </View>
    );
  }
}
