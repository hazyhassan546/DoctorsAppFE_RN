import React, {Component} from 'react';
import {Modal} from 'react-native';
import {Alert} from 'react-native';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import COLORS from '../../common/colors';
import images from '../../common/images';
import {commonStyle} from '../../common/styles';
import BackHeader from '../../components/backHeader';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
export default class DoctorDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props?.route?.params?.data,
      modalVisible: false,
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
  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  render() {
    const {data, modalVisible} = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#E7FAF9',
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
              this.toggleModal();
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
                  fontSize: scaledFontSize(14),
                  fontWeight: '600',
                  color: COLORS.BLACK,
                }}>
                {'Select Appointment Date'}
              </Text>
              <Image
                source={images.calendar2}
                style={{
                  width: GetOptimalWidth(20),
                  height: GetOptimalWidth(20),
                  resizeMode: 'contain',
                }}></Image>
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
        <Modal animationType="slide" visible={modalVisible}>
          <View
            style={{
              backgroundColor: null,
              flex: 1,
              justifyContent: 'center',
              // alignItems: 'center',
            }}>
            <Calendar
              minDate={Date()}
              onDayPress={day => {
                alert(day);
              }}
            />
            <Text
              numberOfLines={1}
              style={{
                ...commonStyle.globalTextStyles,
                fontSize: scaledFontSize(12),
                alignSelf: 'center',
              }}>
              {'Please select date for appointment'}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.toggleModal();
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
                {'Select Date'}
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
