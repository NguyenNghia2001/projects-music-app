import React from 'react';
import { View, Text, StyleSheet , Image } from 'react-native';
import { MaterialCommunityIcons,  FontAwesome5} from '@expo/vector-icons';

const VideoItem = (item) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft} key={item}>
        <Image source={item.images} style={styles.image}/>
      </View>
      <View style={styles.containerCenter}>
        <Text style={styles.textContent}>{item.video}</Text>
        <View style={styles.detail}>
          <Text style={styles.text}>Size: {item.size}</Text>
          <Text style={styles.text}>Duration : {item.duration} </Text>
        </View>
      </View>
      <View style={styles.containerRight}>
       <FontAwesome5 name={item.iconHeart}  style={[styles.icon ,  {marginRight: 7}]} />
       <MaterialCommunityIcons name={item.iconMusic} size={24} color="black" />
      </View>
    </View>
  );
};

export default VideoItem;

const styles = StyleSheet.create({
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
    fontSize: 24,
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
