import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { theme } from "../Color";
import DateTimePickerModal from "react-native-modal-datetime-picker";

function Schedule_update({ navigation }) {
    const done = () => {
        navigation.navigate('Tab');
    };
    {/* 날짜  */}
    const placeholder = "날짜를 입력해주세요";
    const [text, onChangeText] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    {/* 시간 */}
    const placeholderTime = "시간을 입력해주세요";
    const [startTime, onStartTimeChangeText] = useState("");
    const [endTime, onEndTimeChangeText] = useState("");
    const [isStartTimePickerVisible, setStartTimePickerVisibility] = useState(false);
    const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);

    {/* 날짜 */}
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

    {/* 시간 */}
    const startTimePicker = () => {
        setStartTimePickerVisibility(true);
    };

    const endTimePicker = () => {
        setEndTimePickerVisibility(true);
    };

    const startHideTimePicker = () => {
        setStartTimePickerVisibility(false);
    };

    const endHideTimePicker = () => {
        setEndTimePickerVisibility(false);
    };

    const startTimeHandleConfirm = (time) => {
        startHideTimePicker();
        onStartTimeChangeText(time.format("HH:mm"));
    };
    const endTimeHandleConfirm = (time) => {
        endHideTimePicker();
        onEndTimeChangeText(time.format("HH:mm"));
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>스케줄 수정</Text>
            </View>
            <View style={styles.myinfo}>
                <View style={styles.form}>
                    <View style={{ paddingBottom: 40 }}>
                        <Text
                            style={styles.inputMain}
                            returnKeyType="next"
                        >
                            주별로 등록
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row',justifyContent: 'space-between',paddingBottom: 20 }}>
                        <Text style={styles.text}>날짜</Text>
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
                    </View>
                    <View style={{ flexDirection: 'row',justifyContent: 'space-between', paddingBottom: 20 }}>
                        <Text style={styles.text}>출근</Text>
                        <TouchableOpacity onPress={startTimePicker}>
                            <TextInput
                                pointerEvents="none"
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                editable={false}
                                value={startTime}
                            />
                            <DateTimePickerModal
                                headerTextIOS={placeholderTime}
                                isVisible={isStartTimePickerVisible}
                                mode="time"
                                onConfirm={startTimeHandleConfirm}
                                onCancel={startHideTimePicker}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row',justifyContent: 'space-between', paddingBottom: 20 }}>
                        <Text style={styles.text}>퇴근</Text>
                        <TouchableOpacity onPress={endTimePicker}>
                            <TextInput
                                pointerEvents="none"
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                editable={false}
                                value={endTime}
                            />
                            <DateTimePickerModal
                                headerTextIOS={placeholderTime}
                                isVisible={isEndTimePickerVisible}
                                mode="time"
                                onConfirm={endTimeHandleConfirm}
                                onCancel={endHideTimePicker}
                            />
                        </TouchableOpacity>
                    </View>
                     <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.text}>대상자</Text>
                        <TextInput
                        style={styles.input}
                        onSubmitEditing={done}
                        >
                            장민수
                        </TextInput>
                    </View>
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
        fontSize: 20,
    },
    inputMain: {
        height: 40,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 5,
        paddingTop: 5,
        fontSize: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#aaaaaa',
        borderRadius: 5,
        color: 'black',
        textAlign: 'center'
    },
    input: {
        width: 220,
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
    dropdown1BtnStyle: {
        height: 40,
        flex: 1,
        marginTop: 5,
        fontSize: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#aaaaaa',
        borderRadius: 5,
    },
    dropdown1BtnTxtStyle: { color: 'black', textAlign: 'left' },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown2BtnStyle: {
        height: 40,
        flex: 1,
        marginTop: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#aaaaaa',
        borderRadius: 5,
    },
    dropdown2BtnTxtStyle: { color: 'black', textAlign: 'left', fontSize: 17, },
    dropdown2DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown2RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown2RowTxtStyle: { color: '#444', textAlign: 'left' },
});
export default Schedule_update;