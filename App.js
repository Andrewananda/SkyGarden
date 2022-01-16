import React, {Component} from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/splash';

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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
