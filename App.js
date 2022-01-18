import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/splash';
import Product from './src/product';
import ProductDescription from './src/product/productDescription';
import Cart from './src/cart';

const Stack = createNativeStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name={'splash'}
            component={Splash}
          />
          <Stack.Screen
            name={'product'}
            component={Product}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'ProductDescription'}
            component={ProductDescription}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Cart'}
            component={Cart}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
