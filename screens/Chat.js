import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { theme } from "../Color";
import mc from "../assets/images/mc.png";

function Chat({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>채팅</Text>
            </View>
            <View style={styles.chatroom}>
                <TouchableOpacity onPress={() => navigation.navigate('Chatroom')}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.chat}>
                            <Image source={mc} style={{ width: '70%', height: '70%', marginTop: 14 }} />
                        </View>
                        <View style={{justifyContent:'center'}}>
                            <Text style={styles.ctext}> 맥도날드 송도 GSD점</Text>
                            <Text> 확인했습니다. </Text>
                        </View>
                    </View>

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
    chatroom: {
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    chat: {
        backgroundColor: 'white',
        height: '100%',
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        width: 80,
        height: 70,
        borderWidth: 3,
        borderColor: theme.light_green,
        borderRadius: 20,
        alignItems: 'center',
    },
    ctext: {
        fontSize:17,
        fontWeight:"600"
    }
});
export default Chat;