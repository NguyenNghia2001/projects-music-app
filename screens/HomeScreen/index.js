import React from 'react'
import {View , Text , StyleSheet, FlatList } from 'react-native'
import MusicItem from '../../components/MusicItem'
import ImageMusic from '../../assets/images/images.jpeg'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    song: 'Jingle Bells - James Pierpont ',
    size: '3MB',
    duration: '5:00',
    img: ImageMusic,
    iconHeart: 'heart',
    iconPlay : 'play-outline'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    song: 'A Thousand Years - Christina Perri',
    size: '3.3MB',
    duration: '5:09',
    img: ImageMusic,
    iconHeart: 'heart',
    iconPlay : 'play-outline'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    song: 'Apologize - Timbaland',
    size: '5MB',
    duration: '6:00',
    img: ImageMusic,
    iconHeart: 'heart',
    iconPlay : 'play-outline',
  },
   {
    id: 'bd7acffea-c1b1-46c2-aed5-3ad53abb28ba',
    song: 'Love Paradise – Kelly Chan',
    size: '5.1MB',
    duration: '6:02',
    img: ImageMusic,
    iconHeart: 'heart',
    iconPlay : 'play-outline'
  },
  {
    id: '3acafc-c605-48d3-a4f8-fbd91aa97f63',
    song: 'One Day – Charice',
    size: '6MB',
    duration: '6:12',
    img: ImageMusic,
    iconHeart: 'heart',
    iconPlay : 'play-outline'
  },
  {
    id: '58690f-3da1-471f-bd96-145571e29d72',
    song: 'Safe And Sound – Taylor Swift',
    size: '3.2MB',
    duration: '5:05',
    img: ImageMusic,
    iconHeart: 'heart',
    iconPlay : 'play-outline'
  },
  {
    id: '3ac6c-c605-48d3-a4f8-fbd91aa97f63',
    song: 'Sealed With A Kiss – Jason Donovan',
    size: '2MB',
    duration: '3:00',
    img: ImageMusic,
    iconHeart: 'heart',
    iconPlay : 'play-outline'
  },
  {
    id: '58694a0f-3da1-471f-bd96-141e29d72',
    song: 'Seasons In The Sun – Westlife',
    size: '2.9MB',
    duration: '4:00',
    img: ImageMusic,
    iconHeart: 'heart',
    iconPlay : 'play-outline'
  },
];

const HomeScreen =()=>{

  const renderItem =({item})=>{
    return (
       <View>
        <MusicItem 
        song = {item.song} 
        iconHeart = {item.iconHeart} 
        iconPlay = {item.iconPlay}
        images= {item.img}
        size = {item.size}
        duration = {item.duration}

        />
        </View>
    )
  }
  return (

    <View style={styles.container}>
      <FlatList
        data={DATA}
       renderItem={renderItem}
        keyExtractor ={(item) => item.id}
        />
    </View>
  )
}
export default HomeScreen

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20
    
  },
})