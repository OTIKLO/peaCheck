import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { theme } from "../Color";

function Shop_notice({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>가게 공지 등록</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.body_top}>
                    <View style={{margin: 10, borderLeftWidth: 2, borderColor: theme.green}}><Text></Text></View>
                    <Text style={styles.shopname}>본문</Text>
                </View>
                <View style={styles.footer}>
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