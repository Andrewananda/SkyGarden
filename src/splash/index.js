import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {green} from '../utils';

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: green,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Image
            source={require('../../assets/skylogo.png')}
            resizeMode={'contain'}
            style={{alignSelf: 'center', width: 300}}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Splash;
