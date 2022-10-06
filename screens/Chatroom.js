import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { theme } from "../Color";

function Chatroom({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>채팅방</Text>
            </View>
            <View style={styles.chatroom}>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{justifyContent:'center'}}>
                            <Text style={styles.ctext}> 맥도날드 송도 GSD점</Text>
                            <Text> 수고하셨습니다~ </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', height: 50, borderWidth:1, borderColor:theme.green, justifyContent:'center'}}>
                <TextInput style={styles.input}></TextInput>
                <TouchableOpacity>
                    <Text>전송</Text>
                </TouchableOpacity>
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
    chatroom: {
        flex:1,
        backgroundColor: '#E9FCB6',
    },
    input: {
        paddingLeft: 10,
        fontSize: 16,
        flex:1,
    }
});
export default Chatroom;