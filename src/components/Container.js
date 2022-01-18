import React from 'react';
import {SafeAreaView} from 'react-native';

const Container = props => {
  return (
    <SafeAreaView style={[props.style ? props.style : {}, {flex: 1}]}>
      {props.children}
    </SafeAreaView>
  );
};

export default Container;
