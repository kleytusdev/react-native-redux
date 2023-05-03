import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import Home from '../views/Home/Home';
import Favorite from '../views/Favorite/Favorite';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor:'#000',
        elevation: 0,
      },
      headerTintColor: 'white',
      headerTitle: '',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 17,
        fontFamily: "Poppins-Medium",
      },

    }} initialRouteName={'Home'}>

      {/* <Stack.Screen name={ROUTES.REGISTER} component={Register} /> */}
      {/* <Stack.Screen options={{headerShown: false}} name={ROUTES.PRODUCT} component={ProductScreen} /> */}
      {/* <Stack.Screen options={{ headerTitle: 'Home' }} name={'Home'} component={Home} /> */}
      <Stack.Screen options={{ headerTitle: 'Home' }} name={'HOME_TAB'} component={Home} />
      <Stack.Screen options={{headerShown: false}} name={'Home'} component={BottomTabNavigator} />

    </Stack.Navigator>
  );
}