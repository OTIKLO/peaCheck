# peaCheck

## 사용 언어

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>


## 사용 도구
<p>
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/></a>
</p>

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

## 기본 폼 코드
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

### React Native 화면 이동 관련
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
6. 버튼 구현
```javascript
      <Button 
        title="go to main" 
        onPress={() => navigation.navigate('Main')}
      />
```
