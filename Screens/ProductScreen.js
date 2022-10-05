import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import axios from 'axios'


const ProductScreen = ({navigation}) => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            setLoading(true);
            const res = await axios.get('https://api.codingthailand.com/api/course')
            setProduct(res.data.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error); //set error ไปที่ state ของ error ว่าเกิดจาก axios หรือ error
        }
    }

    useFocusEffect(
        useCallback(() => {
            getData();
        }, [])
    )

    // useEffect(() => {
    //     getData();
    // }, [])


    if (error) { // if error return
        return (
            <View style={styles.container}>
                <Text>{error.message}</Text>
                <Text>เกิดข้อผิดพลาดไม่สามารถติดต่อกับ server ได้</Text>
            </View>

        )
    }

    if (loading === true) {
        return (
            <View>
                <ActivityIndicator color='#F4A5EC' size='large' />
            </View>
        )
    }

    // const ItemSepearatorView =()=>{

    // }

    const _onRefresh = () => {
        getData();
    }

    const _renderItem = ({ item }) => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableOpacity
                style={styles.addButtonStyle}
                onPress ={()=>{
                    navigation.navigate('Detail',{
                        id:item.id,
                        title:item.title
                    })
                }}
                >
                    <View style={styles.dataContainer}>
                        <View style={styles.container}>
                            <Image
                                resizeMode='cover'
                                source={{ uri: item.picture }}
                                style={styles.thumbnail}
                            />
                            <View style={styles.dataContent}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.detail}>{item.detail}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }


    return (
        <View>

            <FlatList
                data={product}
                keyExtractor={(item, index) => item.id.toString()}
                //   renderItem = {({item})=>(
                //     <Text>{item.title}</Text>
                //   )}
                // ItemSeparatorComponent={ItemSepearatorView}
                refreshing={loading}
                _onRefresh={_onRefresh}
                renderItem={_renderItem}
            />

        </View>
    )
}


export default ProductScreen

const styles = StyleSheet.create({
    container: {
        height: 80,
        elevation: 3,
        borderColor: 'gray',
        borderRadius: 5,
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    dataContainer: {
        flex: 1,
    },
    thumbnail: {
        width: 70,
        height: 70,
    },
    dataContent: {
        marginTop: 5,
        marginLeft: 15,
    },
    title: {
        color: '#444',
        fontSize: 18,
        fontWeight: 'bold',
    },
    detail: {
        fontSize: 16,
        color: '#888',
        fontWeight: '700',
    },
    addButtonStyle: {
        width: '100%',         
        marginBottom: 15,
    },

});