import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { theme } from "../Color";
import { FontAwesome } from '@expo/vector-icons'; 
import user from '../assets/images/icon/user.png';

function Chatroom({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>채팅방</Text>
            </View>
            <ScrollView style={styles.chatroom}>
                <View style={styles.chatting}>
                    <View style={styles.img}>
                        <Image source={user} />
                    </View>
                    <View style={{marginLeft: 5}}>
                        <Text>황의충</Text>
                        <Text style={styles.chattext}>오늘 손님 많아서 일찍 오실 수 있는 분 일찍 와 주세요.</Text>
                    </View>
                </View>
                <View style={styles.chatting}>
                    <View style={styles.img}>
                        <Image source={user} />
                    </View>
                    <View style={{marginLeft: 5}}>
                        <Text>황의충</Text>
                        <Text style={styles.chattext}>읽고나면 대답 부탁드립니다.</Text>
                    </View>
                </View>
                
                <View style={{alignItems: 'flex-end', marginRight:10}}>
                    <View style={styles.mychatting}>
                        <Text>확인했습니다.</Text>
                    </View>
                </View>
                
            </ScrollView>
            <View style={{flexDirection:'row', height: 50, borderWidth:1, borderColor:theme.green, justifyContent:'center'}}>
                <TextInput style={styles.input}></TextInput>
                <TouchableOpacity style={{ flex:1, justifyContent: 'center',alignItems:'center', marginRight:10}}>
                    <FontAwesome name="send" size={24} color={theme.green} />
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
        flex:9,
    },
    chatting: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
    },
    img: {
        width:50,
        height:50,
        borderWidth:1,
        borderColor: theme.light_green,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    chattext:{
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        maxWidth:250,
    },
    mychatting:{
        padding: 5,
        backgroundColor: '#aeddef',
        borderRadius: 10,
        maxWidth:250,
    }
});
export default Chatroom;