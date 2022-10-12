import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { theme } from "../Color";
import user from '../assets/images/icon/user.png';

function Staff_managments({ navigation }) {
    const arrow = ">";
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>직원 관리</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.body_top}>
                    <View style={{margin: 10, borderLeftWidth: 2, borderColor: theme.green}}><Text></Text></View>
                    <Text style={styles.shopname}>맥도날드 송도 GSD</Text>
                </View>
                <View style={styles.body_top}>
                    <TextInput style={styles.shopDate}>    2022년     ▼</TextInput>
                    <TextInput style={styles.shopDate}>      10월      ▼</TextInput>
                </View>
                <ScrollView style={styles.notice}>
                    <View style={styles.notice_body}>
                        <TouchableOpacity onPress={() => navigation.navigate('Staff')}>
                            <View style={styles.satffList}>
                                <Image source={user} style={styles.img}/>
                                <Text style={{fontSize:20, marginRight:250}}>장민수</Text>
                                <Text style={{fontSize: 30}}>{arrow}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.satffList}>
                                <Image source={user} style={styles.img}/>
                                <Text style={{fontSize:20, marginRight:250}}>황의충</Text>
                                <Text style={{fontSize: 30}}>{arrow}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.satffList}>
                                <Image source={user} style={styles.img}/>
                                <Text style={{fontSize:20, marginRight:250}}>홍길동</Text>
                                <Text style={{fontSize: 30}}>{arrow}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
    shopname: {
        fontSize:20,
        fontWeight:"600",
        marginTop:5,
    },
    shopDate: {
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
    },
    satffList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: 10,
        paddingBottom: 20,
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    img: {
        width: 50,
        height: 50,
    }
});


export default Staff_managments;