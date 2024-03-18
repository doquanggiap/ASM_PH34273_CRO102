import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextInput from '../components/TextInputCustom'
import Button from '../components/ButtonCustom'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated'

const Login = ({ navigation }) => {

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


    const handleLogin = () => {
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

        Alert.alert('Đăng nhập thành công')
    }

    const handleSignUp = () => {
        translateX.value = withDelay(0, withTiming(400, { duration: 1000 }))

        setTimeout(() => {
            translateX.value = withDelay(0, withTiming(0, { duration: 1000 }))
        }, 1000);

        setTimeout(() => {
            navigation.navigate('SignUp')
        }, 1000);
    }

    return (
        <View style={st.container}>
            <SafeAreaView>
                <View style={{ marginTop: 30 }}>
                    <Animated.View style={[animatedStyles]}>

                        {/* Tiêu đề màn hình đăng nhập */}
                        <Text
                            style={{
                                fontSize: 30,
                                color: 'white',
                                fontFamily: 'Sono_Proportional-Bold'
                            }}
                        >ĐĂNG NHẬP</Text>


                        {/* Phần nhập thông tin */}
                        <View style={{
                            marginTop: 20,
                            height: 200,
                            justifyContent: 'space-evenly'
                        }}>
                            <TextInput
                                title='Email'
                                titleStyle={{ color: 'white', fontSize: 18, fontFamily: 'Sono_Proportional-SemiBold' }}
                                borderColor='white'
                                placeholder='Nhập Email'
                                placeholderTextColor='white'
                                style={{ color: 'white', fontFamily: 'Sono_Proportional-SemiBold' }}
                                errorMessage={errMessEmail}
                                onChangeText={(txt) => {
                                    setEmail(txt)
                                    seterrMessEmail('')
                                }}

                            />

                            <TextInput
                                title='Mật Khẩu'
                                titleStyle={{ color: 'white', fontSize: 18, fontFamily: 'Sono_Proportional-SemiBold' }}
                                borderColor='white'
                                placeholder='Nhập mật khẩu'
                                placeholderTextColor='white'
                                style={{ color: 'white', fontFamily: 'Sono_Proportional-SemiBold' }}
                                errorMessage={errMessPass}
                                onChangeText={(txt) => {
                                    setPassword(txt)
                                    seterrMessPass('')
                                }}
                            />
                        </View>

                        {/* Nút đăng nhập */}
                        <Button
                            title='Đăng nhập'
                            onPress={handleLogin}
                            buttonStyle={{
                                backgroundColor: 'white',
                                height: 60,
                                marginTop: 20
                            }}

                            titleStyle={{
                                color: '#67d6b0',
                                fontFamily: 'Sono_Proportional-Bold'
                            }}
                        />

                        {/* Quên mật khẩu */}
                        <View style={[st.textLine, { marginTop: 20 }]}>
                            <Text style={[st.bottomText, { marginRight: 10 }]}>
                                Quên mật khẩu?
                            </Text>

                            <TouchableOpacity>
                                <Text style={st.bottomText}>
                                    Tìm lại
                                </Text>
                            </TouchableOpacity>

                        </View>


                        {/* Nút đăng ký */}
                        <View style={st.textLine}>
                            <Text style={[st.bottomText, { marginRight: 10 }]}>
                                Bạn chưa có tài khoản?
                            </Text>

                            <TouchableOpacity onPress={handleSignUp}>
                                <Text
                                    style={st.bottomText}>
                                    Đăng ký
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </Animated.View>
                </View>

            </SafeAreaView>





        </View>
    )
}

export default Login

const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#67d6b0',
        padding: 20
    },

    bottomText: {
        color: 'white',
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