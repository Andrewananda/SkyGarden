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
import {
  ActivityIndicator,
  Card,
  Appbar,
  Badge,
  Searchbar,
} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';
import Container from '../components/Container';
import styles from './styles';

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
      <Card style={styles.productCard}>
        <View style={{margin: moderateScale(10)}}>
          <Image
            source={{uri: item.thumbnail}}
            style={styles.thumbnailStyle}
            resizeMode={'contain'}
          />
          <Text style={{margin: moderateScale(4)}} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.txtStockPrice}>
            {item.stock_record_price_currency +
              ' ' +
              item.stock_record_price_retail}
          </Text>
          {item.is_on_offer && item.offer_benefit_type == 'Absolute' && (
            <View>
              <Text style={styles.txtOfferBenefit}>
                {item.stock_record_price_currency +
                  ' ' +
                  item.offer_benefit_value}
              </Text>
            </View>
          )}
          <View>
            <Pressable style={styles.addToCartBtn}>
              <Text style={styles.txtAddToCart}>Add to Cart</Text>
              <View style={styles.horizontalLine} />
              <Icon
                style={styles.cartIcon}
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
      <Container style={{flex: 1}}>
        <Appbar.Header style={styles.appBarHeader}>
          <Appbar.Action
            style={styles.logoStyle}
            icon={require('../../assets/skylogo.png')}
            size={moderateScale(120)}
          />
          <Badge style={styles.badgeStyle}>
            <Text style={{color: '#fff'}}>5</Text>
          </Badge>
          <Appbar.Action icon={'cart'} style={styles.cartStyle} />
          <Searchbar
            placeholder="Search for everything"
            style={styles.searchBar}
          />
        </Appbar.Header>
        {this.state.loading && (
          <View style={styles.loadingIndicatorView}>
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
      </Container>
    );
  }
}
