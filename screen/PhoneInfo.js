import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo'



const PhoneInfo = ({ navigation }) => {
    const phoneInfo = {
        name: 'Samsung A11',
        cpu: 'Snap Dragon 450',
        ram: '8GB',
        storage: '32gb',

    };
    return (
        <View style={{
            flex: 1,
        }}>

            <StatusBar
                barStyle='dark-content'
                translucent
                backgroundColor={'transparent'}
            />
            <SafeAreaView style={{
                flex: 1,
            }}>

                {/* thanh tiêu đề */}
                <View style={{
                    flexDirection: 'row',
                    marginTop: 16,
                    width: '100%',
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Setting')}
                        style={{
                            position: 'relative',
                            left: 20,
                        }}>
                        <Entypo name='chevron-left' style={{
                            fontSize: 18,
                            color: '#777777',
                            padding: 12,
                            backgroundColor: '#F0F0F3',
                            borderRadius: 10,
                            width: 45
                        }} />
                    </TouchableOpacity>

                    <Text style={{
                        position: 'relative',
                        left: 40,
                        fontSize: 25,
                        fontFamily: 'Sono_Proportional-ExtraBold',
                    }}>
                        Thông tin điện thoại
                    </Text>
                </View>

                <View>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'Sono_Proportional-SemiBold',
                        marginHorizontal: 20,
                        marginTop: 20
                    }}>
                        Tên: {phoneInfo.name}
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'Sono_Proportional-SemiBold',
                        marginHorizontal: 20,
                        marginTop: 20
                    }}>
                        CPU: {phoneInfo.cpu}
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'Sono_Proportional-SemiBold',
                        marginHorizontal: 20,
                        marginTop: 20
                    }}>
                        Ram: {phoneInfo.ram}
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'Sono_Proportional-SemiBold',
                        marginHorizontal: 20,
                        marginTop: 20
                    }}>
                        Bộ nhớ trong: {phoneInfo.storage}
                    </Text>
                </View>
            </SafeAreaView>

        </View>
    )
};

export default PhoneInfo;