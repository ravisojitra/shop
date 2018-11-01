import React, {Component} from 'react';
import {Dimensions, Easing, Text, View,SafeAreaView,KeyboardAvoidingView,Image,TextInput,TouchableOpacity,Animated,ActivityIndicator} from 'react-native';
import {styles} from './styles'

export default class Profile extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
    console.log(props)
  }

  render(){
    return(
      <View style={{flex:1,backgroundColor:'#e2e3e5'}}>
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Text>Ravi Sotra Profile</Text>
        </View>
      </View>
    )
  }
}