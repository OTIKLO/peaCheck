import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import { theme } from "../Color";

function Shop_notice_add({ navigation }) {
    const done = () => {
        navigation.navigate('Shop_notice')
    };
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
                <View style={styles.body_center}>
                    <TextInput style={styles.textinput} multiline={true}></TextInput>
                </View>
                <View style={styles.body_bottom}>
                    <TouchableOpacity style={styles.notice_add} onPress={done}><Text style={styles.btntext}>등록</Text></TouchableOpacity>
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
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: theme.dark_green,
        backgroundColor: theme.light_green,
        flexDirection: 'row',
    },
    shopname: {
        fontSize:20,
        fontWeight:"600",
        marginTop:5,
    },
    body_center: {
        height: '75%',
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: theme.dark_green,
        backgroundColor: '#F4FAE4',
        padding: 10,
    },
    textinput:{
        fontSize: 18,
    },
    notice_add: {
        marginLeft: 20,
        marginRight: 20,
        height: 40,
        backgroundColor: theme.dark_green,
        alignItems: "center",
        justifyContent: "center",
    },
    btntext: {
        fontSize: 20,
        color: "#ffffff",
    },
});

export default Shop_notice_add;