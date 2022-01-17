import React, {Component} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import {fetchProducts} from '../utils/network';
import {withNetwork} from '../utils';
import {ActivityIndicator, Card} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      page: 0,
      productList: [],
      refreshing: false,
    };
  }

  componentDidMount() {
    this.loadProduct();
  }

  loadProduct() {
    let _this = this;
    withNetwork(
      function () {
        fetchProducts(
          function (response) {
            _this.setState(
              {productList: response.data.value, loading: false},
              () => {
                _this.filterRecords(0);
              },
            );
          },
          function (error) {
            console.log('Error', error);
          },
        );
      },
      function (error) {
        console.log('NetworkError', error);
      },
    );
  }

  renderProducts = ({item}) => {
    return (
      <Card
        style={{
          flex: 1,
          elevation: 8,
          margin: moderateScale(4),
          borderRadius: moderateScale(4),
        }}>
        <View style={{margin: moderateScale(10)}}>
          <Image
            source={{uri: item.thumbnail}}
            style={{height: moderateScale(150), margin: moderateScale(4)}}
            resizeMode={'contain'}
          />
          <Text style={{margin: moderateScale(4)}} numberOfLines={2}>
            {item.title}
          </Text>
          <Text
            style={{
              color: '#4D4D4D',
              fontWeight: 'bold',
              fontSize: moderateScale(16),
              marginStart: moderateScale(4),
            }}>
            {item.stock_record_price_currency +
              ' ' +
              item.stock_record_price_retail}
          </Text>
          {item.is_on_offer && item.offer_benefit_type == 'Absolute' && (
            <View>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  color: '#c0c0c0',
                  fontWeight: 'bold',
                  textDecorationLine: 'line-through',
                  marginStart: moderateScale(4),
                }}>
                {item.stock_record_price_currency +
                  ' ' +
                  item.offer_benefit_value}
              </Text>
            </View>
          )}
          <View>
            <Pressable
              style={{
                flexDirection: 'row',
                backgroundColor: '#4D4D4D',
                margin: moderateScale(5),
                borderRadius: moderateScale(4),
                width: moderateScale(125),
              }}>
              <Text
                style={{
                  color: '#fff',
                  margin: moderateScale(5),
                  marginStart: moderateScale(10),
                }}>
                Add to Cart
              </Text>
              <View
                style={{
                  height: '75%',
                  width: 1,
                  backgroundColor: '#909090',
                  marginTop: moderateScale(4),
                }}
              />
              <Icon
                style={{
                  margin: moderateScale(5),
                  marginStart: moderateScale(10),
                }}
                size={moderateScale(20)}
                color={'#fff'}
                name={'shoppingcart'}
              />
            </Pressable>
          </View>
        </View>
      </Card>
    );
  };

  filterRecords = page => {
    const newRecords = [];
    for (
      let i = page * 12, il = i + 12;
      i < il && i < this.state.productList.length;
      i++
    ) {
      newRecords.push(this.state.productList[i]);
    }
    this.setState({
      products: [...this.state.products, ...newRecords],
      refreshing: false,
    });
  };

  onScrollHandler = () => {
    this.setState(
      {
        page: this.state.page + 1,
        refreshing: true,
      },
      () => {
        this.filterRecords(this.state.page);
      },
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.loading && (
          <View
            style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
            <ActivityIndicator size={30} style={{alignSelf: 'center'}} />
          </View>
        )}
        <FlatList
          data={this.state.products}
          renderItem={this.renderProducts}
          numColumns={2}
          keyExtractor={(item, index) => index}
          onEndReached={this.onScrollHandler}
          onEndThreshold={0}
          refreshControl={<RefreshControl refreshing={this.state.refreshing} />}
        />
      </View>
    );
  }
}
