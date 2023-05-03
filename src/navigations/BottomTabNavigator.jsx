import React from 'react';
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Favorite from '../views/Favorite/Favorite';
import Home from '../views/Home/Home'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: '#fff',
        tabBarIcon: ({ color, focused }) => {
          let iconName;
          if (route.name === 'HOME_TAB'){
            iconName = focused ? "home" : 'home-outline';
          } else if (route.name === 'FAVORITE_TAB'){
            iconName = focused ? "heart" : 'heart-outline';
          } 
          return <Ionicons name={iconName} size={20} color={color} /> 
        }
      })}
    >
      <Tab.Screen name={'HOME_TAB'} component={Home}/>
      <Tab.Screen name={'FAVORITE_TAB'} component={Favorite} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    paddingHorizontal: 30,
    backgroundColor: '#000',
    borderTopWidth: 0,
  }
})