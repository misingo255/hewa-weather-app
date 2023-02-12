import React,{useState,useEffect} from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


const BackgroundImage = () => {
  return (
    <Image source={require('../assets/background.png')} style={styles.backgroundImage} />
  );
};


export default function HomeScreen ({ navigation }){

  
  let [data, setData] = useState(null);


  useEffect(() => {

      const city = "dar es salaam";
      const part1 = "https://api.openweathermap.org/data/2.5/weather?q=";
      const part2 = "&appid=c1f0fdee222f1940a77d2026fef8d81d"
      const URL = part1 + city + part2;
      fetch(URL)
      .then(response => {
        if (!response.ok) {
            console.log("Network response was not ok.");
        }
        return response.json();
    })
    .then(datas => {
      setData(datas.message);
      console.log(data)
    })
    .catch(error => console.error("There was a problem with the fetch operation:", error));

      
  }, []);

  return (
    <View style={styles.container}>
        <BackgroundImage />
      
        <View style = {styles.logoContainer}>
              <Image source = {require("../assets/logo.png")} style = {styles.theLogo}/>
        </View>

        <View style= {styles.locationContainer}>
            <Ionicons name="location-sharp" size={24} color="#FFB200" />
            <Text style = {styles.locationName}>{data["name"]}</Text>
        </View>

        <View style = {styles.cloudsContainer}>
            {
                    
            }
        </View>

        <View style = {styles.temperatureContainer}>
            <Text style = {styles.tempValue}>{data["main"]["temp"]}</Text>
            <Text style = {styles.tempSymbol}>c</Text>
        </View>

        <View style = {styles.conditionContainer}>
            <View style = {styles.subConditionContainer}>
              <Text style = {styles.feelingText}>Feeling Like</Text>
              <Text style = {styles.feelingNumber}>{data["main"]["feels_like"]}</Text>
            </View> 
            <Text style = {styles.conditionName}>{data["weather"][0]["main"]}</Text>
        </View>

        <View style = {styles.blankContainer}>

        </View>

        <View style = {styles.statisContainer}>

              <View style = {styles.windContainer}>
                  <Feather name="wind" size={24} color="white" />
                  <Text style = {styles.windName}>Windspeed</Text>
                  <Text style = {styles.windValue}>{data["wind"]["speed"]} Km/Hr</Text>

              </View>

              <View style = {styles.dateContainer}>
                  <EvilIcons name="calendar" size={24} color="white" />
                  <Text style = {styles.dateName}>Tuesday, 04 Oct 2022</Text>
                  <Text style = {styles.dateValue}>12:00</Text>
              </View>

              <View style = {styles.humidityContainer}>
                  <Fontisto name="rain" size={24} color="white" />
                  <Text style = {styles.humidityName}>Humidity</Text>
                  <Text style = {styles.humidityValue}>{data["main"]["humidity"]}%</Text>
              </View>

        </View>

        <View style = {styles.navContainer}>

          <TouchableOpacity style = {styles.homeContainer} onPress = {() => navigation.navigate("HomeScreen")}>
            <Entypo name="home" size={40} color="#FFB200" />
          </TouchableOpacity>

          <TouchableOpacity style = {styles.searchContainer} onPress = {() => navigation.navigate("SearchScreen")}>
              <EvilIcons name="search" size={40} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style = {styles.backContainer} onPress = {() => navigation.navigate("HomeScreen")}>
                <Ionicons name="arrow-undo-outline" size={40} color="white" />
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

