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
