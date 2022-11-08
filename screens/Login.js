import axios from "axios";
import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Alert,
} from "react-native";
import logo from "../assets/images/logo.png";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { axiosIp } from "../Axios";
 
const Login = ({ navigation }) => {       // 화면 이동을 위해 매개변수 navigation 넣어주기
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        if (id.trim() === "") {
            Alert.alert("아이디 입력 확인", "아이디가 입력되지 않았습니다.");
        } else if (password.trim() === "") {
            Alert.alert("비밀번호 입력 확인", "비밀번호가 입력되지 않았습니다.");
        } else {
            axios.post(`http://${axiosIp.ip}/login`,
                null,
                { params: { id: id, password: password } }
            ).then(function (resp) {
                console.log(resp.data);
                if (resp.data !== null && resp.data != "") {
                    AsyncStorage.setItem('user_id', id, () => { //user_id변수로 id값 저장
                        console.log("user_id : " + id);
                    });
                    console.log("로그인 성공");
                    const pos = resp.data.position;
                    console.log("pos : " + resp.data.position);

                    if(pos === '사장'){
                        navigation.navigate('OTab');
                    } else{
                        navigation.navigate('STab');
                    }

                   // navigation.navigate('Tab');
                } else {
                    console.log("로그인 실패");
                    Alert.alert("로그인 실패", "아이디나 비밀번호를 확인하세요.");
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
            <Image style={styles.image} source={logo} />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="아이디"
                    placeholderTextColor="#003f5c"
                    onChangeText={(id) => setId(id)}
                    value={id}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    textContentType="password"
                    placeholder="비밀번호"
                    placeholderTextColor="#003f5c"
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Myinfo_insert')}
            >
                <Text style={styles.forgotButton}>회원가입</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => login()}
            >
                <Text style={styles.whiteColor}>로그인</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e9e9e9",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
    },
    inputView: {
        backgroundColor: "#ffc0cb",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20
    },
    forgotButton: {
        height: 30,
        marginBottom: 30
    },
    loginBtn: {
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#ff1493",
    },
    whiteColor: {
        color: "#ffffff"
    }
});

export default Login;