import { StyleSheet } from "react-native";



export default StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: 'mediumseagreen',
        justifyContent: 'center',
        width:'100%',
        height:85,
      },
      HeaderTxt:{
        fontFamily:"Anton",
          fontSize:58,
      },
      // StartGameScreen
      myButton:{
        backgroundColor:'darkseagreen',
        height:100,
        width:200,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:50
        },
       txt:{
        fontSize:20
       },
       container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
       img:{
          height:"100%",
         width: "100%",
        },
        imgContainer:{
          width:300,
          height:300,
          borderRadius:150,
          borderWidth:10,
          borderColor:""
      },
       o : {
        width:100,
        justifyContent:'center',
        alignItems:"center",
        height:100,
        borderWidth: 3,
    },
    theX: {
        color:"blue",
        fontSize:65,
    },
    theO:{
        color:"red",
        fontSize:65,
    },// add the style - similar to "StartGameScreen" 
    btn:{
      backgroundColor:'darkseagreen',
      height:60,
      width:150,
      borderRadius: "50%",
      alignItems: "center",
      justifyContent:'center',
      borderRadius:50
      },
  winSquare:{
      borderColor:'darkseagreen',
      borderWidth:5,
      borderTopWidth:5,
      borderBottomWidth:5,
      borderRightWidth:5,
      borderLeftWidth:5,
      borderRadius:10
  },
  score:{
    backgroundColor:'darkseagreen',
    height:30,
    width:'70%',
    margin:50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:50,
  }
  });
  