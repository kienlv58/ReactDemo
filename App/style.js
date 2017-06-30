import { StyleSheet } from 'react-native';

let iconSize = 100;
export default StyleSheet.create({
    text:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#333333'
    },
    textInput:{
        fontSize: 20,
        paddingLeft: 15,
        paddingRight: 15,
        margin:20,
        alignSelf:'stretch',
        borderRadius:5,
        borderWidth:1,
        borderColor: "#FFFFFF",


        
    },
    icon: {
        height: iconSize,
        width: iconSize,
        borderRadius: iconSize / 2 //make this a circle
    },
     container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
  },
});