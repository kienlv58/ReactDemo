'use strict';
import React, { Component } from 'react';
// var s = require('./App/style');
import s from '../App/style';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button
} from 'react-native';
import home from '../App/home'
// ref được dùng như là id 
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            pass:""
        };
        //  this.onPress = this.clickLogin.bind(this);
    }

    clickLogin(){
          AppRegistry.registerComponent('DemoProject', () => home);
          //  alert("login");
        }

    render(){
        let src_img = {
            uri:'https://framework.realtime.co/blog/img/react-native/AndroidiOSReact.png'
        };

        return(
            <View style={s.container}>
                <Image style={s.icon} source={src_img}/>
               
                <TextInput style={s.textInput} multiline={false}  autoFocus={false} 
                placeholder="UserName"  ref="name" onChangeText={(name)=>this.setState({name})}
                value={this.state.name} />
               

                <TextInput style={s.textInput} placeholder="PassWord"  ref="pass"
                onChangeText={(pass)=>this.setState({pass})}
                value={this.state.pass}/>

                <Button onPress={this.clickLogin()} title='Login' color='blue'disable={false}/>

               
            </View>
        )
    }
}

// <Button onPress={this.clickLogin()} title='Login' color='blue'disable={false}/>
// AppRegistry.registerComponent('Login', () => Login);
