import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/splash';
import Product from './src/product';

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
          <Stack.Screen name={'product'} component={Product} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
