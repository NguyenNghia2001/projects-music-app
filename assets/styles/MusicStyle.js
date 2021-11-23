import React from 'react'
import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    height: 80,
  },
  containerLeft: {
    width : 80,
  },
  containerCenter: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center', 
  },
  containerRight: {
    width: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: '100%',
    width : '100%',
    backgroundColor: 'green',
    borderRadius: 3
  },
  textContent:{
    fontSize: 15,
    marginLeft: 7
  },
  icon:{
    fontSize: 20,
    color: 'dimgray',
  },
  detail:{
    fontSize: 13,
    marginTop: 5,
    flexDirection: 'row',
  },
  text:{
    fontSize: 13,
    color:'dimgrey',
    marginRight: 25,
    marginLeft: 10
  }

});
