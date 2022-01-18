import {StyleSheet} from 'react-native';
import {black, green} from '../utils/colors';
import {moderateScale} from 'react-native-size-matters';
export default StyleSheet.create({
  appBarHeader: {
    backgroundColor: black,
    height: moderateScale(110),
  },
  logoStyle: {
    position: 'absolute',
    top: moderateScale(-70),
  },
  badgeStyle: {
    position: 'absolute',
    right: 0,
    top: 5,
    backgroundColor: green,
  },
  cartStyle: {
    position: 'absolute',
    right: 0,
    top: 3,
  },
  searchBar: {
    position: 'absolute',
    top: moderateScale(50),
    height: moderateScale(38),
    margin: moderateScale(10),
    width: '90%',
    borderRadius: 10,
  },
  loadingIndicatorView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  addToCartBtn: {
    flexDirection: 'row',
    backgroundColor: '#4D4D4D',
    margin: moderateScale(5),
    borderRadius: moderateScale(4),
    width: moderateScale(125),
  },
  txtAddToCart: {
    color: '#fff',
    margin: moderateScale(5),
    marginStart: moderateScale(10),
  },
  horizontalLine: {
    height: '75%',
    width: 1,
    backgroundColor: '#909090',
    marginTop: moderateScale(4),
  },
  cartIcon: {
    margin: moderateScale(5),
    marginStart: moderateScale(10),
  },
  txtOfferBenefit: {
    fontSize: moderateScale(14),
    color: '#c0c0c0',
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    marginStart: moderateScale(4),
  },
  txtStockPrice: {
    color: '#4D4D4D',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    marginStart: moderateScale(4),
  },
  productCard: {
    flex: 1,
    elevation: 8,
    margin: moderateScale(4),
    borderRadius: moderateScale(4),
  },
  thumbnailStyle: {
    height: moderateScale(150),
    margin: moderateScale(4),
  },
});
