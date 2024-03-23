import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo'



const PersonalInformationScreen = ({ navigation }) => {
    const personalInfo = {
        name: 'Đỗ Quang Giáp',
        mssv: 'PH34273',
        class: 'MD18306',
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
                        left: 60,
                        fontSize: 25,
                        fontFamily: 'Sono_Proportional-ExtraBold',
                    }}>
                        Thông tin cá nhân
                    </Text>
                </View>

                <View>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'Sono_Proportional-SemiBold',
                        marginHorizontal: 20,
                        marginTop: 20
                    }}>
                        Họ và tên: {personalInfo.name}
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'Sono_Proportional-SemiBold',
                        marginHorizontal: 20,
                        marginTop: 20
                    }}>
                        Mã số sinh viên: {personalInfo.mssv}
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'Sono_Proportional-SemiBold',
                        marginHorizontal: 20,
                        marginTop: 20
                    }}>
                        Lớp: {personalInfo.class}
                    </Text>
                </View>
            </SafeAreaView>

        </View>
    )
};

export default PersonalInformationScreen;