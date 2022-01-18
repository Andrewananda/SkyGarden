import React, {Component} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import Container from '../components/Container';
import Header from '../components/Header';
import {moderateScale} from 'react-native-size-matters';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {green} from '../utils/colors';
import styles from './styles';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          original_image: 'https://reactnative.dev/img/tiny_logo.png',
          title:
            "iBRIT i5 - 5.5'' Smartphone 16GB ROM + 2GB RAM 4G and  Free Mobile Cover case",
          amount: 'Ksh 12,960',
        },
        {
          original_image: 'https://reactnative.dev/img/tiny_logo.png',
          title:
            "iBRIT i5 - 5.5'' Smartphone 16GB ROM + 2GB RAM 4G and  Free Mobile Cover case",
          amount: 'Ksh 12,960',
        },
        {
          original_image: 'https://reactnative.dev/img/tiny_logo.png',
          title:
            "iBRIT i5 - 5.5'' Smartphone 16GB ROM + 2GB RAM 4G and  Free Mobile Cover case",
          amount: 'Ksh 12,960',
        },
        {
          original_image: 'https://reactnative.dev/img/tiny_logo.png',
          title:
            "iBRIT i5 - 5.5'' Smartphone 16GB ROM + 2GB RAM 4G and  Free Mobile Cover case",
          amount: 'Ksh 12,960',
        },
        {
          original_image: 'https://reactnative.dev/img/tiny_logo.png',
          title:
            "iBRIT i5 - 5.5'' Smartphone 16GB ROM + 2GB RAM 4G and  Free Mobile Cover case",
          amount: 'Ksh 12,960',
        },
        {
          original_image: 'https://reactnative.dev/img/tiny_logo.png',
          title:
            "iBRIT i5 - 5.5'' Smartphone 16GB ROM + 2GB RAM 4G and  Free Mobile Cover case",
          amount: 'Ksh 12,960',
        },
        {
          original_image: 'https://reactnative.dev/img/tiny_logo.png',
          title:
            "iBRIT i5 - 5.5'' Smartphone 16GB ROM + 2GB RAM 4G and  Free Mobile Cover case",
          amount: 'Ksh 12,960',
        },
        {
          original_image: 'https://reactnative.dev/img/tiny_logo.png',
          title:
            "iBRIT i5 - 5.5'' Smartphone 16GB ROM + 2GB RAM 4G and  Free Mobile Cover case",
          amount: 'Ksh 12,960',
        },
        {
          original_image: 'https://reactnative.dev/img/tiny_logo.png',
          title:
            "iBRIT i5 - 5.5'' Smartphone 16GB ROM + 2GB RAM 4G and  Free Mobile Cover case",
          amount: 'Ksh 12,960',
        },
      ],
    };
  }

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
                <Icon size={moderateScale(24)} name={'remove-circle-outline'} />
              </View>
              <View style={styles.m5Style}>
                <Text style={{fontSize: moderateScale(18)}}>10</Text>
              </View>
              <View style={styles.m5Style}>
                <Icon size={moderateScale(24)} name={'add-circle-outline'} />
              </View>
            </View>
          </View>
          <View style={styles.btnRemoveView}>
            <View>
              <Text style={{color: green}}>Remove</Text>
            </View>
            <View>
              <Text style={styles.itemTxtAmount}>{item.amount}</Text>
            </View>
          </View>
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
            data={this.state.products}
            renderItem={this.renderProductCart}
            contentContainerStyle={{flexGrow: 1}}
          />
        </View>
        <View style={styles.totalViewStyle}>
          <View>
            <Text style={styles.txtTotal}>Total</Text>
          </View>
          <View>
            <Text style={styles.txtAmount}>Ksh 12,123</Text>
          </View>
        </View>
        <View>
          <Pressable style={styles.btnProceedView}>
            <View>
              <Text style={styles.txtProceed}>Proceed To Checkout</Text>
            </View>
          </Pressable>
        </View>
      </Container>
    );
  }
}

export default Cart;
