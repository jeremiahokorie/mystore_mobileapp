import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import SplashScreen from './SplashScreen';
import Dashboard from './Dashboard';
const RootStacks = createStackNavigator();

import tabnavigator from '../components/bottomTap';

const RootStack = ({ navigation }) => {

    return (
        
        <RootStacks.Navigator headerMode='None'>
            <RootStacks.Screen name='SplashScreen' component={SplashScreen}/>
            <RootStacks.Screen name='Details' component={Details} />
            <RootStacks.Screen name='SignInScreen' component={SignInScreen} />
            <RootStacks.Screen name='SignUpScreen' component={SignUpScreen} />
            <RootStacks.Screen name ='Dashboard' component={tabnavigator} />
        </RootStacks.Navigator>
        
        
    )

}

export default RootStack;