import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ClickerScreen, ResultScreen, RankingScreen, Map } from "screens";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Text, Button } from "native-base";
import React from "react";


// https://github.com/janhesters/ReactNative-ComplexNavigation/blob/master/app/navigation/Navigator.tsx
const RootStack = createStackNavigator(
	{ ClickerScreen, ResultScreen, RankingScreen },
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
		  if (routeName === 'Home') {
			return (
			  <Text>sadasdasd</Text>
			);
		  } else {
			return (
				<Text>alap</Text>
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
