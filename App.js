import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStack from './src/screens/RootStack';
import bottomTap from './src/components/bottomTap';
import {StatusBar} from 'react-native';

const App = () => {
  StatusBar.setBarStyle( 'light-content',true)
  StatusBar.setBackgroundColor("#009387")
  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  )
}
   
export default App;
