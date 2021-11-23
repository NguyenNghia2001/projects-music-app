import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen/index';
import VideoScreen from '../../screens/VideoScreen/index';
import AbumScreen from '../../screens/AbumScreen/index'
import HeartScreen from '../../screens/HeartSscreen/index'
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
    activeColor="#fff"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Listen') {
            iconName =  'headphones'
          } else if (route.name === 'Videos') {
            iconName = 'youtube-play'
          }
          else if (route.name === 'Favorite') {
            iconName = 'heart'
          }else if (route.name === 'Abum') {
            iconName = 'folder'
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#15f2f2',
        tabBarInactiveTintColor: 'darkgrey',
      })}>
      <Tab.Screen name="Listen" component={HomeScreen}  
        options={{
          title: 'Audio List',
          headerStyle: {
            backgroundColor: '#15f2f2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            paddingTop: 10
          },
        }}
      />
      <Tab.Screen name="Videos" component={VideoScreen} 
         options={{
          title: 'Video List',
          headerStyle: {
            backgroundColor: '#15f2f2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            paddingTop: 10
          },
        }}
      />
      <Tab.Screen name="Favorite" component={HeartScreen}
         options={{
          title: 'Favorite List',
          headerStyle: {
            backgroundColor: '#15f2f2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            paddingTop: 10
          },
        }}
       />
      <Tab.Screen name="Abum" component={AbumScreen}
         options={{
          title: 'Music Library',
          headerStyle: {
            backgroundColor: '#15f2f2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            paddingTop: 10
          },
        }}
       />

    </Tab.Navigator>
  );
};
export default MyTabs;
