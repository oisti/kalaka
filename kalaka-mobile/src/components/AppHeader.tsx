import React, { Component } from "react";
import { View, StatusBar, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { Body, Button, Header, Icon, Left, Title, Thumbnail } from "native-base";
import TextInput from "./TextInput";

interface Props {
  headerText: string;
  showBackButton?: boolean;
  leftButtonPress?: () => void;
}

export default class AppHeader extends Component<Props> {

  render() {
    return (
      <View style={styles.androidMargin}>
        <Header style={styles.headerBackground}>
          <StatusBar barStyle="light-content" />
          <Body style={{ flexDirection: "row" }}>
              <TextInput
              itemStyle={{ height: 40, borderRadius: 10, borderWidth: 1, width: "85%" }}
              rounded
              placeholder={"Start searching"}
              name="keyword"
              label=''
              onChange={() => { }}
              hideLabel
              startAdornment={<Icon active name='search' style={{ color: "lightgray", fontSize: 25, elevation: 5 }} />}
            />
            <TouchableOpacity>
              <Thumbnail
                style={{ width: 40, height: 40, borderRadius: 40 / 2, borderColor: "#F73D10", borderWidth: 2 }}
                source={{ uri: "https://icon-library.net/images/avatar-icon-png/avatar-icon-png-10.jpg" }} />
            </TouchableOpacity>
          </Body>
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: "#FFFFFF",
    borderBottomColor: "lightgray",
    borderBottomWidth: 2,
  },
  androidMargin: {
    ...Platform.select({
      android: {
        marginTop: 24
      }
    })
  },
  title: {
    color: "#fff",
    width: "100%"
  },
  backButtonIcon: {
    color: "#fff"
  }
});
