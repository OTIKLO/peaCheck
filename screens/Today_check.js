import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { theme } from "../Color";
import user from '../assets/images/icon/user.png';
import { AntDesign } from '@expo/vector-icons'; //플러스 아이콘

function Today_check({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>오늘 근무</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.today}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ margin: 5, marginLeft: 10, borderLeftWidth: 2, borderColor: theme.green }}><Text></Text></View>
                        <View>
                            <Text style={styles.ttext}>10월 09일</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.ttext}>06 : 00</Text>
                                <Text style={styles.ttext}> ~ </Text>
                                <Text style={styles.ttext}>12 : 00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.btn}>
                            <Text style={{fontSize:18, color:'white', fontWeight:'600'}}>출근</Text>
                    </View>
                    <Text style={styles.shop}>맥도날드 송도 GSD</Text>
                </View>
                <View style={styles.today}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ margin: 5, marginLeft: 10, borderLeftWidth: 2, borderColor: theme.green }}><Text></Text></View>
                        <View>
                            <Text style={styles.ttext}>10월 09일</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.ttext}>16 : 00</Text>
                                <Text style={styles.ttext}> ~ </Text>
                                <Text style={styles.ttext}>22 : 00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.btn}>
                            <Text style={{fontSize:18, color:'white', fontWeight:'600'}}>출근</Text>
                    </View>
                    <Text style={styles.shop}>송도 CU 편의점</Text>
                </View>
            </View>
        </View>
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
    today: {
        borderBottomWidth: 1,
        borderBottomColor: theme.green,
    },
    ttext: {
        fontSize: 18,
        fontWeight: "600",
    },
    btn:{
        borderWidth:2,
        backgroundColor: theme.green,
        margin: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shop:{
        marginBottom:10,
        marginRight:10,
        fontSize:18,
        textAlign: 'right'
    }
});

export default Today_check;