import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { theme } from "../Color";

function Myinfodd_insert({ navigation }) {
    const done = () => {
        navigation.navigate('Tab');
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>개인 정보 등록</Text>
            </View>
            <View style={styles.myinfo}>
                <View style={styles.form}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>이름</Text>
                        <Text style={{ color: 'red', marginTop: 17, marginLeft: 5 }}>필수</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>생년월일</Text>
                        <Text style={{ color: 'red', marginTop: 17, marginLeft: 5 }}>필수</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        placeholder="ex) 980101"
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>주소</Text>
                        <Text style={{ color: 'red', marginTop: 17, marginLeft: 5 }}>필수</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        placeholder="도 / 시 / 군 / 구 / 동"
                    />
                    <Text style={styles.text}>상세주소</Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>연락처</Text>
                        <Text style={{ color: 'red', marginTop: 17, marginLeft: 5 }}>필수</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onSubmitEditing={done}
                        placeholder=" - 없이"
                    />
                    <TouchableOpacity style={styles.shopbtn_update} onPress={done}><Text style={styles.btntext}>등록</Text></TouchableOpacity>
                </View>
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
    myinfo: {
        backgroundColor: 'white',
        height: '100%',
    },
    form: {
        margin: 20,
        marginBottom: "30%",
        backgroundColor: 'white',
    },
    text: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 17,
    },
    input: {
        height: 40,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 5,
        paddingLeft: 10,
        fontSize: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#aaaaaa',
        borderRadius: 5,
    },
    addressinput: {
        height: 40,
        flex: 1,
        marginTop: 5,
        paddingLeft: 10,
        fontSize: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: theme.light_green,
    },
    shopbtn_update: {
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 40,
        height: 40,
        backgroundColor: theme.green,
        alignItems: "center",
        justifyContent: "center",
    },
    btntext: {
        fontSize: 20,
        color: "#ffffff",
    },
});
export default Myinfo_insert;