import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { theme } from "../Color";

function Employ_notice_add({ navigation }) {
    const done = () => {
        navigation.navigate('Employ_notice')
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>고용 공지 등록</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.title}>
                    <Text style={styles.titletext}>제목</Text>
                </View>
                <View style={styles.value}>
                    <TextInput style={styles.textinput}></TextInput>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titletext}>시작날짜</Text>
                </View>
                <View style={styles.value}>
                    <TextInput style={styles.textinput} placeholder="2022년 10월 09일"></TextInput>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titletext}>일당</Text>
                </View>
                <View style={styles.value}>
                    <TextInput style={styles.textinput} placeholder= "70,000원"></TextInput>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
                    <View style={styles.timetitle}>
                        <Text style={styles.titletext}>출근 시간</Text>
                    </View>
                    <View style={styles.timetitle}>
                        <Text style={styles.titletext}>퇴근 시간</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
                    <View style={styles.timevalue}>
                        <TextInput style={[styles.textinput,{textAlign:'center'}]} placeholder="00 : 00 AM"></TextInput>
                    </View>
                    <View style={styles.timevalue}>
                        <TextInput style={[styles.textinput,{textAlign:'center'}]} placeholder="12 : 00 PM"></TextInput>
                    </View>
                </View>
                <View style={[styles.title,{backgroundColor:theme.green}]}>
                    <Text style={[styles.titletext,{color:'white'}]}>본문</Text>
                </View>
                <View style={[styles.value,{height:200}]}>
                    <TextInput style={[styles.textinput,{height:200,textAlignVertical:'top'}]} multiline={true}></TextInput>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titletext}>지역</Text>
                </View>
                <View style={styles.value}>
                    <TextInput style={styles.textinput}></TextInput>
                </View>
                <View style={styles.body_bottom}>
                    <TouchableOpacity style={styles.notice_add} onPress={done}><Text style={styles.btntext}>등록</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
        marginTop: 20,
    },
    title: {
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: theme.dark_green,
        backgroundColor: theme.light_green,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    timetitle: {
        width: '50%',
        borderWidth: 1,
        borderColor: theme.dark_green,
        backgroundColor: theme.light_green,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    titletext: {
        fontSize: 20,
        fontWeight: "600",
    },
    value: {
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: theme.dark_green,
        backgroundColor: '#F4FAE4',
        padding: 5,
    },
    timevalue: {
        width: '50%',
        borderWidth: 1,
        borderColor: theme.dark_green,
        backgroundColor: '#F4FAE4',
        padding: 5,
    },
    textinput: {
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

export default Employ_notice_add;