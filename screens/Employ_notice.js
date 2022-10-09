import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { theme } from "../Color";
import mc from "../assets/images/mc.png";
import { AntDesign } from '@expo/vector-icons'; //플러스 아이콘

function Employ_notice({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>고용 공지 사항</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.body_top}>
                    <TextInput style={styles.shopname}>송도동</TextInput>
                </View>
                <ScrollView style={styles.notice}>
                    <View style={styles.notice_body}>
                        <TouchableOpacity onPress={() => navigation.navigate('Employ_notice_detail')}>
                            <View style={{ margin: 10, alignItems: 'center', flexDirection: 'row' }}>
                                <View style={styles.shoplogo}>
                                    <Image source={mc} style={{ width: '80%', height: '80%' }}></Image>
                                </View>
                                <View>
                                    <Text style={{ fontWeight: "600", fontSize: 17 }}>맥도날드 송도 GSD</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text>송도동</Text>
                                        <Text style={{ marginLeft: 10 }}>2022년 10월 9일 오후 8:18</Text>
                                    </View>
                                    <Text>06 : 00 AM ~ 02 : 00 PM</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.notice_body}>
                        <View style={{ margin: 10, alignItems: 'center', flexDirection: 'row' }}>
                            <View style={styles.shoplogo}>
                            </View>
                            <View>
                                <Text style={{ fontWeight: "600", fontSize: 17 }}>송도CU편의점</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>송도동</Text>
                                    <Text style={{ marginLeft: 10 }}>2022년 10월 7일 오후 3:54</Text>
                                </View>
                                <Text>00 : 00 AM ~ 06 : 00 AM</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Employ_notice_add')}>
                        <AntDesign style={styles.plusbtn} name="plussquareo" size={40} color="black" />
                    </TouchableOpacity>
                </View>
            </View >
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        height: 90,
        backgroundColor: theme.light_green,
        alignItems: 'center',
    },
    headerText: {
        marginTop: 40,
        fontSize: 25,
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
        height: 50,
        width: '50%',
        padding: 10,
        borderWidth: 2,
        borderColor: theme.dark_green,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: "600",
        margin: 10,
    },
    notice: {
        backgroundColor: '#F4FAE4',
        height: '70%'
    },
    notice_body: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.light_green,
        backgroundColor: 'white'
    },
    shoplogo: {
        width: 100,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.green,
        borderWidth: 2,
        marginRight: 10,
    },
    footer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: 70,
        marginRight: 20,
    }
});

export default Employ_notice;