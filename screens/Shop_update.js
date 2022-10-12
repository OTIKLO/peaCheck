import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { theme } from "../Color";

function Shop_update({ navigation }) {
    const done = () => {
        navigation.navigate('Shop_management')
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>매장 수정</Text>
            </View>
            <View style={styles.shopupdate}>
                <View style={styles.form}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}>매장명</Text>
                        <Text style={{color: 'red', marginTop: 17, marginLeft:5}}>필수</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                    />
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}>주소</Text>
                        <Text style={{color: 'red', marginTop: 17, marginLeft:5}}>필수</Text>
                    </View>
                    <View style={{flexDirection:"row", marginLeft: 20, marginRight: 20,}}>
                        <TextInput
                            style={styles.addressinput}
                            returnKeyType="next"
                            placeholder="도 / 시"
                        />
                        <TextInput
                            style={styles.addressinput}
                            returnKeyType="next"
                            placeholder="시 / 군 / 구"
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        placeholder="상세주소"
                    />
                    <Text style={styles.text}>전화번호</Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                    />
                    <Text style={styles.text}>업종</Text>
                    <TextInput
                        style={styles.input}
                        onSubmitEditing={done}
                    />
                    <TouchableOpacity style={styles.shopbtn_update} onPress={done}><Text style={styles.btntext}>수정</Text></TouchableOpacity>
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
    shopupdate: {
        backgroundColor: theme.light_green,
        height: '100%',
    },
    form: {
        margin: 20,
        marginBottom: "30%",
        backgroundColor: '#E9FCB6',
    },
    text: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 20,
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
        borderColor: theme.light_green,
    },
    addressinput: {
        height: 40,
        flex:1,
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
        backgroundColor: theme.dark_green,
        alignItems: "center",
        justifyContent: "center",
    },
    btntext: {
        fontSize: 20,
        color: "#ffffff",
    },
});
export default Shop_update;