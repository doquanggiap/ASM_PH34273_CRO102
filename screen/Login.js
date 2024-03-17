import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View style={st.container}>
            <Text
                style={{
                    fontSize: 30,
                    color: 'white',
                    fontFamily: 'Sono_Proportional-Bold'
                }}
            >Login</Text>
        </View>
    )
}

export default Login

const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#67d6b0',
        padding: 20
    }
})