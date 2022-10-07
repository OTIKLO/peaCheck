import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import user from '../assets/images/icon/user.png';
import { theme } from "../Color";

function Mypage({ navigation }) {
    const arrow = ">";
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>마이페이지</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.body_myinfo}>
                    <View style={styles.myinfotop}>
                        <Image source={user} style={styles.img}/>
                        <Text style={{marginTop: 10,marginLeft:10, fontSize:25}}>장민수</Text>
                    </View>
                    <View style={styles.myinfobottom}>
                        <TouchableOpacity onPress={() => navigation.navigate('Myinfo_update')}>
                            <Text>개인 정보 수정</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mypage}>
                    <TouchableOpacity>
                    <View style={styles.menu}>
                        <Text style={{fontSize: 30,marginTop:15}}>오늘근무</Text>
                        <Text style={{fontSize: 50}}>{arrow}</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.menu}>
                        <Text style={{fontSize: 30,marginTop:15}}>출퇴근 기록표</Text>
                        <Text style={{fontSize: 50}}>{arrow}</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.menu}>
                        <Text style={{fontSize: 30,marginTop:15}}>급여계산표</Text>
                        <Text style={{fontSize: 50}}>{arrow}</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.menu}>
                        <Text style={{fontSize: 30,marginTop:15}}>출근일지</Text>
                        <Text style={{fontSize: 50}}>{arrow}</Text>
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
        height: 90,
        backgroundColor: theme.light_green,
        alignItems: 'center'
    },
    headerText: {
        marginTop: 40,
        fontSize: 25,
    },
    body: {
        backgroundColor: 'white',
    },
    body_myinfo: {
        borderBottomWidth: 1,
        borderBottomColor: theme.green,
    },
    myinfotop: {
        flexDirection:'row',
        marginTop: 20,
        marginLeft: 20,
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
    },
    mypage: {
        backgroundColor:'#F4FAE4',
        height: '100%',
    }
});

export default Mypage;