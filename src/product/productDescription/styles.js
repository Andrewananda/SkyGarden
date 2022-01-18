import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {green} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  scrollViewStyle: {
    flex: 1,
  },
  customCarouselView: {
    margin: moderateScale(10),
    flexDirection: 'row',
    flex: 1,
  },
  carouselClickView: {
    borderColor: green,
    margin: moderateScale(5),
  },
  carouselImageStyle: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderWidth: 2,
  },
  productTitle: {
    color: '#4D4D4D',
    fontWeight: 'bold',
    marginStart: moderateScale(10),
    fontSize: moderateScale(16),
  },
  txtRetailPriceStyle: {
    fontSize: moderateScale(14),
    color: green,
    fontWeight: 'bold',
  },
  txtOfferBenefit: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
  txtAddToCartView: {
    backgroundColor: green,
    width: moderateScale(250),
    justifyContent: 'center',
    alignSelf: 'center',
    height: moderateScale(40),
    borderRadius: moderateScale(8),
  },
  txtAddToCart: {
    textTransform: 'uppercase',
    alignSelf: 'center',
    fontSize: moderateScale(16),
    color: '#fff',
  },
  shippingViewStyle: {
    backgroundColor: '#DEF5DA',
    margin: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  accordionViewStyle: {
    marginStart: moderateScale(10),
    marginEnd: moderateScale(10),
    marginTop: moderateScale(5),
  },
  txtProductCondition: {
    fontWeight: 'bold',
    color: '#000',
    marginTop: moderateScale(5),
  },
  txtAbout: {
    fontWeight: 'bold',
    color: '#000',
  },
  txtKnowYourSeller: {
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    color: '#000',
    margin: moderateScale(10),
  },
  txtItemAvailability: {
    marginStart: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  imgPartner: {
    borderRadius: moderateScale(10),
    height: moderateScale(150),
  },
  txtPartnerName: {
    textDecorationLine: 'underline',
    marginStart: moderateScale(10),
  },
});
