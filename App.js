import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import RootStack from './navigations/RootStack/index';

export default function App() {
  return (
    <>
      <RootStack/>
    </>
  );
}
