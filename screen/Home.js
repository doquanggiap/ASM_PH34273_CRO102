import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLOR } from '../assets/color'
import Banner from '../components/Banner'
import { Item } from '../assets/database'

const Home = ({ navigation }) => {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('ProductInfo', item)}
                style={{
                    backgroundColor: '#F0F0F3',
                    width: 200,
                    height: 200,
                    marginRight: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                }}>
                <Image
                    source={{ uri: item.image }}
                    width={130}
                    height={130}
                />

                <Text>{item.name}</Text>
                <Text>{item.price}</Text>

            </TouchableOpacity>
        )
    }
    return (
        <View
            style={{
                flex: 1,
            }}>
            <StatusBar
                barStyle='dark-content'
                translucent
                backgroundColor={'transparent'}
            />
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 16,
                marginTop: 20
            }}>

                {/* Các nút trên đầu ứng dụng */}
                <TouchableOpacity>
                    <Feather
                        name='settings'
                        size={25}
                        color={COLOR.xanhLa}
                    />
                </TouchableOpacity>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: 80
                }}>
                    <TouchableOpacity>
                        <AntDesign
                            name='heart'
                            size={25}
                            color={COLOR.xanhLa}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Cart')}>
                        <Feather
                            name='shopping-cart'
                            size={25}
                            color={COLOR.xanhLa}
                        />
                    </TouchableOpacity>
                </View>



            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        marginBottom: 10,
                        padding: 16,
                    }}>

                    {/* Tiêu đề */}
                    <Text style={{
                        fontSize: 26,
                        fontFamily: 'Sono_Proportional-ExtraBold',
                        color: COLOR.xanhLa
                    }}>Smart Shop</Text>

                    <Banner
                        style={{
                            borderColor: COLOR.xanhLa,
                            height: 170
                        }}
                        uri_img='https://img.freepik.com/free-vector/realism-hand-drawn-horizontal-banner_23-2150203461.jpg'
                    />

                    <View style={{
                        padding: 16
                    }}>
                        <Text style={{
                            fontSize: 18,
                            color: COLOR.xanhLa,
                            fontFamily: 'Sono_Proportional-SemiBold'
                        }}>Sản phẩm hot</Text>

                        <FlatList
                            data={Item}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />

                        <View style={{
                            marginTop: 20
                        }}>
                            <Text style={{
                                fontSize: 18,
                                color: COLOR.xanhLa,
                                fontFamily: 'Sono_Proportional-SemiBold'
                            }}>Sản phẩm mới</Text>

                            <FlatList
                                data={Item}
                                keyExtractor={item => item.id}
                                renderItem={renderItem}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>

                        <View style={{
                            marginTop: 20
                        }}>
                            <Text style={{
                                fontSize: 18,
                                color: COLOR.xanhLa,
                                fontFamily: 'Sono_Proportional-SemiBold'
                            }}>Sản phẩm mới</Text>

                            <FlatList
                                data={Item}
                                keyExtractor={item => item.id}
                                renderItem={renderItem}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>


                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})