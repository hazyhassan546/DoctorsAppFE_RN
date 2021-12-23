import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import {GetOptimalHieght} from '../../helpers/commonHelpers/helpers';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.SECONDARY,
    padding: GetOptimalHieght(20),
  },
});
export default styles;
