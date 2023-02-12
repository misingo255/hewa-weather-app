import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput,Alert} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const BackgroundImage = () => {
  return (
    <Image source={require('../assets/background.png')} style={styles.backgroundImage} />
  );
};


export default function SearchScreen ({ navigation }){

  const [city, setCity] = useState("")

  const onCitySearch = () => {

    if(city === ""){
      console.log("City name can't be empty");
    } else {
      console.log(city);
    }
  }

  return (
    <View style={styles.container}>
        <BackgroundImage />
      
        <View style = {styles.logoContainer}>
              <Image source = {require("../assets/logo.png")} style = {styles.theLogo}/>
        </View>

        <View style = {styles.searchArea}>

        <TextInput style={{height: 40, paddingHorizontal: 60, borderWidth: 2, margin: 12, borderColor: 'white', borderRadius:10, color: 'white', fontSize: 20}}  onChangeText = {(text)  => setCity(text)} value = {city} placeholder="Enter city name to search"/>
          
        <TouchableOpacity
          style={{ borderRadius:5, paddingVertical:10, paddingHorizontal:30, flexDirection: 'row', backgroundColor: '#FFB200' }} onPressIn = {onCitySearch}>
            <EvilIcons name="search" size={30} color="white" />
            <Text style={{ marginLeft: 10, color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
              Search
          </Text>
        </TouchableOpacity>

        </View>

        <View style = {styles.navContainer}>

          <TouchableOpacity style = {styles.homeContainer} onPress = {() => navigation.navigate("HomeScreen")}>
            <Entypo name="home" size={40} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style = {styles.searchContainer} onPress = {() => navigation.navigate("SearchScreen")}>
              <EvilIcons name="search" size={40} color="#FFB200" />
          </TouchableOpacity>

          <TouchableOpacity style = {styles.backContainer} onPress = {() => navigation.navigate("HomeScreen")}>
                <Ionicons name="arrow-undo-outline" size={40} color="white" />
          </TouchableOpacity>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({

  searchArea: {
    width: '100%',
    height: '82%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

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

