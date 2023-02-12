import React, {useState} from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import * as Progress from 'react-native-progress';




const BackgroundImage = () => {
  return (
    <Image source={require('../assets/background.png')} style={styles.backgroundImage} />
  );
};




export default function LoaderScreen ({ navigation }){

  return (
    <View style={styles.container}>
        <BackgroundImage />
      
        <View style = {styles.loaderContainer}>
              <Progress.CircleSnail color={['white']} />
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },

  loaderContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  
});



