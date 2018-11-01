import React, {Component} from 'react';
import Login from './src/containers/login/login';
import Home from './src/containers/home/home';
import Profile from './src/containers/profile/profile';
import { createSwitchNavigator,createBottomTabNavigator} from "react-navigation";
import {Animated,Easing} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const StackNavigatorOptions = {
  // headerMode: "none",
  cardStyle: {
      backgroundColor: "white"
  },
  transitionConfig : () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.linear,
    },
  }),
};

const HomeTabs = createBottomTabNavigator({
  Home: { 
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title : 'Home',
      tabBarIcon: ({ tintColor }) => <AntDesign name="home" size={25} color={tintColor} />
    }) 
  },
  Categories: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title : 'Categories',
      tabBarIcon: ({ tintColor }) => <AntDesign name="tago" size={25} color={tintColor} />
    }) 
  },
  Cart: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title : 'Cart',
      tabBarIcon: ({ tintColor }) => <AntDesign name="shoppingcart" size={25} color={tintColor} />
    }) 
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title : 'Profile',
      tabBarIcon: ({ tintColor }) => <AntDesign name="user" size={25} color={tintColor} />
    }) 
  }
}, {
  animationEnabled: false,
  tabBarPosition: "bottom",
  swipeEnabled: false,
  lazy: true,
  tabBarOptions:{
    showLabel:true
  }
});

const AppNavigator = createSwitchNavigator({
  Login: { screen: Login },
  Home: { screen: HomeTabs }
}, StackNavigatorOptions);

export { AppNavigator };
