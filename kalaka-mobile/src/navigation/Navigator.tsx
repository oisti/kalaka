import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ClickerScreen, ResultScreen, RankingScreen } from "screens";

// https://github.com/janhesters/ReactNative-ComplexNavigation/blob/master/app/navigation/Navigator.tsx
const RootStack = createStackNavigator(
	{ ClickerScreen, ResultScreen, RankingScreen },
	{
		initialRouteName: "ClickerScreen",
		headerMode: "none"
	}
);

const Navigator = createAppContainer(RootStack);

export default Navigator;
