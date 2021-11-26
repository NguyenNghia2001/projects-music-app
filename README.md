# Project UI MusicApp 
> Design the music player application interface according to the available template

[Template Music](https://assets.materialup.com/uploads/9253830c-3386-4edf-8db6-3412543be8d1/preview.png)

### Installation && Usage
The application is run online on the website https://snack.expo.dev/ <br>
- Step 1: create an expo account to run the app demo <br>
- Step 2: choose the interface to demo as web, iphone .. or your personal phone
- Step 3: Practical experience with UI Music (clicking bottom tab will move to new page and bottom menus will be active)
### Some pictures are in the app 
- [Images demo](https://lh3.googleusercontent.com/proxy/gW6BstQAglyyb7DqFPBLrGyOXM9k7aTAREXtx3PnFzMYLKVveb2pje2xJ7RpmZ2TVRhw3o9qoW79Cp1OeOTtKiLJzD-ZCov4NSBYIfDjx7JCUB2H8_M)
- [Videos demo](https://dbk.vn/uploads/ckfinder/images/tin-tuc-1/phim-hanh-dong-3.jpg)

### View code in Screen
- HomeScreen 
```php
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
```

- VideoScreen
```php
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
```
## Result on completion
![Screenshot](https://files.fm/thumb.php?i=5qbehr6pe)


