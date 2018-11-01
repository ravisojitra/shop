import React, {Component} from 'react';
import {Dimensions, Easing, Text, View,SafeAreaView,KeyboardAvoidingView,Image,TextInput,TouchableOpacity,Animated,ActivityIndicator} from 'react-native';
import {styles} from './styles'

import usernameImg from './../../assets/images/username.png';
import passwordImg from './../../assets/images/password.png';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      username :'',
      password :'',
      pageChanged:false
    };
    console.disableYellowBox = true;
    this.login = this.login.bind(this);
    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated   = new Animated.Value(0);
    console.log(props)
  }

  login(){

    this.setState({
      isLoading:!this.state.isLoading
    });

    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();

    setTimeout(()=>{
      this.changePage();
    },1000)

  }

  changePage(){
    this.setState({
      pageChanged:true
    })
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 800,
      easing: Easing.bounce,
    }).start();
    setTimeout(()=>{
      this.props.navigation.navigate('Home');
    },500)
  }

  render(){
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange:[0,1],
      outputRange:[DEVICE_WIDTH- 100,40]
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 40],
    });
    return(
        <View style={styles.container}>

          <View style={styles.headingView}>
            <Text style={styles.heading}>Login</Text>
          </View>

          <KeyboardAvoidingView behavior='padding' style={styles.inputContainer}>

            <View style={styles.inputWrapper}>
              <Image source={usernameImg} style={styles.inlineImg} />
              <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="#ccc"
                  underlineColorAndroid="transparent"
                  onChangeText={(username) => this.setState({username: username})}
              />
            </View>

            <View style={styles.inputWrapper}>
                <Image source={passwordImg} style={styles.inlineImg} />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#ccc"
                    underlineColorAndroid="transparent"
                    onChangeText={(password) => this.setState({password: password})}
                />
            </View>

          <View style={styles.buttonContainer}>
            <Animated.View style={{width:changeWidth,borderRadius:20}}>
                {this.state.isLoading && !this.state.pageChanged ? 
                  <TouchableOpacity style={styles.loadingButton} onPress={this.login}>
                    <ActivityIndicator size="small" color="#303034" />
                  </TouchableOpacity>
                :
                  !this.state.pageChanged ?
                    <TouchableOpacity style={styles.button} onPress={this.login} activeOpacity={1}>
                      <Text style={styles.text}>LOGIN</Text>
                    </TouchableOpacity>
                  :
                    null
                }
                <Animated.View style={[styles.circle, {transform: [{scale: changeScale}]}]} />

            </Animated.View>
          </View>

          </KeyboardAvoidingView>

        </View>
    )
  }

}