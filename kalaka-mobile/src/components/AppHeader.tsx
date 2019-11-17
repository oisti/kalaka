import React, { Component } from "react";
import { View, StatusBar, StyleSheet, Platform, TouchableOpacity, Modal } from "react-native";
import { Body, Button, Header, Icon, Left, Title, Thumbnail, Drawer, Text } from "native-base";
import TextInput from "./TextInput";
import ProfileForm from "./ProfileForm";

interface Props {
  headerText: string;
  showBackButton?: boolean;
  leftButtonPress?: () => void;
}


export default class AppHeader extends Component<Props> {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }


  activeHandler = async () => {
    const coordinate = await getCurrentPos().catch(e=>{ return {latitude: 46.2916805, longitude: 25.2881355}  })
    const hoeroeId = this.props.heroe.id;
    const help = {
      hoeroeId: hoeroeId,
      coordinate,
      type: "heroe"
    }
    //const map = firebase.database().ref().child('map');
   // map.push(help);
  }


  render() {
    return (
      <View style={styles.androidMargin}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}>
            <ProfileForm setModalVisible={()=>{this.setModalVisible(false)}}/>
        </Modal>
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
            <TouchableOpacity onPress={()=>{this.setModalVisible(true)}}>
              <Thumbnail
                style={{ width: 40, height: 40, borderRadius: 40 / 2, borderColor: "#F73D10", borderWidth: 2 }}
                source={{ uri: "https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/920773_461458770604601_404091393_o.jpg?_nc_cat=111&_nc_oc=AQn-IQH8C6G_terg_wc_PFHW1oqxzLUVC-UK0mh9zUT4Snsa_6xgRqRfmo1-DDiZfBo&_nc_ht=scontent-otp1-1.xx&oh=77a0881dc7d1195cca71ce30701efe67&oe=5E57181D" }} />
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
