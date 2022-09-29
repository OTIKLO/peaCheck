import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { theme } from "../Color";
import kakao from "../assets/images/kakaologin.png";
import logo from "../assets/images/logo.png";

function Start({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.content}>
                <Image source={logo} />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                    <Image source={kakao}/>
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
      height: 60,
      backgroundColor: theme.light_green,
    },
    content: {
      flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer: {
      height: 300,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4fbc7a',
    },
  });
/*
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }); */
export default Start;