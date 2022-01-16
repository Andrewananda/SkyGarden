import {black} from '../utils/colors';
import {moderateScale} from 'react-native-size-matters';

export const styles = {
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: black,
    justifyContent: 'center',
    alignContent: 'center',
  },
  logoStyle: {
    alignSelf: 'center',
    width: moderateScale(300),
  },
};
