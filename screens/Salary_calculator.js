import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import user from '../assets/images/icon/user.png';
import { theme } from "../Color";
import SelectDropdown from 'react-native-select-dropdown';

function Salary_calculator({ navigation }) {
    const [dosi, setDosi] = useState([]);
    const [sigungu, setSigungu] = useState([]);
    const citiesDropdownRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setDosi([
                {
                    title: '2021년', sigungu: [{ title: '1월' },
                    { title: '2월' }, { title: '3월' }, { title: '4월' }, { title: '5월' },
                    { title: '6월' }, { title: '7월' }, { title: '8월' }, { title: '9월' },
                    { title: '10월' }, { title: '11월' }, { title: '12월' }]
                },
                {
                    title: '2022년', sigungu: [{ title: '1월' },
                    { title: '2월' }, { title: '3월' }, { title: '4월' }, { title: '5월' },
                    { title: '6월' }, { title: '7월' }, { title: '8월' }, { title: '9월' },
                    { title: '10월' }, { title: '11월' }, { title: '12월' }]
                }
            ]);
        }, 1000);
    }, []);
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
                    <View style={styles.dorpdownView}>
                        <SelectDropdown
                            data={dosi}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                                citiesDropdownRef.current.reset();
                                setSigungu([]);
                                setSigungu(selectedItem.sigungu);
                            }}
                            defaultButtonText={'년'}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem.title;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item.title;
                            }}
                            buttonStyle={styles.dropdown1BtnStyle}
                            buttonTextStyle={styles.dropdown1BtnTxtStyle}
                            dropdownIconPosition={'right'}
                            dropdownStyle={styles.dropdown1DropdownStyle}
                            rowStyle={styles.dropdown1RowStyle}
                            rowTextStyle={styles.dropdown1RowTxtStyle}
                        />
                        <SelectDropdown
                            ref={citiesDropdownRef}
                            data={sigungu}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            defaultButtonText={'월'}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem.title;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item.title;
                            }}
                            buttonStyle={styles.dropdown2BtnStyle}
                            buttonTextStyle={styles.dropdown2BtnTxtStyle}
                            dropdownIconPosition={'right'}
                            dropdownStyle={styles.dropdown2DropdownStyle}
                            rowStyle={styles.dropdown2RowStyle}
                            rowTextStyle={styles.dropdown2RowTxtStyle}
                        />
                    </View>
                    <View style={styles.workTime}>
                        <View style={{height: 50, marginRight: 10, borderLeftWidth: 2, borderColor: theme.green}}><Text></Text></View>
                        <View style={{width:280}}>
                            <Text style={{fontSize: 20 }}>근로시간</Text>
                        </View>
                        <Text style={{fontSize: 20 }}>100시간</Text>
                    </View>
                    <View style={styles.workMoney}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
                            <Text style={{fontSize: 25 }}>근로자 수령액</Text>
                            <Text style={{fontSize: 25 }}>906,761원</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight:15, paddingTop: 15}}>
                            <Text style={{fontSize: 15 }}>공제전 금액</Text>
                            <Text style={{fontSize: 15  }}>1,00,000원</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight:15, paddingTop:5}}>
                            <Text style={{fontSize: 15 }}>4대보험 근로자부담금</Text>
                            <Text style={{fontSize: 15  }}>(-)93,239원</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight:15, paddingTop:5}}>
                            <Text style={{fontSize: 15 }}>원천세</Text>
                            <Text style={{fontSize: 15  }}>(-)0원</Text>
                        </View>
                    </View>
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
        width: '100%'
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
    dorpdownView: {
        flexDirection: "row",
        marginRight: 20,
        height: 80,
        width: '100%',
        borderBottomWidth:1,
        borderBottomColor: '#cccccc',
    },
    dropdown1BtnStyle: {
        height: 50,
        flex: 1,
        marginTop: 15,
        fontSize: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#aaaaaa',
        borderRadius: 5,
    },
    dropdown1BtnTxtStyle: { color: 'black', textAlign: 'right' },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'right' },
    dropdown2BtnStyle: {
        height: 50,
        flex: 1,
        marginTop: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#aaaaaa',
        borderRadius: 5,
    },
    dropdown2BtnTxtStyle: { color: 'black', textAlign: 'right', fontSize: 17, },
    dropdown2DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown2RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown2RowTxtStyle: { color: '#444', textAlign: 'right' },
    workTime: {
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    workMoney: {
        margin: 20,
        width: '90%',
        height: 300,
        backgroundColor: 'white',
        borderWidth: 1,
    }
});

export default Salary_calculator;