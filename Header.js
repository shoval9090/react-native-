import React from 'react';
import {Text, View } from 'react-native';
import styles from '../assets/Style';

const Header = (props) =>{
  return ( 
    <View style={styles.header}>
      <Text styles={styles.HeaderText}>{props.myHeader}</Text>
    </View>
  );
};

export default Header;

