import React, {Component} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {moderateScale} from 'react-native-size-matters';
import {green} from '../../utils/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CarIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Card, List} from 'react-native-paper';
import styles from './styles';
import {bindActionCreators} from 'redux';
import {addProduct} from '../../redux/action';
import {connect} from 'react-redux';

class ProductDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      imageUrl: '',
      loading: true,
      quantity: 0,
    };
  }

  componentDidMount() {
    let item = this.props.route.params.product;
    this.setState({product: item, imageUrl: item.original_image}, () => {
      this.setState({loading: false});
    });
  }

  getOfferBenefit(item) {
    if (item.offer_benefit_type == 'Absolute') {
      return item.stock_record_price_currency + ' ' + item.offer_benefit_value;
    }
    return item.offer_benefit_value + '%';
  }

  addToCart = () => {
    const productToSend = {
      ...this.state.product,
      ...this.state.quantity,
    };
    this.props.addProduct(productToSend),
      this.props.navigation.navigate('Cart');
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header onPress={() => this.props.navigation.goBack()} />
        <ScrollView style={styles.scrollViewStyle}>
          {this.state.product && !this.state.loading && (
            <View>
              <View>
                <Image
                  source={{uri: this.state.imageUrl}}
                  resizeMode={'contain'}
                  resizeMethod="resize"
                  style={{height: moderateScale(160)}}
                />
              </View>
              <View style={styles.customCarouselView}>
                {this.state.product.image_list.map((item, index) => {
                  return (
                    <Pressable
                      style={styles.carouselClickView}
                      onPress={() => this.setState({imageUrl: item})}
                      key={index}>
                      <Image
                        resizeMode={'contain'}
                        source={{uri: item}}
                        style={[
                          styles.carouselImageStyle,
                          {
                            borderColor:
                              this.state.imageUrl == item ? green : 'white',
                          },
                        ]}
                      />
                    </Pressable>
                  );
                })}
              </View>
              <View style={{flexDirection: 'row', margin: moderateScale(10)}}>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                  }}>
                  {this.state.product.partner_name}
                </Text>
                {this.state.partner_is_skygarden_verified && (
                  <Icon
                    type={'MaterialIcons'}
                    name={'verified'}
                    size={moderateScale(18)}
                    color={green}
                    style={{marginLeft: moderateScale(6)}}
                  />
                )}
              </View>
              <View>
                <Text style={styles.productTitle}>
                  {this.state.product.title}
                </Text>
              </View>
              <View style={{flexDirection: 'row', margin: moderateScale(10)}}>
                <View>
                  <Text style={styles.txtRetailPriceStyle}>
                    {this.state.product.stock_record_price_currency +
                      ' ' +
                      this.state.product.stock_record_price_retail}
                  </Text>
                </View>
                <View style={{marginStart: moderateScale(10)}}>
                  <Text style={styles.txtOfferBenefit}>
                    {this.getOfferBenefit(this.state.product)}
                  </Text>
                </View>
              </View>
              <View>
                <Pressable
                  style={styles.txtAddToCartView}
                  onPress={this.addToCart}>
                  <Text style={styles.txtAddToCart}>Add To Cart</Text>
                </Pressable>
              </View>
              <View style={styles.shippingViewStyle}>
                <View>
                  <CarIcon
                    name={'van-utility'}
                    size={moderateScale(20)}
                    color={green}
                    style={{margin: moderateScale(10)}}
                  />
                </View>
                <View>
                  <Text style={{width: moderateScale(250)}}>
                    Delivery within nairobi CBD from as low as{' '}
                    <Text style={{fontWeight: 'bold'}}>Ksh 100 </Text>
                    <Text
                      style={{color: green, textDecorationLine: 'underline'}}>
                      Calculate shipping
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.accordionViewStyle}>
                <List.AccordionGroup>
                  <List.Accordion
                    titleStyle={{color: '#000'}}
                    title="Description"
                    id="1">
                    <View style={{margin: moderateScale(10)}}>
                      <View>
                        <Text style={styles.txtAbout}>About</Text>
                        <Text>{this.state.product.description}</Text>
                      </View>
                      <View>
                        <Text style={styles.txtProductCondition}>
                          Product Condition
                        </Text>
                        <Text>
                          {this.state.product.product_condition
                            ? this.state.product.product_condition
                            : 'not defined'}
                        </Text>
                      </View>
                    </View>
                  </List.Accordion>
                  <List.Accordion
                    titleStyle={{color: '#000'}}
                    title="Know your seller"
                    id="2">
                    <Card style={{borderRadius: moderateScale(10)}}>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Text style={styles.txtKnowYourSeller}>
                            Know your seller
                          </Text>
                          <Text style={styles.txtPartnerName}>
                            {this.state.product.partner_name}
                          </Text>
                          {this.state.product.partner_description !== null && (
                            <Text style={{margin: moderateScale(10)}}>
                              {this.state.product.partner_description}
                            </Text>
                          )}
                          <Text style={{marginStart: moderateScale(10)}}>
                            {this.state.product.partner_country_display +
                              ', ' +
                              this.state.product.partner_city}
                          </Text>
                          <Text style={styles.txtItemAvailability}>
                            {'Item availability ' +
                              this.state.product.pickup_delivery_period}
                          </Text>
                        </View>
                        <View style={{flex: 1}}>
                          <Image
                            source={{
                              uri: this.state.product.partner_profile_image,
                            }}
                            resizeMode={'contain'}
                            style={styles.imgPartner}
                          />
                        </View>
                      </View>
                    </Card>
                  </List.Accordion>
                </List.AccordionGroup>
              </View>
            </View>
          )}
        </ScrollView>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addProduct,
    },
    dispatch,
  );
};

export default connect(null, mapDispatchToProps)(ProductDescription);
