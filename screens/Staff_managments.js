import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "../Color";
import user from '../assets/images/icon/user.png';

const STORAGE_KEY = "@toDos";

function Staff_managments({ navigation }) {
    const arrow = ">";
    const [working, setWorking] = useState(true);
    const [text, setText] = useState("");
    const [toDos, setToDos] = useState({});
    useEffect(() => {
        loadToDos();
    }, []);
    const travel = () => setWorking(false);
    const work = () => setWorking(true);
    const onChangeText = (payload) => setText(payload);
    const saveToDos = async (toSave) => {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    };
    const loadToDos = async () => {
        const s = await AsyncStorage.getItem(STORAGE_KEY);
        setToDos(JSON.parse(s));
    };

    const addToDo = async () => {
        if (text === "") {
            return;
        }
        const newToDos = {
            ...toDos,
            [Date.now()]: { text, working },
        };
        setToDos(newToDos);
        await saveToDos(newToDos);
        setText("");
    };
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <TouchableOpacity onPress={work}>
                    <Text
                        style={{ ...styles.btnText, color: working ? "green" : theme.grey }}
                    >
                        직원관리
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={travel}>
                    <Text
                        style={{
                            ...styles.btnText,
                            marginRight: 30,
                            color: !working ? "green" : theme.grey,
                        }}
                    >
                        근무현황
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.notice}>
                <View style={styles.notice_body}>
                    <TouchableOpacity onPress={() => navigation.navigate('Staff')}>
                        <View style={styles.satffList}>
                            <Image source={user} style={styles.img} />
                            <Text style={{ fontSize: 20, marginRight: 250 }}>장민수</Text>
                            <Text style={{ fontSize: 30 }}>{arrow}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.satffList}>
                            <Image source={user} style={styles.img} />
                            <Text style={{ fontSize: 20, marginRight: 250 }}>황의충</Text>
                            <Text style={{ fontSize: 30 }}>{arrow}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.satffList}>
                            <Image source={user} style={styles.img} />
                            <Text style={{ fontSize: 20, marginRight: 250 }}>홍길동</Text>
                            <Text style={{ fontSize: 30 }}>{arrow}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.schedule_top}>
                    <Text style={{ fontSize: 25, }}>근무 스케줄</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>모두 보기</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.date_select}>
                    <TextInput style={styles.scheduleDate}>    2022년      ▼</TextInput>
                    <TextInput style={styles.scheduleDate}>      10월      ▼</TextInput>
                    <TextInput style={styles.scheduleDate}>       9일      ▼</TextInput>
                </View>
                <View style={styles.scheduleList}>
                    <Image source={user} style={styles.img} />
                    <View style={{ width: 220, marginLeft: 10 }}>
                        <Text style={{ fontWeight: "600", fontSize: 17 }}>10월 9일</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>10 : 00 AM ~ 16 : 00 PM</Text>
                        </View>
                        <Text>근무자 : 황의충</Text>
                    </View>
                </View>
                <View style={styles.scheduleList}>
                    <Image source={user} style={styles.img} />
                    <View style={{ width: 220, marginLeft: 10 }}>
                        <Text style={{ fontWeight: "600", fontSize: 17 }}>10월 9일</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>16 : 00 PM ~ 22 : 00 AM</Text>
                        </View>
                        <Text>근무자 : 장민수</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        height: 80,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    btnText: {
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
        fontSize: 20,
        fontWeight: "600",
        marginTop: 5,
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
        backgroundColor: '#F4FAE4',
        height: '100%'
    },
    notice_body: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.light_green,
        backgroundColor: 'white'
    },
    satffList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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