import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../Color";

function Shop_update({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>매장 수정</Text>
            </View>
            <View style={styles.shopupdate}>
                <View style={styles.form}>
                    <TouchableOpacity style={styles.shopbtn_insert}><Text style={styles.btntext}>등록</Text></TouchableOpacity>
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
        alignItems: 'center'
    },
    headerText: {
        marginTop: 40,
        fontSize: 25,
    },
    shopupdate: {
        backgroundColor: theme.light_green,
        height: '100%',
    },
    form: {
        margin: 20,
        marginBottom: "30%",
        backgroundColor: '#E9FCB6',
        borderRadius: 40,
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    shopbtn_update: {
        height: 40,
        backgroundColor: theme.dark_green,
        alignItems: "center",
        marginRight: 2,
    },
    btntext: {
        fontSize: 20,
        color: "#ffffff",
    },
});
export default Shop_update;