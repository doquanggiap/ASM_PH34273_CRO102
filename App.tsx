import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splash from './screen/Splash'
import Login from './screen/Login'

const App = () => {
  return (
    <View style={{
      flex: 1
    }}>
      {/* <Splash /> */}
      <Login />

    </View>
  )
}

export default App

