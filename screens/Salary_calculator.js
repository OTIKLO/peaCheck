import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import user from '../assets/images/icon/user.png';
import { theme } from "../Color";

function Salary_calculator({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>급여계산표</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.myinfotop}>
                    <Image source={user} style={styles.img}/>
                    <View style={{height:100, width:300,  marginLeft: 20, paddingTop: 25}}>
                        <Text style={{ fontWeight: "600", fontSize: 20}}>장민수</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{ fontSize: 15, marginTop:5}}>시급 </Text>
                            <TextInput
                                style={styles.input}
                                maxLength={10}
                                returnKeyType="done"
                                keyboardType="numeric"
                            />
                            <Text style={{ fontSize: 15, marginTop:5}}>원</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mypage}>
                    
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
        padding: 10,
        paddingBottom: 20,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white'
    },
    myinfobottom:{
        marginTop: 20,
        marginBottom: 10,
        marginRight: 10,
        alignItems: 'flex-end'
    },
    
    img: {
        width: 70,
        height: 70,
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
    },
    input: {
        width: 200,
        height: 30,
        fontSize: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#aaaaaa',
        borderRadius: 5,
        color: 'black',
        textAlign: 'right'
    },
});

export default Salary_calculator;