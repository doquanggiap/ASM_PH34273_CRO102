import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated'

const Splash = ({ navigation }) => {
    const translateX = useSharedValue(0)

    useEffect(() => {
        translateX.value = withDelay(1800, withTiming(400, { duration: 1000 })); // Đổi delay và duration

        const timeoutId = setTimeout(() => {
            navigation.navigate('Login')
        }, 2500);

        return () => clearTimeout(timeoutId);
    }, [])

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value }
        ]
    }))

    return (
        <View style={[st.container]}>
            <Animated.View style={animatedStyles}>
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
            </Animated.View>
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