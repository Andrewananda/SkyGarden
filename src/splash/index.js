import React, {Component} from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import {styles} from './styles';
import {CommonActions} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let _this = this;
    this.timeout = setTimeout(function () {
      _this.handleNavigation();
    }, 1500);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleNavigation() {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'product'}],
      }),
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainView}>
          <Image
            source={require('../../assets/skylogo.png')}
            resizeMode={'contain'}
            style={styles.logoStyle}
          />
          <View>
            <ActivityIndicator color={'#fff'} size={moderateScale(20)} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Splash;
