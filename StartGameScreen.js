import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from '../assets/Style'

export default function StartGameScreen(props) {
  return (
    <View style={styles.container} >

      <View style={styles.imgContainer}>
        <Image source={require('../assets/start.png')} style={styles.img}/>
      </View>

      <TouchableOpacity 
      onPress={() => props.onStartGame()} 
      style={styles.button}>
        <Text style={styles.txt}>Start a new game</Text>
      </TouchableOpacity>
    </View>
  );
}

