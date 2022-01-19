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
import Container from '../components/Container';
import styles from './styles';
import Header from '../components/Header';
import SnackBarComponent from '../components/SnackBarComponent';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      page: 0,
      productList: [],
      refreshing: false,
      filtered: [],
      searchValue: '',
      arrayholder: [],
    };
  }

  componentDidMount() {
    this.loadProduct();
  }

  searchFilterFunction = text => {
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.title.toUpperCase()}   
    ${item.category_name.toUpperCase()} ${item.offer_name.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({products: newData});
  };

  loadProduct() {
    let _this = this;
    withNetwork(
      function () {
        fetchProducts(
          function (response) {
            _this.setState(
              {
                productList: response.data.value,
                loading: false,
              },
              () => {
                _this.filterRecords(0);
              },
            );
            _this.arrayholder = response.data.value;
          },
          function (error) {
            this.setState({loading: false});
            this.snackBar.showSnackBar(
              'An error occurred while loading products',
              'retry',
            );
          },
        );
      },
      function (error) {
        this.setState({loading: false});
        this.snackBar.showSnackBar('No internet connection', 'retry');
      },
    );
  }

  renderProducts = ({item}) => {
    return (
      <Card style={styles.productCard}>
        <Pressable
          onPress={() =>
            this.props.navigation.navigate('ProductDescription', {
              product: item,
            })
          }>
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
              <Pressable
                style={styles.addToCartBtn}
                onPress={() =>
                  this.props.navigation.navigate('ProductDescription', {
                    product: item,
                  })
                }>
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
        </Pressable>
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
        <Header
          onSearch={text => {
            this.searchFilterFunction(text);
          }}
          searchValue={this.state.searchValue}
        />
        {this.state.loading && (
          <View style={styles.loadingIndicatorView}>
            <ActivityIndicator size={30} style={{alignSelf: 'center'}} />
          </View>
        )}
        {!this.state.loading && (
          <View>
            <Text style={styles.txtSmartPhone}>Smartphones</Text>
          </View>
        )}
        <FlatList
          data={this.state.products}
          renderItem={this.renderProducts}
          numColumns={2}
          keyExtractor={(item, index) => index}
          onEndReached={this.onScrollHandler}
          onEndReachedThreshold={0.5}
          scrollEventThrottle={400}
          bounces={false}
          refreshing={this.state.refreshing}
          refreshControl={<RefreshControl refreshing={this.state.refreshing} />}
        />
        <SnackBarComponent
          onPress={() => this.loadProduct()}
          ref={ref => (this.snackBar = ref)}
        />
      </Container>
    );
  }
}
