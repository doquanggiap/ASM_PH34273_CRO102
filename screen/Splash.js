import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Splash = () => {
    return (
        <View style={st.container}>
            <Text style={st.text}>
                ... App
            </Text>

            <Text style={st.text}>
                Họ tên: Đỗ Quang Giáp
            </Text>

            <Text style={st.text}>
                MSSV: PH34273
            </Text>

            <Text style={st.text}>
                Class: MD18306
            </Text>

            <LottieView
                source={require('../assets/animations/robot.json')}
                style={st.robot}
                autoPlay
                loop
            />

            <LottieView
                source={require('../assets/animations/paperplane.json')}
                style={st.plane}
                autoPlay
                loop
            />
        </View>
    )
}

export default Splash

const st = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#67d6b0',
    },

    robot: {
        width: 300,
        height: 300,
    },

    plane: {
        width: 300,
        height: 200,
    },

    text: {
        fontSize: 25,
        color: '#ffffff',
        fontFamily: 'Sono_Proportional-Bold'
    }
})