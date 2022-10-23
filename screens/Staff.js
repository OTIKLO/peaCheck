import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import user from '../assets/images/icon/user.png';
import { theme } from "../Color";

function Staff({ navigation }) {
    const arrow = ">";
    const rmAlert = () =>
     Alert.alert(                    // 말그대로 Alert를 띄운다
        "해당 직원을 삭제하시겠습니까?",                    // 첫번째 text: 타이틀 제목
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
                <Text style={styles.headerText}>직원관리</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.body_myinfo}>
                    <View style={styles.myinfotop}>
                        <Image source={user} style={styles.img}/>
                        <Text style={{marginTop: 10,marginLeft:10, fontSize:25}}>장민수</Text>
                    </View>
                    <View style={styles.myinfobottom}>
                        <TouchableOpacity onPress={rmAlert}>
                            <Text style={{color:'red'}}>삭제하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mypage}>
                    <TouchableOpacity onPress={() => navigation.navigate('Commute_record')}>
                    <View style={styles.menu}>
                        <Text style={{fontSize: 20,marginTop:15}}>출퇴근 기록표</Text>
                        <Text style={{fontSize: 30}}>{arrow}</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Salary_calculator')}>
                    <View style={styles.menu}>
                        <Text style={{fontSize: 20,marginTop:15}}>급여계산표</Text>
                        <Text style={{fontSize: 30}}>{arrow}</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Schedule_managments')}>
                    <View style={styles.menu}>
                        <Text style={{fontSize: 20,marginTop:15}}>스케줄 관리</Text>
                        <Text style={{fontSize: 30}}>{arrow}</Text>
                    </View>
                    </TouchableOpacity>
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
    body_myinfo: {
        borderBottomWidth: 1,
        borderBottomColor: theme.green,
    },
    myinfotop: {
        justifyContent:'center',
        flexDirection:'row',
        marginTop: 20,
    },
    myinfobottom:{
        marginTop: 20,
        marginBottom: 10,
        marginRight: 10,
        alignItems: 'flex-end'
    },
    img: {
        width: 60,
        height: 60,
    },
    menu: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    mypage: {
        backgroundColor:'#F4FAE4',
        height: '100%',
    }
});

export default Staff;