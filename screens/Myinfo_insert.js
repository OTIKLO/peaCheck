import React, { useEffect, useRef, useState } from "react";
import SelectDropdown from 'react-native-select-dropdown';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";
import { theme } from "../Color";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import axios from "axios";

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
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");
    const [city, setCity] = useState("");
    const [area, setArea] = useState("");
    const [phone, setPhone] = useState("");
    const [position, setPosition] = useState("");
    const placeholder = "날짜를 입력해주세요";
    
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        setBirthday(date.format("yyyyMMdd"));
    };
    const [dosi, setDosi] = useState([]);
    const [sigungu, setSigungu] = useState([]);
    const [relation, setRelation] = useState([]);
    const citiesDropdownRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setDosi([
                {
                    title: '서울', sigungu: [{ title: '강남구' },
                    { title: '강동구' }, { title: '강북구' }, { title: '강서구' }, { title: '관악구' },
                    { title: '광진구' }, { title: '구로구' }, { title: '금천구' }, { title: '노원구' },
                    { title: '도봉구' }, { title: '동대문구' }, { title: '동작구' }, { title: '마포구' },
                    { title: '서대문구' }, { title: '서초구' }, { title: '성동구' }, { title: '성북구' },
                    { title: '송파구' }, { title: '양천구' }, { title: '영등포구' }, { title: '용산구' },
                    { title: '은평구' }, { title: '종로구' }, { title: '중구' }, { title: '중랑구' }]
                },
                {
                    title: '경기', sigungu: [{ title: '가평군' },
                    { title: '고양시 덕양구' }, { title: '고양시 일산동구' }, { title: '고양시 일산서구' },
                    { title: '과천시' }, { title: '광명시' }, { title: '광주시' }, { title: '광주시' },
                    { title: '구리시' }, { title: '군포시' }, { title: '김포시' }, { title: '남양주시' },
                    { title: '수원시 영통구' }, { title: '수원시 장안구' }, { title: '수원시 팔달구' },
                    { title: '시흥시' }, { title: '안산시 단원구' }, { title: '안산시 상록구' }, { title: '안성시' },
                    { title: '안양시 동안구' }, { title: '안양시 만안구' }, { title: '양주시' }, { title: '양평군' },
                    { title: '여주시' }, { title: '연천군' }, { title: '오산시' }, { title: '용인시 기흥구' },
                    { title: '용인시 수지구' }, { title: '용인시 처인구' }, { title: '의왕시' }, { title: '의정부시' },
                    { title: '이천시' }, { title: '파주시' }, { title: '평택시' }, { title: '포천시' },
                    { title: '하남시' }, { title: '화성시' }]
                },
                {
                    title: '인천', sigungu: [{ title: '강화군' }, { title: '계양구' }, { title: '남동구' },
                    { title: '동구' }, { title: '미추홀구' }, { title: '부평구' }, { title: '서구' },
                    { title: '연수구' }, { title: '옹진군' }, { title: '중구' }]
                },
                {
                    title: '강원', sigungu: [{ title: '강릉시' }, { title: '고성군' }, { title: '동해시' },
                    { title: '삼척시' }, { title: '속초시' }, { title: '양구군' }, { title: '양양군' },
                    { title: '영월군' }, { title: '원주시' }, { title: '인제군' }, { title: '정선군' },
                    { title: '철원군' }, { title: '춘천시' }, { title: '태백시' }, { title: '평창군' },
                    { title: '홍천군' }, { title: '화천군' }, { title: '횡성군' }]
                },
                {
                    title: '대전', sigungu: [{ title: '대덕구' }, { title: '동구' }, { title: '서구' },
                    { title: '유성구' }, { title: '중구' }]
                },
                { title: '세종', sigungu: [{ title: '세종시' }] },
                {
                    title: '충남', sigungu: [{ title: '계룡시' }, { title: '공주시' }, { title: '금산군' },
                    { title: '논산시' }, { title: '당진시' }, { title: '보령시' }, { title: '부여군' },
                    { title: '서산시' }, { title: '서천군' }, { title: '아산시' }, { title: '예산군' },
                    { title: '천안시 동남구' }, { title: '천안시 서북구' }, { title: '청양군' },
                    { title: '태안군' }, { title: '홍성군' }]
                },
                {
                    title: '충북', sigungu: [{ title: '괴산군' }, { title: '단양군' }, { title: '보은군' },
                    { title: '영동군' }, { title: '옥천군' }, { title: '음성군' }, { title: '제천시' },
                    { title: '증평군' }, { title: '진천군' }, { title: '청주시 상당구' }, { title: '청주시 서원구' },
                    { title: '청주시 청원구' }, { title: '청주시 흥덕구' }, { title: '충주시' }]
                },
                {
                    title: '부산', sigungu: [{ title: '강서구' }, { title: '금정구' }, { title: '기장군' },
                    { title: '남구' }, { title: '동구' }, { title: '동래구' }, { title: '부산진구' },
                    { title: '북구' }, { title: '사상구' }, { title: '사하구' }, { title: '서구' },
                    { title: '수영구' }, { title: '연제구' }, { title: '영도구' }, { title: '중구' },
                    { title: '해운대구' },]
                },
                {
                    title: '울산', sigungu: [{ title: '남구' }, { title: '동구' }, { title: '북구' },
                    { title: '울주군' }, { title: '중구' }]
                },
                {
                    title: '경남', sigungu: [{ title: '거제시' }, { title: '거창군' }, { title: '고성군' },
                    { title: '김해시' }, { title: '남해군' }, { title: '밀양시' }, { title: '사천시' },
                    { title: '산청군' }, { title: '양산시' }, { title: '의령군' }, { title: '진주시' },
                    { title: '창녕군' }, { title: '창원시 마산합포구' }, { title: '창원시 마산회원구' }, { title: '창원시 성산구' },
                    { title: '창원시 의창구' }, { title: '창원시 진해구' }, { title: '통영시' }, { title: '하동군' },
                    { title: '함안군' }, { title: '함양군' }, { title: '합천군' }]
                },
                {
                    title: '경북', sigungu: [{ title: '경산시' }, { title: '경주시' }, { title: '고령군' },
                    { title: '구미시' }, { title: '군위군' }, { title: '김천시' }, { title: '문경시' },
                    { title: '봉화군' }, { title: '상주시' }, { title: '성주군' }, { title: '안동시' },
                    { title: '영덕군' }, { title: '영양군' }, { title: '영주시' }, { title: '영천시' },
                    { title: '예천군' }, { title: '울릉군' }, { title: '울진군' }, { title: '의성군' },
                    { title: '청도군' }, { title: '청송군' }, { title: '칠곡군' }, { title: '포항시 남구' },
                    { title: '포항시 북구' }]
                },
                {
                    title: '대구', sigungu: [{ title: '남구' }, { title: '달서구' }, { title: '달성군' },
                    { title: '동구' }, { title: '북구' }, { title: '서구' }, { title: '수성구' },
                    { title: '동구' }]
                },
                {
                    title: '광주', sigungu: [{ title: '광산구' }, { title: '남구' }, { title: '동구' },
                    { title: '북구' }, { title: '서구' }]
                },
                {
                    title: '전남', sigungu: [{ title: '강진군' }, { title: '고흥군' }, { title: '곡성군' },
                    { title: '광양시' }, { title: '구례군' }, { title: '나주시' }, { title: '담양군' },
                    { title: '목포시' }, { title: '무안군' }, { title: '보성군' }, { title: '순천시' },
                    { title: '신안군' }, { title: '여수시' }, { title: '영광군' }, { title: '영암군' },
                    { title: '완도군' }, { title: '장성군' }, { title: '장흥군' }, { title: '진도군' },
                    { title: '함평군' }, { title: '해남군' }, { title: '화순군' }]
                },
                {
                    title: '전북', sigungu: [{ title: '고창군' }, { title: '군산시' }, { title: '김제시' },
                    { title: '남원시' }, { title: '무주군' }, { title: '부안군' }, { title: '순창군' },
                    { title: '완주군' }, { title: '익산시' }, { title: '임실군' }, { title: '장수군' },
                    { title: '전주시 덕진구' }, { title: '전주시 완산구' }, { title: '정읍시' }, { title: '진안군' }]
                },
                { title: '제주', sigungu: [{ title: '서귀포시' }, { title: '제주시' }] },
                { title: '전국', sigungu: [{ title: '전체' }] },
            ]);
            setRelation([
                {title: '사장'},
                {title: '직원'}
            ]);
        }, 1000);
    }, []);
    
    function save() {
        if (name.trim() === "") {
            Alert.alert("아이디 입력 확인", "아이디가 입력되지 않았습니다.");
        } else if (password.trim() === "") {
            Alert.alert("비밀번호 입력 확인", "비밀번호가 입력되지 않았습니다.");
        } else if (password.trim() === "") {
            Alert.alert("이름 입력 확인", "이름이 입력되지 않았습니다.");
        } else if (birthday.trim() === "") {
            Alert.alert("생년월일 입력 확인", "생년월일이 입력되지 않았습니다.");
        } else if (city.trim() === "") {
            Alert.alert("주소 입력 확인", "도시가 입력되지 않았습니다.");
        } else if (area.trim() === "") {
            Alert.alert("주소 입력 확인", "지역이 입력되지 않았습니다.");
        } else if (phone.trim() === "") {
            Alert.alert("연락처 입력 확인", "연락처가 입력되지 않았습니다.");
        } else if (position.trim() === "") {
            Alert.alert("직급 입력 확인", "직급이 입력되지 않았습니다.");
        } else {
            axios.post("http://192.168.219.105/save",
                null,
                { params: { id: id, password: password, name: name, birthday: birthday, city: city, area: area, phone: phone, position: position} }
            ).then(function (resp) {
                console.log(resp.data);
                if (resp.data !== null && resp.data != "") {
                    console.log(resp.data)
                    console.log("회원가입 성공");
                    navigation.navigate('Login');
                } else {
                    console.log("회원가입 실패");
                    Alert.alert("회원가입 실패", "아이디나 비밀번호를 확인하세요.");
                    setId("");
                    setPassword("");
                }
            }).catch(function (err) {
                console.log(`Error Message: ${err}`);
            })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>회원가입</Text>
            </View>
            <View style={styles.myinfo}>
                <View style={styles.form}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>아이디</Text>
                        <Text style={{ color: 'red', marginTop: 13, marginLeft: 5 }}>필수</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        onChangeText={(id) => setId(id)}
                        value={id}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>비밀번호</Text>
                        <Text style={{ color: 'red', marginTop: 13, marginLeft: 5 }}>필수</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>이름</Text>
                        <Text style={{ color: 'red', marginTop: 13, marginLeft: 5 }}>필수</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        onChangeText={(name) => setName(name)}
                        value={name}
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
                            value={birthday}
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
                    <View style={{ flexDirection: "row", marginLeft: 20, marginRight: 20, }}>
                        <SelectDropdown
                            data={dosi}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                                citiesDropdownRef.current.reset();
                                setSigungu([]);
                                setSigungu(selectedItem.sigungu);
                            }}
                            defaultButtonText={'도/시'}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                setCity(selectedItem.title);
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
                            value={city}
                        />
                        <SelectDropdown
                            ref={citiesDropdownRef}
                            data={sigungu}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            defaultButtonText={'시/군/구'}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                setArea(selectedItem.title);
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
                            value={area}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>연락처</Text>
                        <Text style={{ color: 'red', marginTop: 13, marginLeft: 5 }}>필수</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder=" - 없이"
                        onChangeText={(phone) => setPhone(phone)}
                        value={phone}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>직급</Text>
                        <Text style={{ color: 'red', marginTop: 13, marginLeft: 5 }}>필수</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: 20, marginRight: 20, }}>
                        <SelectDropdown
                            data={relation}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            defaultButtonText={'직급을 선택하세요'}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                setPosition(selectedItem.title);
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
                            value={position}
                        />
                    </View>
                    <TouchableOpacity style={styles.shopbtn_update} onPress={() => save()}>
                        <Text style={styles.btntext}>등록</Text>
                    </TouchableOpacity>
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
export default Myinfo_insert;