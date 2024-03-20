import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splash from './screen/Splash'
import Login from './screen/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screen/SignUp'
import Home from './screen/Home'
import ProductInfo from './screen/ProductInfo'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <View style={{
    //   flex: 1
    // }}>
    //   {/* <Splash /> */}
    //   {/* <Login /> */}
    //   {/* <SignUp /> */}
    //   <Home />

    // </View>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} /> */}

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />



      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

