import React from 'react';
import { StyleSheet } from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () =>{
  return(
    <Tab.Navigator
       labeled={false}
       barStyle={styles.bottomTabStyle}
       screenOptions={({route}) => ({
         tabBarIcon:({focused, color, size}) => {
           let iconName;
           if(route.name === 'Feed'){
             iconName = focused
             ?'book'
             :'book-outline';
           } else if (route.name === 'CretePost'){
             iconName = focused ? 'create' : 'create-outline';
           }
           return <Ionicons 
             name={iconName} 
             size={size} 
             color ={color} 
             style={styles.icons}
             />;
         }
       })}
       tabBarOption={{activeTintColor: 'tomato',iactiveTintColor: 'gray'}}
    >
    <Tab.Screen name="Feed" component={Feed}/>
    <Tab.Screen name="Create Post" component={CreatePost}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default BottomTabNavigator