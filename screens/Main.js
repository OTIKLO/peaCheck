import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons'; //플러스 아이콘
import mc from "../assets/images/mc.png";
import { theme } from "../Color";

function Main({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleText}>
                    완두체쿠
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Shop_management')}>
                    <AntDesign style={styles.plusbtn} name="plussquareo" size={40} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.body_shops}>
                    <View style={styles.body_shop}>
                        <View style={styles.shop}>
                            <View>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <Image source={mc} style={{ width: '80%', height: '80%', marginTop: 14 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text>맥도날드 송도 GSD</Text>
                    </View>
                </View>
                <View style={styles.notice}>
                    <View style={styles.notice_top}>
                        <Text style={{fontSize: 25,}}>고용 공지사항</Text>
                        <TouchableOpacity>
                            <Text style={{fontSize: 15, marginTop: 10}}>모두 보기</Text>
                        </TouchableOpacity>
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
        height: 100,
        backgroundColor: theme.light_green,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    titleText: {
        marginLeft: 20,
        marginTop: 55,
        fontSize: 20,
        width: 100,
        height: 35,
        textAlign: 'center',
        paddingTop: 3,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 100,
    },
    plusbtn: {
        marginRight: 20,
        marginTop: 50,
    },
    body: {
        backgroundColor: 'white',
    },
    body_shops: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    shop: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        width: 180,
        height: 120,
        borderWidth: 3,
        borderColor: theme.light_green,
        borderRadius: 20,
    },
    body_shop: {
        alignItems:'center',
        marginBottom: 15,
    },
    notice_top: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    notice: {
        height: '100%',
    }
});

export default Main;