import { Image, Keyboard, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { COLOR } from '../assets/color'
import ButtonCustom from '../components/ButtonCustom'

const ProductInfo = ({ route, navigation }) => {
    const item = route.params
    const name = item.name
    const price = item.price
    const image = item.image
    const description = item.description
    const cpu = item.cpu
    const ram = item.ram
    const storage = item.storage
    const camera = item.camera
    const battery = item.battery
    const screen = item.screen

    const [isLike, setisLike] = useState(false)

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);


    // sự kiện bàn phím bật lên
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            // position: 'relative',
        }}>
            <StatusBar
                backgroundColor='#F0F0F3'
                barStyle="dark-content"
            />
            <View style={{
                marginTop: 20,
                width: '100%',
                backgroundColor: '#F0F0F3',
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                // position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 4,
            }}>
                <View style={{
                    width: '100%',
                    justifyContent: 'space-between',
                }}>
                    <TouchableOpacity
                        style={{
                            marginTop: 16,
                            marginLeft: 16

                        }}
                        onPress={() => navigation.goBack()}>
                        <Entypo name='chevron-left' style={{
                            fontSize: 18,
                            color: '#777777',
                            padding: 12,
                            backgroundColor: '#ffffff',
                            borderRadius: 10,
                            width: 45
                        }} />
                    </TouchableOpacity>

                    <Image
                        style={{
                            width: 350,
                            alignSelf: 'center',
                            height: 350,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 20,
                            margin: 10,
                        }}
                        source={{ uri: image }}
                    />
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}>

                <View style={{
                    flex: 1,
                    padding: 15,
                    marginBottom: 100
                }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                        <Text style={{
                            fontSize: 30,
                            fontFamily: 'Sono_Proportional-ExtraBold',
                            color: COLOR.xanhLa,
                            width: 280,
                        }}>{name}</Text>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            width: 100,
                        }}>
                            <TouchableOpacity onPress={() => setisLike(!isLike)}>
                                <Entypo
                                    name={isLike ? 'heart' : 'heart-outlined'}
                                    size={30}
                                    color={isLike ? '#ff4f33' : 'black'}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                setisLike(!isLike)
                                navigation.navigate('Cart')
                            }}>
                                <FontAwesome5
                                    name='cart-plus'
                                    size={30}
                                    color='pink'
                                />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <Text style={{
                        fontSize: 25,
                        fontFamily: 'Sono_Proportional-ExtraBold',
                        color: '#ff4f33',
                    }}>{price} đ</Text>

                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'Sono_Proportional-SemiBold',
                        }}
                    >{description}</Text>

                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'Sono_Proportional-SemiBold',
                        }}
                    >CPU: {cpu}</Text>

                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'Sono_Proportional-SemiBold',
                        }}
                    >Ram: {ram}</Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'Sono_Proportional-SemiBold',
                        }}
                    >Bộ nhớ: {storage}</Text>

                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'Sono_Proportional-SemiBold',
                        }}
                    >Camera: {camera}</Text>

                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'Sono_Proportional-SemiBold',
                        }}
                    >Pin: {battery}</Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'Sono_Proportional-SemiBold',
                        }}
                    >Màn hình: {screen}</Text>

                    <View style={{ width: '80%', height: 1, backgroundColor: 'gray' }} />
                    <Text style={{
                        fontSize: 25,
                        fontFamily: 'Sono_Proportional-Bold',
                        color: 'gray',
                    }}>Bình luận:</Text>

                    <TextInput
                        style={{
                            fontSize: 20,
                            fontFamily: 'Sono_Proportional-Regular',
                            color: 'gray',
                            width: '100%',
                            padding: 10,
                            borderWidth: 2,
                            borderRadius: 20,
                            minHeight: 50
                        }}
                        multiline
                        placeholder='Nhập bình luận'
                    />
                </View>




            </ScrollView>

            {!isKeyboardVisible && (

                <ButtonCustom
                    onPress={() => navigation.navigate('Cart')}
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

                    title='Thêm vào giỏ hàng'
                    titleStyle={{
                        color: '#ffffff',
                        fontSize: 20,
                        fontFamily: 'Sono_Proportional-SemiBold',
                    }}
                />
            )}

        </View>
    )
}

export default ProductInfo

const styles = StyleSheet.create({})