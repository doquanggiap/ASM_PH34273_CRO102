import { Image, ScrollView, StatusBar, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonCustom from '../components/ButtonCustom'
import { COLOR } from '../assets/color'


const Cart = ({ navigation }) => {
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
                        Giỏ hàng
                    </Text>
                </View>
                <ScrollView>
                    <View style={{
                        flexDirection: 'row',
                        margin: 15
                    }}>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                            }}
                            source={{ uri: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png' }} />

                        <View>
                            <Text style={{
                                fontSize: 20,
                                fontFamily: 'Sono_Proportional-SemiBold',
                            }}>
                                Samsung Galaxy A53 5G
                            </Text>

                            <Text style={{
                                fontFamily: 'Sono_Proportional-SemiBold',
                                fontSize: 15,
                                color: '#777777',
                            }}>
                                100.000 VND
                            </Text>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                marginTop: 10,
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#F0F0F3',
                                    width: 30,
                                    height: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 50
                                }}>
                                    <Text
                                        style={{
                                            fontSize: 20
                                        }}
                                    >-</Text>
                                </TouchableOpacity>

                                <Text>1</Text>

                                <TouchableOpacity style={{
                                    backgroundColor: '#F0F0F3',
                                    width: 30,
                                    height: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 50
                                }}>
                                    <Text
                                        style={{
                                            fontSize: 20
                                        }}
                                    >+</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{
                                backgroundColor: '#F0F0F3',
                                width: 30,
                                height: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 20,
                                marginTop: 10,
                                marginBottom: 10,
                            }}>
                                <Ionicons name='trash-bin' color='red' size={20} />
                            </TouchableOpacity>


                        </View>
                    </View>
                </ScrollView>

                <View style={{
                    width: '100%',
                    height: 100,
                    position: 'absolute',
                    bottom: 0
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'Sono_Proportional-SemiBold',
                            marginHorizontal: 20,
                        }}>
                            Tổng tiền:
                        </Text>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'Sono_Proportional-SemiBold',
                        }}>
                            100.000 VND
                        </Text>
                    </View>
                    <ButtonCustom
                        buttonStyle={{
                            backgroundColor: COLOR.xanhLa,
                            width: 380,
                            height: 60,
                            alignSelf: 'center',
                            borderRadius: 10,
                            position: 'absolute',
                            bottom: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}

                        title='Mua'
                        titleStyle={{
                            color: '#ffffff',
                            fontSize: 20,
                            fontFamily: 'Sono_Proportional-SemiBold',
                        }}
                    />

                </View>



            </SafeAreaView>

        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})