import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextInput from '../components/TextInputCustom'
import Button from '../components/ButtonCustom'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated'

const SignUp = () => {

    //hiệu ứng khởi đầu màn hình
    const translateX = useSharedValue(-400)

    useEffect(() => {
        translateX.value = withDelay(0, withTiming(0, { duration: 1000 }));
    }, [])

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value }
        ]
    }))

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMessEmail, seterrMessEmail] = useState('')
    const [errMessPass, seterrMessPass] = useState('')


    const handleSignUp = () => {
        if (email.length == 0 && password.length == 0) {
            seterrMessEmail('Bạn chưa nhập email')
            seterrMessPass('Bạn chưa nhập password')

            return
        }
        if (email.length == 0) {
            seterrMessEmail('Bạn chưa nhập email')
            return
        }
        if (password.length == 0) {
            seterrMessPass('Bạn chưa nhập password')
            return
        }

        Alert.alert('Đăng ký thành công')
    }

    return (
        <View style={st.container}>
            <Animated.View style={animatedStyles}>

                {/* Tiêu đề màn hình đăng nhập */}
                <Text
                    style={{
                        fontSize: 30,
                        color: '#67d6b0',
                        fontFamily: 'Sono_Proportional-Bold'
                    }}
                >ĐĂNG KÝ</Text>


                {/* Phần nhập thông tin */}
                <View style={{
                    marginTop: 20,
                    height: 200,
                    justifyContent: 'space-evenly'
                }}>
                    <TextInput
                        title='Email'
                        titleStyle={{ color: '#67d6b0', fontSize: 18, fontFamily: 'Sono_Proportional-SemiBold' }}
                        borderColor='#67d6b0'
                        placeholder='Nhập Email'
                        placeholderTextColor='#67d6b0'
                        style={{ color: '#67d6b0', fontFamily: 'Sono_Proportional-SemiBold' }}
                        errorMessage={errMessEmail}
                        onChangeText={(txt) => {
                            setEmail(txt)
                            seterrMessEmail('')
                        }}

                    />

                    <TextInput
                        title='Mật Khẩu'
                        titleStyle={{ color: '#67d6b0', fontSize: 18, fontFamily: 'Sono_Proportional-SemiBold' }}
                        borderColor='#67d6b0'
                        placeholder='Nhập mật khẩu'
                        placeholderTextColor='#67d6b0'
                        style={{ color: '#67d6b0', fontFamily: 'Sono_Proportional-SemiBold' }}
                        errorMessage={errMessPass}
                        onChangeText={(txt) => {
                            setPassword(txt)
                            seterrMessPass('')
                        }}
                    />
                </View>

                {/* Nút đăng nhập */}
                <Button
                    title='Đăng ký'
                    onPress={handleSignUp}
                    buttonStyle={{
                        backgroundColor: '#67d6b0',
                        height: 60,
                        marginTop: 20
                    }}

                    titleStyle={{
                        color: 'white',
                        fontFamily: 'Sono_Proportional-Bold'
                    }}
                />

                {/* Quên mật khẩu */}
                <View style={[st.textLine, { marginTop: 20 }]}>
                    <Text style={[st.bottomText, { marginRight: 10 }]}>
                        Bạn đã có tài khoản?
                    </Text>

                    <TouchableOpacity>
                        <Text style={st.bottomText}>
                            Đăng nhập
                        </Text>
                    </TouchableOpacity>

                </View>
            </Animated.View>



        </View>
    )
}

export default SignUp

const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },

    bottomText: {
        color: '#67d6b0',
        fontSize: 16,
        fontFamily: 'Sono_Proportional-SemiBold'
    },
    textLine: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    }
})
