import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const BackgroundImage = () => {
  return (
    <Image source={require('../assets/background.png')} style={styles.backgroundImage} />
  );
};


export default function HomeScreen ({ navigation }){
  return (
    <View style={styles.container}>
        <BackgroundImage />
      
        <View style = {styles.logoContainer}>
              <Image source = {require("../assets/logo.png")} style = {styles.theLogo}/>
        </View>

        <View style= {styles.locationContainer}>
            <Image source = {require("../assets/location.png")} style = {styles.locationIcon} />
            <Text style = {styles.locationName}>Dar es salaam</Text>
        </View>

        <View style = {styles.cloudsContainer}>

        </View>

        <View style = {styles.temperatureContainer}>

        </View>

        <View style = {styles.conditionContainer}>

        </View>

        <View style = {styles.blankContainer}>

        </View>

        <View style = {styles.statisContainer}>

        </View>

        <View style = {styles.navContainer}>

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

  logoContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  theLogo:{
    width: '180px',
    height: '180px',

  },

  locationContainer:{
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },

  locationName: {
    color: "white",
    fontSize: "30px",

  },

  locationIcon:{
    width: "25px",
    height: "25px",
    marginRight: 10,
  },

  cloudsContainer: {
    width: '100%',
    height: '15%',
    backgroundColor: 'red',
  },

  temperatureContainer: {
    width: '100%',
    height: '15%',
    backgroundColor: 'yellow',
  },

  conditionContainer:{
    width: '100%',
    height: '15%',
    backgroundColor: 'green',
  },

  blankContainer: {
    width: '100%',
    height: '8%',
    backgroundColor: 'yellow',
  },

  statisContainer:{
    width: '100%',
    height: '17%',
    backgroundColor: 'black',
  },

  navContainer:{
    width: '100%',
    height: '10%',
    backgroundColor: 'purple',

  }
  
});

