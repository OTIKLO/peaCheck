import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { theme } from "../Color";
import mc from "../assets/images/mc.png";
import user from '../assets/images/icon/user.png';

function Shop({ navigation }) {
    const arrow = ">";
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>맥도날드 송도 GSD</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.body_top}>
                    <View style={styles.shoplogo}>
                        <View style={{width: '70%', height: '70%'}}>
                            <Image source={mc} style={{ width:'100%', height: '100%'}} />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Today')}>
                        <View style={styles.shopbutton}>
                            <Text style={{ color:'white', fontSize:20}}>출퇴근(직원용)</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Staff_managments')}>
                        <View style={styles.shopbutton}>
                            <Text style={{ color:'white', fontSize:20}}>직원관리(사장용)</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.notice}>
                    <View style={styles.notice_top}>
                        <Text style={{fontSize: 25,}}>가게 공지사항</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Shop_notice')}>
                            <Text style={{fontSize: 15, marginTop: 10}}>모두 보기</Text>
                        </TouchableOpacity>
                    </View>
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
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 80,
        backgroundColor: 'white',
        borderBottomWidth:1,
        borderBottomColor: '#cccccc',
        alignItems:'center',
    },
    headerText: {
        marginTop: 40,
        fontSize: 20,
    },
    body: {
        backgroundColor: 'white',
    },
    body_top: {
        borderBottomWidth: 1,
        borderBottomColor: theme.green,
    },
    shoplogo: {
        margin: 20,
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: theme.dark_green,
        height: 200
    },
    shopbutton: {
        margin: 20,
        marginTop: 0,
        height: 50,
        backgroundColor: theme.green,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notice: {
        backgroundColor:'#F4FAE4',
        height: '100%',
    },
    notice_top: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    notice_body:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.green,
        marginTop: 10,
        backgroundColor: 'white'
    }
});

export default Shop;