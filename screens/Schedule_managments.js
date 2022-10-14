import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Alert} from "react-native";
import { theme } from "../Color";
import { AntDesign } from '@expo/vector-icons'; //플러스 아이콘

function Schedule_managments({ navigation }) {
    const schAlert = () =>
    Alert.alert(                    // 말그대로 Alert를 띄운다
     "삭제하시겠습니까?",                    // 첫번째 text: 타이틀 제목
     "⚠경고 되돌릴 수 없습니다.",                         // 두번째 text: 그 밑에 작은 제목
     [                              // 버튼 배열
       {
         text: "아니요"
       },
       { text: "네"},
     ],
     { cancelable: false }
   );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>스케줄 관리</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.body_top}>
                    <View style={{margin: 10, borderLeftWidth: 2, borderColor: theme.green}}><Text></Text></View>
                    <Text style={styles.schedulename}>장민수</Text>
                </View>
                <View style={styles.body_top}>
                    <TextInput style={styles.scheduleDate}>    2022년     ▼</TextInput>
                    <TextInput style={styles.scheduleDate}>      10월      ▼</TextInput>
                </View>
                <ScrollView style={styles.notice}>
                    <View style={styles.notice_body}>
                        <View style={styles.scheduleList}>
                            <View style={{height: 55, margin: 10, borderLeftWidth: 2, borderColor: theme.green}}><Text></Text></View>
                            <View style={{width:280}}>
                                <Text style={{ fontWeight: "600", fontSize: 17 }}>10월 3일 ~ 7일</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>16 : 00 PM ~ 22 : 00 PM</Text>
                                </View>
                                <Text>근무자 : 장민수</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.schedule_update} onPress={() => navigation.navigate('Schedule_update')}><Text style={styles.btntext}>수정</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.schedule_delete} onPress={schAlert}><Text style={styles.btntext}>삭제</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.scheduleList}>
                            <View style={{height: 55, margin: 10, borderLeftWidth: 2, borderColor: theme.green}}><Text></Text></View>
                            <View style={{width:280}}>
                                <Text style={{ fontWeight: "600", fontSize: 17 }}>10월 9일</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>22 : 00 PM ~ 08 : 00 AM</Text>
                                </View>
                                <Text>근무자 : 장민수</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.schedule_update}><Text style={styles.btntext}>수정</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.schedule_delete} onPress={schAlert}><Text style={styles.btntext}>삭제</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.scheduleList}>
                            <View style={{height: 55, margin: 10, borderLeftWidth: 2, borderColor: theme.green}}><Text></Text></View>
                            <View style={{width:280}}>
                                <Text style={{ fontWeight: "600", fontSize: 17 }}>10월 10일 ~ 14일</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>16 : 00 PM ~ 22 : 00 PM</Text>
                                </View>
                                <Text>근무자 : 장민수</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.schedule_update}><Text style={styles.btntext}>수정</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.schedule_delete} onPress={schAlert}><Text style={styles.btntext}>삭제</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Schedule_insert')}>
                        <AntDesign style={styles.plusbtn} name="plussquareo" size={40} color="black" />
                    </TouchableOpacity>
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
        borderBottomWidth: 1,
        borderBottomColor: theme.green,
        flexDirection: 'row',
    },
    schedulename: {
        fontSize:20,
        fontWeight:"600",
        marginTop:5,
    },
    scheduleDate: {
        height: 50,
        width: '40%',
        padding: 10,
        borderWidth: 2,
        borderColor: theme.dark_green,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: "600",
        margin: 10,
        textAlign: 'center'
    },
    notice: {
        backgroundColor:'#F4FAE4',
        height: '68%'
    },
    notice_body:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.light_green,
        backgroundColor: 'white'
    },
    scheduleList: {
        padding: 10,
        paddingBottom: 20,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    img: {
        width: 50,
        height: 50,
    },
    schedule_update: {
        width: 65,
        height: 30,
        marginBottom: 5,
        backgroundColor: theme.dark_green,
        alignItems: "center",
        justifyContent: "center",
    },
    schedule_delete: {
        width: 65,
        height: 30,
        marginTop: 5,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    footer:{
        alignItems:'flex-end',
        justifyContent:'center',
        height:70,
        marginRight:20,
    },
});


export default Schedule_managments;