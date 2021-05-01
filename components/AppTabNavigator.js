import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SosScreen from '../screens/SosScreen';
import BookRequestScreen from '../screens/BookRequestScreen';
import TrackScreen from '../screens/TrackScreen';


export const AppTabNavigator = createBottomTabNavigator({
  SosScreen : {
    screen: SosScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/sos1.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "SOS",
    }
  },

  TrackScreen : {
    screen: TrackScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/sos1.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "TRACK",
    }
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Book Request",
    }
  }
});
