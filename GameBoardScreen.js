import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
// the Icon Library - built in 
import {MaterialCommunityIcons as Icon} from "react-native-vector-icons";
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

// ה .. שתי נקודות אומר שזה ייעלה לי תיקיה אחורה וייכנס לי לתיקייה שבה נמצא ה style 
import styles from '../assets/Style'
export default function GameBoardScreen() {
  // המשתנה כאן למטה מחזיק לי את העמוד של לוח המשחק 
  const [GameBord , setGameBord] = useState([[0,0,0],[0,0,0],[0,0,0]]);
// נותן לנו את השחקנים הבאים שאנו רוצים לממש ואת )(-1) (1)
  const[currPlayer,setCurrPlayer] = useState(1);
  const [isWinner , setIsWinner] = useState(false);
  // יכול לקבל בין 1-8
  const [rowWin,setRowWin] = useState(0);
  // מגדירים משתנה מסוג JSON - בשביל לספור א כמות הניצחונות לכל משתמש 
  // שם משתנה - פונקציה שמעדכנת אותו - וערך התחלתי = use state be like 
  const [points,setPoints] = useState({x:0,o:0}); 

  let restartGame = () => {
    setGameBord ([[0,0,0],[0,0,0],[0,0,0]]);
    setCurrPlayer(1); 
    setIsWinner(false);
    setRowWin(0);
  }

  

  let renderIcon = (row,column) =>{
    let value = GameBord[row][column];
    switch(value) {
      case 1:
        return<Icon name="close" style={styles.theX}/>;
      case -1:
        return<Icon name="circle-outline" style={styles.theO}/>;
      default:
        return<View></View>;    
    }
  };

  let onSquarePress = (row,col)  => { 
 
    // if there is a winner -
   // stop inserting data data 

   if(isWinner) return;

    // If Squre is already full - exit
    if(GameBord[row][col] != 0) return;
    // השלוש נקודות שומר לנו את כל המטריצייה הקודמת 
   // update Matrix 
    setGameBord([...GameBord, (GameBord[row][col] = currPlayer)]);
    // update the current player:
    setCurrPlayer(currPlayer === 1 ? -1 : 1);

    // check is there is a winner:
    let winner = checkWinner(); // return 0, 1, -1 
    if(winner === 1) {
      setPoints({...points, x: points.x +1})
    }
    else if( winner === -1){
      setPoints({...points, o:points.o + 1})
    }
    // update the state when there is a victory:
    if(winner != 0) setIsWinner(true);
  };

  let checkWinner = () => {
    let sum;
    // Rows:
    for( let row = 0; row < GameBord.length; row++){
      sum = GameBord[row][0] + GameBord[row][1] + GameBord[row][2];
      if(sum === 3 || sum === -3)
      setRowWin(row === 0 ? 1 : row === 1 ? 2:3);
      if(sum === 3) return 1; // X won
      else if( sum === -3) return -1; // O won
    }

    // columns : 
    for( let row = 0; row < GameBord.length; row++){
      sum = GameBord[0][row] + GameBord[1][row] + GameBord[2][row];
      if(sum === 3 || sum === -3) 
        setRowWin(row === 0 ? 4 : row === 1 ? 5 : 6);
      if(sum === 3) return 1; // X won
      else if( sum === -3) return -1; // O won
    }

    // main Diagonal - בודקים אם האלכסון כזה -\- ניצח
    sum = GameBord[0][0] + GameBord[1][1] + GameBord[2][2];
    if(sum === 3 || sum === -3) setRowWin(7);
    if(sum === 3) return 1; // X won
    else if( sum === -3) return -1; // O won 


    // Secound Diagonal:
    sum = GameBord[0][2] + GameBord[1][1] + GameBord[2][0];
    if(sum === 3 || sum === -3) setRowWin(8);
    if(sum === 3) return 1; // X won
    else if (sum === -3) return -1; // O won

    // If there is no winner:
    return 0;

  }

  return (
    <View style={styles.container}>
      <View style={styles.score}>
        <Text> Scoring players : X = {points.x} , O = {points.o}</Text>
      </View>
      <View style={{flexDirection:'row'}}> 
          <TouchableOpacity onPress={() => onSquarePress(0,0)}
           style={[styles.o,{borderTopWidth:0,borderLeftWidth:0},
            (rowWin === 1 || rowWin === 4 || rowWin === 7) ? styles.winSquare : ""]}>
           
             {renderIcon(0,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSquarePress(0,1)}  
          style={[styles.o,{borderTopWidth:0},
          (rowWin === 1 || rowWin === 5) ? styles.winSquare: "" ]}>
          {renderIcon(0,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSquarePress(0,2)}  
          style={[styles.o,{borderTopWidth:0,borderRightWidth:0},
            (rowWin === 1 || rowWin === 6 || rowWin === 8) ? styles.winSquare : ""]}>
          {renderIcon(0,2)}
          </TouchableOpacity>
      </View>

      <View  style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={() => onSquarePress(1,0)}  
          style={[styles.o,{borderLeftWidth : 0},
            (rowWin === 2 || rowWin === 4) ? styles.winSquare : "" ]}>
            {renderIcon(1,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSquarePress(1,1)} 
          style={[styles.o,
          (rowWin === 2 || rowWin === 5 || rowWin === 7 || rowWin === 8)? styles.winSquare: ""]}>
            {renderIcon(1,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSquarePress(1,2)} 
          style={[styles.o,{borderRightWidth:0},
            (rowWin === 2 || rowWin === 6) ? styles.winSquare : ""]}>
            {renderIcon(1,2)}
          </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={() => onSquarePress(2,0)}
           style={[styles.o,{borderBottomWidth:0,borderLeftWidth:0},
            (rowWin === 3 || rowWin === 4 || rowWin === 8) ? styles.winSquare : "" ]}>
             {renderIcon(2,0)}
           </TouchableOpacity>
          <TouchableOpacity onPress={() => onSquarePress(2,1)}  
          style={[styles.o,{borderBottomWidth:0},
            (rowWin === 3 || rowWin === 5) ? styles.winSquare : ""]}>
            {renderIcon(2,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSquarePress(2,2)}
           style={[styles.o,{borderBottomWidth:0,borderRightWidth:0},
            (rowWin === 3 || rowWin === 6 || rowWin === 7) ? styles.winSquare : ""]}>
             {renderIcon(2,2)}
           </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() =>restartGame()}>
        <Text> Restart</Text>
      </TouchableOpacity>
    </View>
  );
}
