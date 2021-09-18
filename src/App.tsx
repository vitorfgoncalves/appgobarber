import React from 'react';
import {View, StatusBar} from 'react-native';
import Routes from './routes'
import { NavigationContainer } from '@react-navigation/native'
const App : React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle='light-content' backgroundColor='#312e28'/>
    <View style={{flex:1, backgroundColor: '#312e28'}}><Routes /></View>
  </NavigationContainer>
)

export default App;
