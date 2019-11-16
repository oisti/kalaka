import { AppLoading } from "expo";
import * as Font from 'expo-font';
import React, { Component } from "react";
import { Root, StyleProvider } from "native-base";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor.js";
import Navigator from "./navigation/Navigator";
import i18n from "i18n-js";
import * as Localization from 'expo-localization';
import strings from "./languages/";
import {FirebaseKeys} from './constants/ApiKeys';
import SmartUtil from './components/SmartUtil';

import * as firebase from 'firebase';

i18n.fallbacks = true;
i18n.translations = strings;
i18n.locale = Localization.locale;

interface State {
  isReady: boolean;
}

export default class RootComponent extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      isReady: false
    };

    if (!firebase.apps.length){
			firebase.initializeApp(FirebaseKeys);
		}
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("../node_modules/native-base/Fonts/Ionicons.ttf"),
      Entypo: require("../node_modules/native-base/Fonts/Entypo.ttf"),
      Feather: require("../node_modules/native-base/Fonts/Feather.ttf"),
      FontAwesome: require("../node_modules/native-base/Fonts/FontAwesome.ttf"),
      Octicons: require("../node_modules/native-base/Fonts/Octicons.ttf")
    });

    this.setState({ isReady: true });
  }

  render() {
    return !this.state.isReady ? (
      <AppLoading />
    ) : (
      <StyleProvider style={getTheme(variables)}>
        <Root>
          <Navigator />
          <SmartUtil />
        </Root>
      </StyleProvider>
    );
  }
}
