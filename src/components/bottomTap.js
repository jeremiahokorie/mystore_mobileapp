import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../screens/Dashboard';
import Ebook from '../navigation/Ebook';
import Profile from '../navigation/Profile'

const Tab = createMaterialBottomTabNavigator();

function bottomTap() {
    return (
        <Tab.Navigator
        initialRouteName="Dashboard"
        activeColor="#e91e63"
        
        style={
          {
            backgroundColor: '#8e7e7e'
          }
        }
    >
    
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ebook"
        component={Ebook}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      </Tab.Navigator>
      
    )
}

export default bottomTap;