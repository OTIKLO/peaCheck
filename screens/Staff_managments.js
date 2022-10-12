import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { theme } from "../Color";
import user from '../assets/images/icon/user.png';

function Staff_managments({ navigation }) {
    const arrow = ">";
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>직원 관리</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.body_top}>
                    <View style={{margin: 10, borderLeftWidth: 2, borderColor: theme.green}}><Text></Text></View>
                    <Text style={styles.shopname}>맥도날드 송도 GSD</Text>
                </View>
                <ScrollView style={styles.notice}>
                    <View style={styles.notice_body}>
                        <TouchableOpacity onPress={() => navigation.navigate('Staff')}>
                            <View style={styles.satffList}>
                                <Image source={user} style={styles.img}/>
                                <Text style={{fontSize:20, marginRight:250}}>장민수</Text>
                                <Text style={{fontSize: 30}}>{arrow}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.satffList}>
                                <Image source={user} style={styles.img}/>
                                <Text style={{fontSize:20, marginRight:250}}>황의충</Text>
                                <Text style={{fontSize: 30}}>{arrow}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.satffList}>
                                <Image source={user} style={styles.img}/>
                                <Text style={{fontSize:20, marginRight:250}}>홍길동</Text>
                                <Text style={{fontSize: 30}}>{arrow}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.schedule_top}>
                        <Text style={{fontSize: 25,}}>근무 스케줄</Text>
                        <TouchableOpacity>
                            <Text style={{fontSize: 15, marginTop: 10}}>모두 보기</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.date_select}>
                        <TextInput style={styles.scheduleDate}>    2022년      ▼</TextInput>
                        <TextInput style={styles.scheduleDate}>      10월      ▼</TextInput>
                        <TextInput style={styles.scheduleDate}>       9일      ▼</TextInput>
                    </View>
                    <View style={styles.scheduleList}>
                            <Image source={user} style={styles.img}/>
                            <View style={{width:220, marginLeft: 10}}>
                                <Text style={{ fontWeight: "600", fontSize: 17 }}>10월 9일</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>10 : 00 AM ~ 16 : 00 PM</Text>
                                </View>
                                <Text>근무자 : 황의충</Text>
                            </View>
                    </View>
                    <View style={styles.scheduleList}>
                            <Image source={user} style={styles.img}/>
                            <View style={{width:220,  marginLeft: 10}}>
                                <Text style={{ fontWeight: "600", fontSize: 17 }}>10월 9일</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>16 : 00 PM ~ 22 : 00 AM</Text>
                                </View>
                                <Text>근무자 : 장민수</Text>
                            </View>
                    </View>
                </ScrollView>
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
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.green,
        flexDirection: 'row',
    },
    date_select: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.green,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    shopname: {
        fontSize:20,
        fontWeight:"600",
        marginTop:5,
    },
    scheduleDate: {
        height: 50,
        width: '27%',
        padding: 10,
        borderWidth: 2,
        borderColor: theme.dark_green,
        borderRadius: 10,
        fontSize: 15,
        fontWeight: "600",
        margin: 10,
        textAlign: 'center'
    },
    notice: {
        backgroundColor:'#F4FAE4',
        height: '100%'
    },
    notice_body:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.light_green,
        backgroundColor: 'white'
    },
    satffList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: 10,
        paddingBottom: 20,
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    img: {
        width: 50,
        height: 50,
    },
    schedule_top: {
        height: 50,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scheduleList: {
        padding: 10,
        paddingBottom: 20,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white'
    },
});


export default Staff_managments;