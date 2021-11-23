import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from '../BottomTab/index'
import { StatusBar } from 'expo-status-bar';

const Tab = createNativeStackNavigator();

const RootStack =()=>{
  return (
    <>
       <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName ="MyTabs" 
          screenOptions={{headerShown: false }}
          >
          <Tab.Screen name="MyTabs" component={MyTabs}  />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  
  );
}
export default RootStack