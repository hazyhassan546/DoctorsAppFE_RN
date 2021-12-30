import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Linking,
} from 'react-native';
import { Icon } from 'react-native-elements';
import COLORS from '../../common/colors';
import images from '../../common/images';
import Images from '../../common/images';
import { commonStyle } from '../../common/styles';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../commonHelpers/helpers';
export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          id: 0,
          title: 'Home',
          key: 'Home',
          image: images.home,
          selected: true,
        },
        {
          id: 1,
          title: 'Recent Appointments',
          key: 'History',
          image: images.calendarIcon,
          selected: false,
        },
        {
          id: 2,
          title: 'Profile',
          key: 'Profile',
          image: images.person,
          selected: false,
        },
        {
          id: 3,
          title: 'Account Setting',
          key: 'Setting',
          image: images.setting,
          selected: false,
        },

      ],
    };
  }

  changeTab = tab => {
    let Tabs = this.state.tabs;
    Tabs.map((item, index) => {
      if (index == tab.id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
    this.setState({
      tabs: Tabs,
    });
    this.props.navigation.navigate(tab.key);
  };

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <View
          style={{
            width: '100%',
            backgroundColor: COLORS.SECONDARY,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.closeDrawer();
            }}
            style={styles.backButton}>
            <Icon name="cross" type="entypo" size={GetOptimalHieght(20)} color={COLORS.PRIMARY} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              padding: GetOptimalHieght(20)
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}
              style={styles.imageContainer}>
              <View style={styles.buttonStyle}>
                <Image source={images.doctor} style={styles.imageStyle} resizeMode="contain" />
              </View>
              <View
                style={{
                  marginLeft: GetOptimalWidth(10)
                }}
              >
                <Text
                  numberOfLines={2}
                  style={[commonStyle.globalTextStyles, {
                    fontSize: scaledFontSize(16),
                    fontWeight: "bold",
                    width: GetOptimalWidth(160),
                    color: COLORS.PRIMARY

                  }]}>{"Sophie Garnier"}</Text>
                <Text style={[commonStyle.globalTextStyles, {
                  fontSize: scaledFontSize(14)
                }]}>{"Luxembourg"}</Text>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          {/* Options Area */}
          {this.state.tabs.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.tabItemContainer}
                onPress={() => this.changeTab(item)}>
                <Image source={item.image} style={styles.imageTab} />
                <Text style={styles.tabText}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.bottomView}>

          <View style={styles.socialImagesArea}>
            <TouchableOpacity
              onPress={() => {
              }}
              style={styles.imageWrap}>
              <Image source={images.logout} style={styles.socialImages} />
              <Text style={styles.tabText}>{'Logout'}</Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabText: {
    color: COLORS.SIDE_MENU_TEXT,
    fontSize: scaledFontSize(18),
    ...commonStyle.globalTextStyles,
    fontWeight: "500"
  },
  socialImagesArea: {
    flexDirection: 'row',
    alignSelf: "flex-start",
    marginTop: GetOptimalHieght(20),
  },
  tabItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: GetOptimalWidth(20),
    paddingVertical: GetOptimalHieght(20),
    borderBottomWidth: 0.4,
    borderColor: COLORS.PRIMARY
  },
  imageWrap: {
    padding: GetOptimalHieght(5),
    borderRadius: GetOptimalHieght(20),
    marginHorizontal: GetOptimalWidth(25),
    flexDirection: "row",
    //...commonStyle.elevatedShadow,
  },
  socialImages: {
    width: GetOptimalHieght(20),
    height: GetOptimalHieght(20),
    marginRight: GetOptimalWidth(10),
    resizeMode: 'contain',
  },
  imageTab: {
    width: GetOptimalHieght(15),
    height: GetOptimalHieght(15),
    marginRight: GetOptimalWidth(15),
    resizeMode: "contain"
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: "center"
  },
  backButton: {
    marginTop: GetOptimalHieght(20),
    alignItems: 'flex-end',
    paddingRight: GetOptimalWidth(20),
  },
  imageStyle: {
    width: GetOptimalHieght(60),
    height: GetOptimalHieght(60),
    borderRadius: GetOptimalHieght(40),
  },
  buttonStyle: {
    width: GetOptimalHieght(60),
    height: GetOptimalHieght(60),
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalHieght(40),
    justifyContent: 'center',
    alignItems: 'center',

  },
  bottomView: {
    height: GetOptimalHieght(80),
    alignItems: 'center',
  },
});
