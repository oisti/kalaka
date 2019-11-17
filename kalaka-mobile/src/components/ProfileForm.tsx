import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Switch, Button } from "react-native";
import { Thumbnail, Text, Grid, Row, Col } from "native-base";
import { AntDesign } from "@expo/vector-icons";
export default class AppHeader extends Component<Props> {
    constructor(props){
        super(props);
        
        this.state = {
            availableValue: false,
            visibleOnMapValue: false,
        }
    }
  render() {
    return (
      <View style={{height: 350, marginTop: 20}}>
            <AntDesign name="closecircleo" color="grey" size={15} style={{position: "absolute", right: 10}} onPress={()=>{this.props.setModalVisible()}}/>
            <Grid style={{marginTop: 20}}>
                <Row>
                    <Col alignItems="center" justifyContent="center" style={{marginTop: 25}}>
                        <Row alignItems="center" justifyContent="center">
                            <Thumbnail
                                style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
                                source={{ uri: "https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/920773_461458770604601_404091393_o.jpg?_nc_cat=111&_nc_oc=AQn-IQH8C6G_terg_wc_PFHW1oqxzLUVC-UK0mh9zUT4Snsa_6xgRqRfmo1-DDiZfBo&_nc_ht=scontent-otp1-1.xx&oh=77a0881dc7d1195cca71ce30701efe67&oe=5E57181D" }} />
                        </Row>
                        <Row alignItems="center" justifyContent="center">
                            <Text style={{marginBottom: -30}}>
                                {"Gábor Ervin"}
                            </Text>
                        </Row>
                    </Col>
                    <Col style={{height: 100, marginTop: 20}} alignItems="center" justifyContent="center">
                        <Row  justifyContent="center">
                            <Col size={3}  justifyContent="center">
                                <Text style={{ fontSize: 10 }}>
                                    {"Elérhető"}
                                </Text>
                            </Col>
                            <Col size={1}  justifyContent="center">
                                <Switch value={this.state.availableValue} onValueChange={(value)=>{this.setState({availableValue: value})}}/>
                            </Col>
                        </Row>
                        <Row  justifyContent="center">
                            <Col size={3}  justifyContent="center">
                                <Text style={{ fontSize: 10 }}>
                                    {"Térképen láthatóság"}
                                </Text>
                            </Col>
                            <Col size={1}  justifyContent="center">
                                <Switch  value={this.state.visibleOnMapValue} onValueChange={(value)=>{this.setState({visibleOnMapValue: value})}}/>
                            </Col>
                        </Row>
                        <Row  justifyContent="center">
                            <Col  justifyContent="center">
                                <Text style={{ fontSize: 10 }}>
                                    {"24k elismerés"}
                                </Text>
                            </Col>
                        </Row>
                        <Row  justifyContent="center">
                            <Col  justifyContent="center">
                                <Text style={{ fontSize: 10 }}>
                                    {"14 követő"}
                                </Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Text style={{ fontSize: 10, marginLeft: 50 }}>
                        {"Írj magadról egy rövid bemutatkozót"}
                    </Text>
                </Row>
                <Button
                    style={{width: "80%", marginTop: -150}}
                        title="Profil szerkesztése"
                        color="rgb(161, 161, 161)"

                    />
            </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
