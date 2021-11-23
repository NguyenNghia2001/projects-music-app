import React from 'react'
import {View , Text , StyleSheet} from 'react-native'

const AbumScreen =()=>{
  return (
    <View style = {styles.container}>
      <Text>  this is a AbumScreen </Text>
    </View>
  )
}
export default AbumScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'yellow'
  }
})