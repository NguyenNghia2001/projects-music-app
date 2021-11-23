import React from 'react'
import {View , Text , StyleSheet, FlatList } from 'react-native'
import VideoItem from '../../components/VideoItem'
import Video01 from '../../assets/images/video01.jpeg'
import Video02 from '../../assets/images/video02.jpeg'
import Video03 from '../../assets/images/video03.jpeg'
import Video04 from '../../assets/images/video04.jpeg'
import Video05 from '../../assets/images/video05.jpeg'
import Video06 from '../../assets/images/video06.jpeg'
import Video07 from '../../assets/images/video07.jpeg'

const DATA = [
  {
    id: 0,
    video: 'Godzilla vs. Kong - Godzilla',
    size: '300MB',
    duration: '15:09',
    imgVideo: Video01,
    iconHeart: 'heart',
    iconMusic : 'music-circle-outline'
  },
  {
    id: 1,
    video: 'Fast & Furious 9',
    size: '330MB',
    duration: '15:39',
    imgVideo: Video02,
    iconHeart: 'heart',
    iconMusic : 'music-circle-outline'
  },
  {
    id: 2,
    video: 'Quá nhanh quá nguy hiểm 9',
    size: '560MB',
    duration: '46:00',
    imgVideo: Video03,
    iconHeart: 'heart',
    iconMusic : 'music-circle-outline',
  },
   {
    id: 3,
    video: 'Black Widow - Góa phụ đen',
    size: '500MB',
    duration: '36:02',
    imgVideo: Video04,
    iconHeart: 'heart',
    iconMusic : 'music-circle-outline'
  },
  {
    id: 4,
    video: 'Redemption Day',
    size: '900MB',
    duration: '61:12',
    imgVideo: Video05,
    iconHeart: 'heart',
    iconMusic : 'music-circle-outline'
  },
  {
    id: 5,
    video: 'Free Guy - phim lẻ hay Ấn Độ',
    size: '320MB',
    duration: '25:05',
    imgVideo: Video06,
    iconHeart: 'heart',
    iconMusic : 'music-circle-outline'
  },
  {
    id:6,
    video: 'The Eternals - Chủng Loài Siêu Đẳng',
    size: '200MB',
    duration: '13:00',
    imgVideo: Video07,
    iconHeart: 'heart',
    iconMusic : 'music-circle-outline'
  },
  {
    id: 7,
    video: 'Army Of The Dead',
    size: '2.9MB',
    duration: '4:00',
    imgVideo: Video01,
    iconHeart: 'heart',
    iconMusic : 'music-circle-outline'
  },
];

const VideoScreen =()=>{

  const renderItem =({item})=>{
    return (
       <View>
        <VideoItem 
        video = {item.video} 
        iconHeart = {item.iconHeart} 
        iconMusic = {item.iconMusic}
        images= {item.imgVideo}
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
export default VideoScreen

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20
    
  },
})