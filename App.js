import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './modules/core/theme'
import {
  HomeScreen,
  SearchScreen,
  ResultsScreen,

} from './modules/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SearchScreen"
          screenOptions={{
            headerShown: false,
          }}
        >

          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="ResultsScreen" component={ResultsScreen} />

          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
