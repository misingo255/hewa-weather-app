import React,{useState,useEffect} from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { getWeather, dailyForecast, showWeather, getLocation } from 'react-native-weather-api';


const BackgroundImage = () => {
  return (
    <Image source={require('../assets/background.png')} style={styles.backgroundImage} />
  );
};


export default function HomeScreen ({ navigation }){

  
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [condition, setCondition] = useState("");
  const [feeling, setFeeling] = useState("");
  const [icon, setIcon] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")


  useEffect(() => {

    const fetchData = async () => {

      const city = "dar es salaam";
      const code = "c1f0fdee222f1940a77d2026fef8d81d";

      // const part1 = "https://api.openweathermap.org/data/2.5/weather?q=";
      // const part2 = "&appid=c1f0fdee222f1940a77d2026fef8d81d"
      // const URL = part1 + city + part2;
      // const results = await fetch(URL)
      // results.json().then(outputs => {
      //     //console.log(outputs["name"]);
      //     setData(outputs);
      // })

        getWeather({
                  
              key: code,
              city: city,

        }).then(() => {

         const results = new showWeather();

         setCity(results.name)
         setCondition(results.description)
         setFeeling(results.feels_like)
         setHumidity(results.humidity)
         setTemperature(results.temp)
         setWind(results.wind)
         setIcon(results.icon)

         const dating = new Date();
         const datevalue = dating.toDateString();
         const timevalue = dating.toLocaleTimeString()

         setDate(datevalue);
         setTime(timevalue);
        
        });


    } 

    fetchData();

  }, [])

  return (
    <View style={styles.container}>
        <BackgroundImage />
      
        <View style = {styles.logoContainer}>
              <Image source = {require("../assets/logo.png")} style = {styles.theLogo}/>
        </View>

        <View style= {styles.locationContainer}>
            <Ionicons name="location-sharp" size={24} color="#FFB200" />
            <Text style = {styles.locationName}>{city}</Text>
        </View>

        <View style = {styles.cloudsContainer}>
            <Image source = {{uri:icon}} style = {styles.theIcon}/>
        </View>

        <View style = {styles.temperatureContainer}>
            <Text style = {styles.tempValue}>{temperature}</Text>
            <Text style = {styles.tempSymbol}>c</Text>
        </View>

        <View style = {styles.conditionContainer}>
            <View style = {styles.subConditionContainer}>
              <Text style = {styles.feelingText}>Feeling Like</Text>
              <Text style = {styles.feelingNumber}>{feeling}</Text>
            </View> 
            <Text style = {styles.conditionName}>{condition}</Text>
        </View>

        <View style = {styles.blankContainer}>

        </View>

        <View style = {styles.statisContainer}>

              <View style = {styles.windContainer}>
                  <Feather name="wind" size={24} color="white" />
                  <Text style = {styles.windName}>Windspeed</Text>
                  <Text style = {styles.windValue}>{wind} Km/Hr</Text>

              </View>

              <View style = {styles.dateContainer}>
                  <EvilIcons name="calendar" size={24} color="white" />
                  <Text style = {styles.dateName}>{date}</Text>
                  <Text style = {styles.dateValue}>{time}</Text>
              </View>

              <View style = {styles.humidityContainer}>
                  <Fontisto name="rain" size={24} color="white" />
                  <Text style = {styles.humidityName}>Humidity</Text>
                  <Text style = {styles.humidityValue}>{humidity}%</Text>
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

  theIcon:{
    width: '150px',
    height: '150px',
    position: "absolute",
    left: "50%",

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
      fontSize: "50px",
      fontWeight: "bold",
      color: "white",
  },

  tempSymbol: {
      fontSize: "50px",
      color: "white",
      position: "absolute",
      top: "15%",
      left: "75%",
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
    position: "absolute",
    left: "65%",
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
    position: "absolute",
    left: "65%",
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
    position: "absolute",
    left: "65%",
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

