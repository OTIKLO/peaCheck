import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { theme } from "../Color";
import user from '../assets/images/icon/user.png';
import { AntDesign } from '@expo/vector-icons'; //플러스 아이콘

function Shop_notice({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>가게 공지 사항</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.body_top}>
                    <View style={{margin: 10, borderLeftWidth: 2, borderColor: theme.green}}><Text></Text></View>
                    <Text style={styles.shopname}>맥도날드 송도 GSD</Text>
                </View>
                <ScrollView style={styles.notice}>
                    <View style={styles.notice_body}>
                        <View style={{marginLeft:10, marginTop:10, flexDirection:'row', alignItems:'center'}}>
                            <Image source={user} />
                            <View>
                                <Text style={{fontWeight:"600",fontSize:17}}>사장님</Text>
                                <Text>2022년 10월 7일 오후 3:54</Text>
                            </View>
                        </View>
                        <View style={{margin:10, marginLeft:20}}>
                            <Text>다음주 월요일은 공휴일이므로 휴무 입니다.</Text>
                        </View>
                    </View>
                    <View style={styles.notice_body}>
                        <View style={{marginLeft:10, marginTop:10, flexDirection:'row', alignItems:'center'}}>
                            <Image source={user} />
                            <View>
                                <Text style={{fontWeight:"600",fontSize:17}}>사장님</Text>
                                <Text>2022년 10월 7일 오전 9:10</Text>
                            </View>
                        </View>
                        <View style={{margin:10, marginLeft:20}}>
                            <Text>금일 마감시간 8시로 단축합니다.</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Shop_notice_add')}>
                        <AntDesign style={styles.plusbtn} name="plussquareo" size={40} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    header: {
        height: 80,
        backgroundColor: 'white',
        borderBottomWidth:1,
        borderBottomColor: '#cccccc',
    },
    headerText: {
        marginLeft: 30,
        marginTop: 40,
        fontSize: 20,
    },
    body: {
        backgroundColor: 'white',
    },
    body_top: {
        borderBottomWidth: 1,
        borderBottomColor: theme.green,
        flexDirection: 'row',
    },
    shopname: {
        fontSize:20,
        fontWeight:"600",
        marginTop:5,
    },
    notice: {
        backgroundColor:'#F4FAE4',
        height: '75%'
    },
    notice_body:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.light_green,
        backgroundColor: 'white'
    },
    footer:{
        alignItems:'flex-end',
        justifyContent:'center',
        height:70,
        marginRight:20,
    }
});

export default Shop_notice;