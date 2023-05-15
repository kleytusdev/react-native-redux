import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import Home from '../views/Home/Home';
import Favorite from '../views/Favorite/Favorite';
import UpdateInfo from '../components/UpdateInfo';

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
      },

    }} initialRouteName={'Home'}>

      {/* <Stack.Screen name={ROUTES.REGISTER} component={Register} /> */}
      {/* <Stack.Screen options={{headerShown: false}} name={ROUTES.PRODUCT} component={ProductScreen} /> */}
      {/* <Stack.Screen options={{ headerTitle: 'Home' }} name={'Home'} component={Home} /> */}
      <Stack.Screen options={{ headerTitle: 'Home' }} name={'HOME_TAB'} component={Home} />
      <Stack.Screen options={{ headerTitle: 'UpdateInfo' }} name={'UpdateInfo'} component={UpdateInfo} />
      <Stack.Screen options={{headerShown: false}} name={'Home'} component={BottomTabNavigator} />

    </Stack.Navigator>
  );
}