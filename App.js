import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splash from './screen/Splash'
import Login from './screen/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screen/SignUp'
import Home from './screen/Home'
import ProductInfo from './screen/ProductInfo'
import Cart from './screen/Cart';
import Setting from './screen/Setting';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <View style={{
    //   flex: 1
    // }}>
    //   {/* <Splash /> */}
    //   {/* <Login /> */}
    //   {/* <SignUp /> */}
    //   {/* <Home /> */}
    //   <Cart />
    // </View>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} /> */}

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

