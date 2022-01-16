import React, {Component} from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import {styles} from './styles';

class Splash extends Component {
  constructor(props) {
    super(props);
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
        </View>
      </SafeAreaView>
    );
  }
}

export default Splash;
