import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { theme } from "../Color";
import DateTimePickerModal from "react-native-modal-datetime-picker";

Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";
 
    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;
     
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};
 
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

function Myinfo_insert({ navigation }) {
    const placeholder = "날짜를 입력해주세요";
    const [text, onChangeText] = useState("");
    const done = () => {
        navigation.navigate('Tab');
    };
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        onChangeText(date.format("yyyy/MM/dd"));
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
                        <Text style={{ color: 'red', marginTop: 13, marginLeft: 5 }}>필수</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>생년월일</Text>
                        <Text style={{ color: 'red', marginTop: 13, marginLeft: 5 }}>필수</Text>
                    </View>
                    <TouchableOpacity onPress={showDatePicker}>
                        <TextInput
                            pointerEvents="none"
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            editable={false}
                            value={text}
                        />
                        <DateTimePickerModal
                            headerTextIOS={placeholder}
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>주소</Text>
                        <Text style={{ color: 'red', marginTop: 13, marginLeft: 5 }}>필수</Text>
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
                        <Text style={{ color: 'red', marginTop: 13, marginLeft: 5 }}>필수</Text>
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
        borderBottomWidth: 1,
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
        color: 'black',
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