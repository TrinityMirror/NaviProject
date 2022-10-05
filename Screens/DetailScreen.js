import { 
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    FlatList
} from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'

const DetailScreen = ({navigation,route}) => {
    const {id,title} = route.params;

    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            // title:'รายละเอียดสินค้า'
            title:title
        },[navigation,title])
    })

    const getData = async () => {
        try {
            setLoading(true);
            const res = await axios.get('https://api.codingthailand.com/api/course/'+id)
            setDetail(res.data.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error); //set error ไปที่ state ของ error ว่าเกิดจาก axios หรือ error
        }
    }

    useEffect(() => {
        getData(id);
    }, [id])

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

    const _onRefresh = () => {
        getData();
    }

    const _renderItem = ({ item, index }) => {
        return (
                    <View style={{flex : 1}}>
                        <View style={{flex : 1 , flexDirection:'row',margin: 5}}>
                            <Text style={styles.thumbnail}>{index + 1}</Text>
                            <View style={styles.dataContainer}>
                                <View style={styles.dataContent}>
                                    <Text style={styles.title}>{item.ch_title}</Text>
                                    <Text note numberOfLines={1}>{item.ch_dateadd}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
        )
    }

    return (
        <View>

            <FlatList
                data={detail}
                keyExtractor={(item, index) => item.ch_id.toString()}
                refreshing={loading}
                _onRefresh={_onRefresh}
                renderItem={_renderItem}
            />

        </View>
    )
}

export default DetailScreen

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
    thumbnail: {
        width: 30,
        height:30,
        color: '#444',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center'
      },
    


})