import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import TextInputCustom from '../components/TextInputCustom';
import ButtonCustom from '../components/ButtonCustom';


const DoiMatKhau = ({ navigation }) => {

    const itemList = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: '#F0F0F3',
                    width: '100%',
                    height: 70,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: 20,
                    marginBottom: 10,
                    paddingHorizontal: 10,
                    flexDirection: 'row'
                }}
                onPress={item.onPress}>
                <Text
                    style={{
                        fontSize: 20,
                        fontFamily: 'Sono_Proportional-SemiBold',
                        color: '#777777'
                    }}

                >{item.title}</Text>

                {/* icon sáng tối */}
                {item.title == 'Thay đổi màu nền' &&
                    <Feather name='moon' size={30} color='#777777' />}

            </TouchableOpacity>
        )
    }
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
                        Đổi mật khẩu
                    </Text>
                </View>

                <View style={{
                    margin: 20,
                    height: 400,
                    justifyContent: 'space-between'
                }}>
                    <TextInputCustom
                        title='Mật khẩu cũ'
                        titleStyle={{
                            fontSize: 20,
                            fontFamily: 'Sono_Proportional-SemiBold',
                            color: '#777777',
                        }}
                        placeholder='Mật khẩu cũ'

                    />

                    <TextInputCustom
                        title='Mật khẩu mới'
                        titleStyle={{
                            fontSize: 20,
                            fontFamily: 'Sono_Proportional-SemiBold',
                            color: '#777777',
                        }}
                        placeholder='Mật khẩu mới'
                    />
                    <TextInputCustom
                        title='Nhập lại mật khẩu mới'
                        titleStyle={{
                            fontSize: 20,
                            fontFamily: 'Sono_Proportional-SemiBold',
                            color: '#777777',
                        }}
                        placeholder='Nhập lại mật khẩu mới'

                    />

                    <ButtonCustom
                        title='Đăng nhập'
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

                </View>
            </SafeAreaView>

        </View>
    )
};

export default DoiMatKhau;