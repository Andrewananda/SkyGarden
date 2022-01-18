import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {moderateScale} from 'react-native-size-matters';
import {green} from '../../utils/colors';

class ProductDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      imageUrl: '',
      loading: true,
    };
  }

  componentDidMount() {
    let item = this.props.route.params.product;
    this.setState({product: item, imageUrl: item.original_image}, () => {
      this.setState({loading: false});
    });
  }

  render() {
    return (
      <Container>
        <Header onPress={() => this.props.navigation.goBack()} />
        <ScrollView style={{flex: 1}}>
          {this.state.product && !this.state.loading && (
            <View>
              <View>
                <Image
                  source={{uri: this.state.imageUrl}}
                  resizeMode={'contain'}
                  resizeMethod="resize"
                  style={{height: moderateScale(200)}}
                />
              </View>
              <View
                style={{
                  margin: moderateScale(10),
                  flexDirection: 'row', flex: 1
                }}>
                {this.state.product.image_list.map((item, index) => {
                  return (
                    <Pressable
                      style={{borderColor: green, margin: moderateScale(5)}}
                      onPress={() => this.setState({imageUrl: item})}>
                      <Image
                        resizeMode={'contain'}
                        source={{uri: item}}
                        style={{
                          height: moderateScale(50),
                          width: moderateScale(50),
                          borderColor:
                            this.state.imageUrl == item ? green : 'white',
                          borderWidth: 2,
                        }}
                      />
                    </Pressable>
                  );
                })}
              </View>
            </View>
          )}
        </ScrollView>
      </Container>
    );
  }
}

export default ProductDescription;
