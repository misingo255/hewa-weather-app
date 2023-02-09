import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const BackgroundImage = () => {
  return (
    <Image source={require('../assets/background.png')} style={styles.backgroundImage} />
  );
};


export default function ResultsScreen ({ navigation }){
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
            <Image source = {require("../assets/location.png")} style = {styles.cloudsIcon} />
        </View>

        <View style = {styles.temperatureContainer}>
            <Text style = {styles.tempValue}>27</Text>
            <Text style = {styles.tempSymbol}>c</Text>
        </View>

        <View style = {styles.conditionContainer}>
            <View style = {styles.subConditionContainer}>
              <Text style = {styles.feelingText}>Feeling Like</Text>
              <Text style = {styles.feelingNumber}>28 C</Text>
            </View> 
            <Text style = {styles.conditionName}>Cloudy</Text>
        </View>

        <View style = {styles.blankContainer}>

        </View>

        <View style = {styles.statisContainer}>

              <View style = {styles.windContainer}>
                  <Image source = {require("../assets/location.png")} style = {styles.windIcon} />
                  <Text style = {styles.windName}>Windspeed</Text>
                  <Text style = {styles.windValue}>20 Km/Hr</Text>

              </View>

              <View style = {styles.dateContainer}>
                  <Image source = {require("../assets/location.png")} style = {styles.dateIcon} />
                  <Text style = {styles.dateName}>Tuesday, 04 Oct 2022</Text>
                  <Text style = {styles.dateValue}>12:00</Text>
              </View>

              <View style = {styles.humidityContainer}>
                  <Image source = {require("../assets/location.png")} style = {styles.humidityIcon} />
                  <Text style = {styles.humidityName}>Humidity</Text>
                  <Text style = {styles.humidityValue}>20%</Text>
              </View>

        </View>

        <View style = {styles.navContainer}>

          <TouchableOpacity style = {styles.homeContainer}>
              <Image source = {require("../assets/location.png")} style = {styles.homeIcon} />
          </TouchableOpacity>

          <TouchableOpacity style = {styles.searchContainer}>
              <Image source = {require("../assets/location.png")} style = {styles.searchIcon} />
          </TouchableOpacity>

          <TouchableOpacity style = {styles.backContainer}>
              <Image source = {require("../assets/location.png")} style = {styles.backIcon} />
          </TouchableOpacity>

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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cloudsIcon: {
    width: "50px",
    height: "50px",
    position: "absolute",
    left: 250,
  },
  temperatureContainer: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },

  tempValue: {
      fontSize: "100px",
      fontWeight: "bold",
      color: "white",
  },

  tempSymbol: {
      fontSize: "50px",
      color: "white",
      position: "absolute",
      top: 40,
      left: 270,
  },
  conditionContainer:{
    width: '100%',
    height: '15%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  conditionName: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  },

  subConditionContainer:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },

  feelingText: {
    fontSize: "20px",
    color: "white",
  },

  feelingNumber: {
    fontSize: "20px",
    color: "#ffb200",
    marginLeft: "10px",
  },

  blankContainer: {
    width: '100%',
    height: '8%',
  },

  statisContainer:{
    width: '100%',
    height: '19%',
    display: 'flex',
    flexDirection: 'column',
  },

  windContainer:{
    width: '85%',
    marginLeft: '10%',
    marginRight: '5%',
    height: '33%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  windIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },

  windName: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
  },

  windValue: {
    fontSize: 20,
    color: 'white',
    marginLeft: 90,
  },

  dateContainer:{
    width: '85%',
    marginLeft: '10%',
    marginRight: '5%',
    height: '34%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  dateIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },

  dateName: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
  },

  dateValue: {
    fontSize: 20,
    color: 'white',
    marginLeft: 30,
  },

  humidityContainer:{
    width: '85%',
    marginLeft: '10%',
    marginRight: '5%',
    height: '33%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  humidityIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },

  humidityName: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
  },

  humidityValue: {
    fontSize: 20,
    color: 'white',
    marginLeft: 150,
  },

  navContainer:{
    width: '100%',
    height: '8%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#0E5296',

  },

  homeContainer: {
    width: '33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeIcon:{
    width: 20,
    height: 20,
  },

  searchContainer: {
    width: '33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIcon:{
    width: 20,
    height: 20,
  },

  backContainer: {
    width: '34%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon:{
    width: 20,
    height: 20,
  },
  
});

