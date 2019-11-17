import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ClickerScreen, ResultScreen, RankingScreen, EventsScreen, Map, ProfileScreen } from "screens";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Text } from "native-base";
import React from "react";
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from "@expo/vector-icons";

// https://github.com/janhesters/ReactNative-ComplexNavigation/blob/master/app/navigation/Navigator.tsx
const RootStack = createStackNavigator(
	{ ClickerScreen, ResultScreen, RankingScreen, EventsScreen, ProfileScreen },
	{
		initialRouteName: "EventsScreen",
		headerMode: "none"
	}
);

const MapStack = createStackNavigator(
	{ Map },
	{
		initialRouteName: "Map",
		headerMode: "none"
	}
);

const RankStack = createStackNavigator(
	{ RankingScreen },
	{
		initialRouteName: "RankingScreen",
		headerMode: "none"
	}
);

const Main = createBottomTabNavigator(
	{
	  Események: RootStack ,
	  Közösség: MapStack ,
	  Vitézek: RankingScreen,
	},
	{
	  defaultNavigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
		  const { routeName } = navigation.state;
		  switch (routeName) {
			case 'Közösség': 
			  	return (
					<MaterialCommunityIcons name="heart-pulse" size={25} color="#666666"/>
				);
			case "Események":
				return (
					<MaterialIcons name="event" size={25} color="#666666"/>
				);
			  case "Vitézek":
				  return (
					  <Ionicons name="ios-medal" size={25} color="#666666" />
				  );	
			default: 
				return (
					<MaterialCommunityIcons name="heart" size={25} color="#B21773"/>
				);
		  }
		},
	  }),
	  tabBarOptions: {
		activeTintColor: '#666666',
		activeBackgroundColor: '#f5f5f5',
		inactiveTintColor: '#939393',
	  },
	}
  )

const Navigator = createAppContainer(Main);

export default Navigator;
