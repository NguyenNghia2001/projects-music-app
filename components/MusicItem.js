import React from 'react';
import { View, Text, StyleSheet , Image } from 'react-native';
import { FontAwesome , Ionicons , FontAwesome5} from '@expo/vector-icons';
import {styles} from '../assets/styles/MusicStyle'

const MusicItem = (item) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft} key={item}>
        <Image source={item.images} style={styles.image}/>
      </View>
      <View style={styles.containerCenter}>
        <Text style={styles.textContent}>{item.song}</Text>
        <View style={styles.detail}>
          <Text style={styles.text}>Size: {item.size}</Text>
          <Text style={styles.text}>Duration : {item.duration} </Text>
        </View>
      </View>
      <View style={styles.containerRight}>
       <FontAwesome5 name={item.iconHeart}  style={[styles.icon ,  {marginRight: 7}]} />
       <Ionicons name={item.iconPlay}  style={styles.icon}/>
      </View>
    </View>
  );
};

export default MusicItem;


