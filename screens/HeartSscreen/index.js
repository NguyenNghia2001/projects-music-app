import React from 'react'
import {View , Text , StyleSheet} from 'react-native'

const HeartScreen =()=>{
  return (
    <View style = {styles.container}>
      <Text>  this is a HeartScreen </Text>
    </View>
  )
}
export default HeartScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'green'
  }
})