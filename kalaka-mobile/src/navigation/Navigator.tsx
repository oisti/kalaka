import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ClickerScreen, ResultScreen, RankingScreen, EventsScreen, Map } from "screens";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Text } from "native-base";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// https://github.com/janhesters/ReactNative-ComplexNavigation/blob/master/app/navigation/Navigator.tsx
const RootStack = createStackNavigator(
	{ ClickerScreen, ResultScreen, RankingScreen, EventsScreen },
	{
		initialRouteName: "ClickerScreen",
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

const Main = createBottomTabNavigator(
	{
	  Home: RootStack ,
	  Map: MapStack
	},
	{
	  defaultNavigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
		  const { routeName } = navigation.state;
		  switch (routeName) {
			case 'Home': 
			  	return (
					<MaterialCommunityIcons name="heart-pulse" size={25} color="#98002E"/>
				);
			case "Map":
				return (
					<MaterialCommunityIcons name="download" size={25} color="#98002E"/>
				);
			default: 
				return (
					<MaterialCommunityIcons name="heart" size={25} color="#98002E"/>
				);
		  }
		},
	  }),
	  tabBarOptions: {
		activeTintColor: '#FF6F00',
		inactiveTintColor: '#263238',
	  },
	}
  )

const Navigator = createAppContainer(Main);

export default Navigator;
