import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './modules/core/theme'
import {
  HomeScreen,

} from './modules/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
          }}
        >

          <Stack.Screen name="HomeScreen" component={HomeScreen} />

          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
