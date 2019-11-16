import React, { Component } from "react";
import { View, StatusBar, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { Body, Button, Header, Icon, Left, Title, Thumbnail } from "native-base";
import TextInput from "./TextInput";
import { connect } from "react-redux";
import * as firebase from 'firebase';
import { getCurrentPos } from "./util/LocationUtil"

interface PropsConnectedState {
	heroe: object;
}

interface PropsConnectedDispatcher {
	setHeroe: (payload: object) => void;
}
interface Props extends PropsConnectedState, PropsConnectedDispatcher {
  headerText: string;
  showBackButton?: boolean;
  leftButtonPress?: () => void;
}

class AppHeader extends Component<Props> {


  activeHandler = async () => {
    const coordinate = await getCurrentPos().catch(e=>{ return {latitude: 46.2916805, longitude: 25.2881355}  })
    const hoeroeId = this.props.heroe.id;
    const help = {
      hoeroeId: hoeroeId,
      coordinate,
      type: "heroe"
    }
    const map = firebase.database().ref().child('map');
    map.push(help);
  }

  render() {
    return (
      <View style={styles.androidMargin}>
        <Header style={styles.headerBackground}>
          <StatusBar barStyle="light-content" />
          {!this.props.searchBar &&
          <Left>
            {this.props.showBackButton && (
              <Button transparent onPress={this.props.leftButtonPress}>
                <Icon style={styles.backButtonIcon} name="arrow-back" />
              </Button>
            )}
          </Left>}
          <Body style={{ flexDirection: "row" }}>
            {!this.props.searchBar ?
              <Title style={styles.title}>{this.props.headerText}</Title> : 
              <TextInput
              itemStyle={{  height: 40, borderRadius: 10, borderWidth: 1, width: "85%"}}
              rounded 
              placeholder={"Start searching"}
              name="keyword"
              label=''
              onChange={()=>{}} 
              hideLabel
              startAdornment={<Icon active name='search' style={{ color: "lightgray", fontSize: 25, elevation: 5}}/>}
              />
            }
            {this.props.searchBar &&
              <TouchableOpacity>
                <Thumbnail
                  style={{ marginLeft: 4 ,width: 40, height: 40, borderRadius: 40 / 2, borderColor: "#F73D10", borderWidth: 2 }}
                  source={{ uri: "https://icon-library.net/images/avatar-icon-png/avatar-icon-png-10.jpg" }} />
              </TouchableOpacity>
            }
            <Button onPress={() => this.activeHandler()}>
                <Icon style={styles.backButtonIcon} name="arrow-back" />
              </Button>
          </Body>
        </Header>
      </View>
    );
  }
}

const mapStateToProps = ({
	heroe
}: {
	heroe: HeroeState;
}): PropsConnectedState => {
	return {
		heroe: heroe
	};
};


const mapDispatchToProps = (
	dispatch: Dispatch<Action<any>>
): PropsConnectedDispatcher => {
	return {
		setHeroe: (payload) => {
			return dispatch(Actions.setHeroe(payload));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppHeader as React.ComponentClass<Props>);

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
