import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { SafeAreaView } from 'react-native-safe-area-context'


const Setting = ({ navigation }) => {
    const data = [
        { id: 1, title: 'Thông tin cá nhân', onPress: () => navigation.navigate('PersonalInformation') },
        { id: 2, title: 'Thông tin điện thoại', onPress: () => navigation.navigate('PhoneInfo') },
        { id: 3, title: 'Thiết lập riêng', onPress: () => navigation.navigate('ThietLapRieng') },
        { id: 4, title: 'Đăng xuất', onPress: () => navigation.navigate('Login') },

    ]

    const itemList = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: '#F0F0F3',
                    width: '100%',
                    height: 70,
                    justifyContent: 'center',
                    borderRadius: 20,
                    marginBottom: 10,
                    paddingHorizontal: 10
                }}
                onPress={item.onPress}>
                <Text
                    style={{
                        fontSize: 20,
                        fontFamily: 'Sono_Proportional-SemiBold',
                        color: item.title === 'Đăng xuất' ? 'red' : '#777777'
                    }}

                >{item.title}</Text>
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
                        onPress={() => navigation.navigate('Home')}
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
                        left: 110,
                        fontSize: 25,
                        fontFamily: 'Sono_Proportional-ExtraBold',
                    }}>
                        Cài đặt
                    </Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={itemList}
                    style={{
                        padding: 30
                    }}
                />
            </SafeAreaView>

        </View>
    )
}

export default Setting

const styles = StyleSheet.create({})