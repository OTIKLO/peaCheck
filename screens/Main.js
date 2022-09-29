import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; //플러스 아이콘

function Main({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleText}>
                    완두체크
                </Text>
                <TouchableOpacity>
                    <AntDesign style={styles.plusbtn} name="plussquareo" size={40} color="black" />
                </TouchableOpacity> 
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 100,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    titleText: {
        marginLeft: 20,
        marginTop: 50,
        fontSize: 25,
        width:120,
        height:40,
        textAlign: 'center',
        paddingTop: 2,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 100,
    },
    plusbtn: {
        marginRight: 20,
        marginTop: 50,
    }
});

export default Main;