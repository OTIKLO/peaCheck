import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { theme } from "../Color";

function Shop_management({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>매장 관리</Text>
            </View>
            <View style={styles.shopmanagement}>
                <View>
                    <Text style={styles.shoptext}>매장 이름: 맥도날드</Text>
                    <View style={styles.shopbutton}>
                        <Button style={styles.shopbtn_update} title="수정"></Button>
                        <Button style={styles.shopbtn_delete} title="삭제"></Button>
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
        backgroundColor: 'white',
        height: '100%',
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
    },
    shoptext: {
        fontSize: 18,
    },
    shopbutton: {
        flexDirection:"row",
    },
    shopbtn_delete: {
        backgroundColor: theme.dark_green,
    },
    shopbtn_update: {

    }
  });
export default Shop_management;