import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView} from "react-native";
import { theme } from "../Color";

function Employ_notice_detail({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>고용 공지</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.title}>
                    <Text style={styles.titletext}>제목</Text>
                </View>
                <View style={styles.value}>
                    <Text style={styles.textinput}>맥도날드 송도 GSD점에서 사람을 구합니다.</Text>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titletext}>시작날짜</Text>
                </View>
                <View style={styles.value}>
                    <Text style={styles.textinput}>2022년 10월 20일</Text>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titletext}>일당</Text>
                </View>
                <View style={styles.value}>
                    <Text style={styles.textinput}>70,000</Text>
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
                        <Text style={[styles.textinput,{textAlign:'center'}]}>06 : 00 AM</Text>
                    </View>
                    <View style={styles.timevalue}>
                        <Text style={[styles.textinput,{textAlign:'center'}]}>12 : 00 AM</Text>
                    </View>
                </View>
                <View style={[styles.title,{backgroundColor:theme.green}]}>
                    <Text style={[styles.titletext,{color:'white'}]}>본문</Text>
                </View>
                <View style={[styles.value,{height:200}]}>
                    <Text style={[styles.textinput,{height:200,textAlignVertical:'top'}]}>
                        급하게 사람 구합니다. 시급은 연락 후 협의를 통해 정합니다. 하는 일은 주방 보조, 청소 등 입니다. 010-XXXX-XXXX 연락 부탁 드립니다.
                    </Text>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titletext}>지역</Text>
                </View>
                <View style={styles.value}>
                    <Text style={styles.textinput}>송도동</Text>
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
});

export default Employ_notice_detail;