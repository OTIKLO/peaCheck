import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
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
            case "a/p": return d.getHours() < 12 ? "AM" : "PM";
            default: return $1;
        }
    });
};
 
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

function Employ_notice_add({ navigation }) {
    const done = () => {
        navigation.navigate('Employ_notice')
    };
    const placeholder = "날짜를 입력해주세요";
    const [text, onChangeText] = useState("");
    const [starttime, onChangeStartTime] = useState("");
    const [endtime, onChangeEndTime] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isSTimePickerVisible, setSTimePickerVisibility] = useState(false);
    const [isETimePickerVisible, setETimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        hideDatePicker();
        onChangeText(date.format("yyyy년 MM월dd일"));
    };

    const showSTimePicker = () => {
        setSTimePickerVisibility(true);
    };
    const hideSTimePicker = () => {
        setSTimePickerVisibility(false);
    };
    const handleSTimeConfirm = (time) => {
        hideSTimePicker();
        onChangeStartTime(time.format(" HH : mm a/p "));
    };
    const showETimePicker = () => {
        setETimePickerVisibility(true);
    };
    const hideETimePicker = () => {
        setETimePickerVisibility(false);
    };
    const handleETimeConfirm = (time) => {
        hideETimePicker();
        onChangeEndTime(time.format(" HH : mm a/p "));
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>고용 공지 등록</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.title}>
                    <Text style={styles.titletext}>제목</Text>
                </View>
                <View style={styles.value}>
                    <TextInput style={styles.textinput}></TextInput>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titletext}>시작날짜</Text>
                </View>
                <View style={styles.value}>
                <TouchableOpacity onPress={showDatePicker}>
                        <TextInput
                            pointerEvents="none"
                            style={styles.textinput}
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
                </View>
                <View style={styles.title}>
                    <Text style={styles.titletext}>일당</Text>
                </View>
                <View style={styles.value}>
                    <TextInput style={styles.textinput} placeholder= "70,000원"></TextInput>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
                    <View style={styles.timetitle}>
                        <Text style={styles.titletext}>출근 시간</Text>
                    </View>
                    <View style={styles.timetitle}>
                        <Text style={styles.titletext}>퇴근 시간</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
                    <View style={styles.timevalue}>
                    <TouchableOpacity onPress={showSTimePicker}>
                        <TextInput
                            pointerEvents="none"
                            style={[styles.textinput,{textAlign:'center'}]}
                            underlineColorAndroid="transparent"
                            editable={false}
                            value={starttime}
                        />
                        <DateTimePickerModal
                            headerTextIOS={placeholder}
                            isVisible={isSTimePickerVisible}
                            mode="time"
                            onConfirm={handleSTimeConfirm}
                            onCancel={hideSTimePicker}
                        />
                    </TouchableOpacity>
                    </View>
                    <View style={styles.timevalue}>
                    <TouchableOpacity onPress={showETimePicker}>
                        <TextInput
                            pointerEvents="none"
                            style={[styles.textinput,{textAlign:'center'}]}
                            underlineColorAndroid="transparent"
                            editable={false}
                            value={endtime}
                        />
                        <DateTimePickerModal
                            headerTextIOS={placeholder}
                            isVisible={isETimePickerVisible}
                            mode="time"
                            onConfirm={handleETimeConfirm}
                            onCancel={hideETimePicker}
                        />
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.title,{backgroundColor:theme.green}]}>
                    <Text style={[styles.titletext,{color:'white'}]}>본문</Text>
                </View>
                <View style={[styles.value,{height:200}]}>
                    <TextInput style={[styles.textinput,{height:200,textAlignVertical:'top'}]} multiline={true}></TextInput>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titletext}>지역</Text>
                </View>
                <View style={styles.value}>
                    <TextInput style={styles.textinput}></TextInput>
                </View>
                <View style={styles.body_bottom}>
                    <TouchableOpacity style={styles.notice_add} onPress={done}><Text style={styles.btntext}>등록</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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
    body: {
        backgroundColor: 'white',
        marginTop: 20,
    },
    title: {
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: theme.dark_green,
        backgroundColor: theme.light_green,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    timetitle: {
        width: '50%',
        borderWidth: 1,
        borderColor: theme.dark_green,
        backgroundColor: theme.light_green,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    titletext: {
        fontSize: 20,
        fontWeight: "600",
    },
    value: {
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: theme.dark_green,
        backgroundColor: '#F4FAE4',
        padding: 5,
    },
    timevalue: {
        width: '50%',
        borderWidth: 1,
        borderColor: theme.dark_green,
        backgroundColor: '#F4FAE4',
        padding: 5,
    },
    textinput: {
        fontSize: 18,
        color: 'black',
    },
    notice_add: {
        marginLeft: 20,
        marginRight: 20,
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

export default Employ_notice_add;