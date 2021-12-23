import {Platform, StyleSheet} from 'react-native';
import COLORS, {alpha} from '../common/colors';
import {scaledFontSize} from '../helpers/commonHelpers/helpers';

const SHADOW_SIZE = Platform.select({ios: 2, android: 10});

export const commonStyle = StyleSheet.create({
  elevatedShadow: {
    shadowColor: alpha(COLORS.BLACK, 0.4),
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: SHADOW_SIZE,
  },
  globalTextStyles: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaledFontSize(14),
    color: COLORS.PRIMARY_TEXT,
  },
});
