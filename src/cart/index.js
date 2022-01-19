import React, {Component} from 'react';
import {Alert, FlatList, Image, Pressable, Text, View} from 'react-native';
import Container from '../components/Container';
import Header from '../components/Header';
import {moderateScale} from 'react-native-size-matters';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {green} from '../utils/colors';
import styles from './styles';
import {bindActionCreators} from 'redux';
import {addQuantity, removeItem, removeItemFromCart} from '../redux/action';
import {connect} from 'react-redux';
import {numberFormat} from '../utils';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleReduceProductCount(item) {
    this.props.removeItem(item.productId);
  }

  handleAddProductCount(item) {
    this.props.addQuantity(item.productId);
  }

  renderEmptyComponent = () => {
    return (
      <View style={styles.emptyComponentContainer}>
        <Text style={styles.emptyComponent}>
          No items available in cart, add item to proceed to checkout
        </Text>
      </View>
    );
  };

  renderProductCart = ({item}) => {
    return (
      <Card style={styles.itemContainer}>
        <View style={styles.itemMainView}>
          <View>
            <Image
              source={{uri: item.original_image}}
              style={styles.itemImageStyle}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <View>
              <Text numberOfLines={2} style={styles.itemTitleStyle}>
                {item.title}
              </Text>
            </View>
            <View style={styles.itemStepperContainer}>
              <View style={styles.m5Style}>
                <Icon
                  onPress={() => this.handleReduceProductCount(item)}
                  size={moderateScale(24)}
                  name={'remove-circle-outline'}
                />
              </View>
              <View style={styles.m5Style}>
                <Text style={{fontSize: moderateScale(18)}}>
                  {item.quantity}
                </Text>
              </View>
              <View style={styles.m5Style}>
                <Pressable onPress={() => this.handleAddProductCount(item)}>
                  <Icon size={moderateScale(24)} name={'add-circle-outline'} />
                </Pressable>
              </View>
            </View>
          </View>
          <Pressable
            onPress={() => this.props.removeItemFromCart(item.productId)}
            style={styles.btnRemoveView}>
            <View>
              <Text style={{color: green}}>Remove</Text>
            </View>
            <View>
              <Text style={styles.itemTxtAmount}>
                Ksh{' '}
                {numberFormat(item.stock_record_price_retail * item.quantity)}
              </Text>
            </View>
          </Pressable>
        </View>
      </Card>
    );
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header onPress={() => this.props.navigation.goBack()} />
        <View>
          <Text style={styles.txtMyCart}>My Cart</Text>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={this.props.products}
            renderItem={this.renderProductCart}
            contentContainerStyle={{flexGrow: 1}}
            ListEmptyComponent={this.renderEmptyComponent}
            keyExtractor={(item, index) => index}
          />
        </View>
        {this.props.products.length > 0 && (
          <View>
            <View style={styles.totalViewStyle}>
              <View>
                <Text style={styles.txtTotal}>Total</Text>
              </View>
              <View>
                <Text style={styles.txtAmount}>
                  Ksh {numberFormat(this.props.total)}
                </Text>
              </View>
            </View>
            <View>
              <Pressable
                onPress={() =>
                  Alert.alert('Checkout', 'Coming Soon', [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ])
                }
                style={styles.btnProceedView}>
                <View>
                  <Text style={styles.txtProceed}>Proceed To Checkout</Text>
                </View>
              </Pressable>
            </View>
          </View>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.appState.addedProducts,
    total: state.appState.total,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeItem,
      addQuantity,
      removeItemFromCart,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
