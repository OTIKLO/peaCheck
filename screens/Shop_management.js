import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native";
import { theme } from "../Color";

function Shop_management({navigation}) {
    const goAlert = () =>
     Alert.alert(                    // 말그대로 Alert를 띄운다
      "삭제하시겠습니까?",                    // 첫번째 text: 타이틀 제목
      "⚠경고 되돌릴 수 없습니다.",                         // 두번째 text: 그 밑에 작은 제목
      [                              // 버튼 배열
        {
          text: "아니요"
        },
        { text: "네"},
      ],
      { cancelable: false }
    );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>매장 관리</Text>
            </View>
            <View style={styles.shopmanagement}>
                <View style={styles.shop}>
                    <Text style={styles.shoptext}>매장 이름: 맥도날드</Text>
                    <View style={styles.shopbutton}>
                        <TouchableOpacity style={styles.shopbtn_update} onPress={() => navigation.navigate('Shop_update')}><Text style={styles.btntext}>수정</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.shopbtn_delete} onPress={goAlert}><Text style={styles.btntext}>삭제</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.shop}>
                    <Text style={styles.shoptext}></Text>
                    <View style={styles.shopbutton}>
                        <TouchableOpacity style={styles.shopbtn_insert} onPress={() => navigation.navigate('Shop_insert')}><Text style={styles.btntext}>등록</Text></TouchableOpacity>
                    </View>
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
      height: 90,
      backgroundColor: theme.light_green,
      alignItems:'center'
    },
    headerText: {
        marginTop: 40,
        fontSize: 25,
    },
    shopmanagement: {
        backgroundColor: '#D4EB96',
        height: '100%',
        
    },
    shop: {
        marginTop: 20,
        backgroundColor: "white",
        borderRadius: 20,
        marginRight: 10,
        marginLeft: 10,
    },
    shoptext: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 18,
    },
    shopbutton: {
        marginTop: 10,
        marginLeft: "10%",
        marginRight: "10%",
        marginBottom: 15,
        flexDirection:"row",
    },
    shopbtn_update: {
        height: 40,
        flex: 1,
        backgroundColor: theme.dark_green,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 2,
    },
    shopbtn_delete: {
        height: 40,
        flex:1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 2,
    },
    btntext: {
        fontSize: 20,
        color: "#ffffff",
    },
    shopbtn_insert: {
        height: 40,
        flex: 1,
        backgroundColor: theme.dark_green,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 2,
    },
  });
export default Shop_management;