# peaCheck

팀프로젝트 진행 중


## 사용 언어

<img src="https://img.shields.io/badge/ReactNative-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>




## 사용 도구
<p>
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/></a>
</p>

아이콘

icons.expo.fyi

## 코드

#### expo 설치
```
$ npm install --global expo-cli
npx expo install react-native-web@~0.18.7 react-dom@18.0.0 @expo/webpack-config@^0.17.0
```
```
expo login
```

# 주요 코드

### 기본 폼 코드
```javascript
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Start() {
  return (
    <View>
      <Text></Text>
    </View>
  );
}

export default Start;
```

## React Native 화면 이동 관련
+ ### 버튼 클릭으로 화면 이동
1. 설치
```
npm install @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
```
2. App.js에 import
```javascript
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
```
3. App.js에 파일 가져오기
```javascript
import Start from "./screens/Start";
```
4. 스택 선언
```javascript
const Stack = createStackNavigator();
```
5. App.js에 화면 이동 코드 넣기
```javascript
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
```
https://reactnavigation.org/docs/native-stack-navigator/#options

6. 버튼 구현
```javascript
      <Button 
        title="go to main" 
        onPress={() => navigation.navigate('Main')}
      />
```
+ ### 하단 메뉴 이동
1. 설치
```
npm install @react-navigation/bottom-tabs
```
2. App.js에 import
```javascript
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
```

3. createBottomTabNavigator를 저장할 함수 선언
createBottomTabNavigator():Screen과 Navigator의 속성을 포함하는 객체를 반환하는 함수, createStackNavigator와 거의 유사하다.
```javascript
const Stack = createStackNavigator();
```
4. 화면 이동 코드
```javascript
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="개인 정보" component={Main}/>
        <Tab.Screen name="추가 정보" component={Side}/>
      </Tab.Navigator>
    </NavigationContainer>
```
https://reactnavigation.org/docs/bottom-tab-navigator

## 기타 라이브러리

+ ### Datepicker

```
npm i react-native-modal-datetime-picker @react-native-community/datetimepicker
```

예시 코드

```javascript
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Home() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <View>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
  );
}
```
```javascript
<TouchableOpacity onPress={showDatePicker}>
      <TextInput
        pointerEvents="none"
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#000000"
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
  ```
  
  포멧
  ```javascript
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
  ```
  
  https://taehoon95.tistory.com/116
  
  + ### React Native Select Dropdown

https://www.npmjs.com/package/react-native-select-dropdown

```
npm install react-native-select-dropdown
```

사용코드

```javascript
import React, { useEffect, useRef, useState } from "react";
import SelectDropdown from 'react-native-select-dropdown';

const [dosi, setDosi] = useState([]);
    const [sigungu, setSigungu] = useState([]);
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
        }, 1000);
    }, []);
```

```javascript
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
                            defaultButtonText={'시/군/구'}
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
```

```javascript
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
```

+ ### 그라데이션

```
npm install react-native-linear-gradient
npm install expo-linear-gradient
```

```javascript
import { LinearGradient } from 'expo-linear-gradient'

  <LinearGradient style={styles.container} colors={['#5f0d80', '#7c22a1', '#c487de']}>
    <Text style={styles.test_text}>[내용]</Text>
  </LinearGradient>
```
