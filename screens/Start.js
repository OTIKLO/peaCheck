import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { theme } from "../Color";
import kakao from "../assets/images/kakaologin.png";
import logo from "../assets/images/logo.png";
import { LinearGradient } from 'expo-linear-gradient'

function Start({ navigation }) {
  return (
    <LinearGradient style={styles.container} colors={['#36622B', '#729D39','#C6E377','white']}>
      <View style={styles.header}></View>
      <View style={styles.content}>
        <Image source={logo} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Myinfo_insert')}>
          <Image source={kakao} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
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