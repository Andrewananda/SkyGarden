import {StyleSheet} from 'react-native';
import {green} from '../utils/colors';
import {moderateScale} from 'react-native-size-matters';

export default StyleSheet.create({
  btnProceedView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: green,
    width: moderateScale(180),
    alignSelf: 'center',
    margin: moderateScale(10),
    height: moderateScale(40),
    borderRadius: moderateScale(8),
  },
  txtProceed: {
    color: '#fff',
    fontWeight: 'bold',
  },
  txtAmount: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: moderateScale(18),
  },
  txtTotal: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: moderateScale(18),
  },
  totalViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: moderateScale(10),
  },
  txtMyCart: {
    fontSize: moderateScale(20),
    margin: moderateScale(10),
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    backgroundColor: '#fff',
  },
  itemContainer: {
    borderRadius: moderateScale(8),
    margin: moderateScale(8),
  },
  itemMainView: {
    flexDirection: 'row',
    margin: moderateScale(10),
    justifyContent: 'space-between',
  },
  itemImageStyle: {
    height: moderateScale(70),
    width: moderateScale(70),
  },
  itemTitleStyle: {
    width: moderateScale(200),
    margin: moderateScale(5),
  },
  itemStepperContainer: {
    flexDirection: 'row',
    marginStart: moderateScale(10),
  },
  m5Style: {
    margin: moderateScale(5),
  },
  btnRemoveView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: moderateScale(5),
  },
  itemTxtAmount: {
    fontWeight: 'bold',
    position: 'absolute',
    bottom: moderateScale(0),
    right: moderateScale(15),
    width: moderateScale(75)
  },
});
