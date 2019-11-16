import { AppHeader } from "components";
import { Content, Container, Grid, Row, Col, Text, Thumbnail } from "native-base";
import React from "react";
import { MaterialCommunityIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

interface PropsConnectedState {
  value: number;
}

interface Props extends PropsConnectedState {
  navigation: { goBack: () => void };
}

class RankingScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  onLeftButtonPress = () => {
    this.props.navigation.goBack();
  };

  render(): JSX.Element {
    const list = [
      { name: "First Name" },
      { name: "Second Name" },
      { name: "First Name" },
      { name: "Second Name" },
      { name: "First Name" },
      { name: "Second Name" },
      { name: "First Name" },
      { name: "Second Name" }];
    return (
      <Container>
        <AppHeader
          showBackButton={true}
          searchBar={true}
          leftButtonPress={this.onLeftButtonPress}
        />

        <Content padder style={{ backgroundColor: "#FFFFFF" }}>

          <Grid>
            <Row>
              <Col>
                <Row style={{  borderRadius: 2,
                                    borderColor: '#ddd',
                                    borderBottomWidth: 0,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 2,
                                    elevation: 2,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    overflow: "hidden",
                                    marginTop: 10 }}>
                  <Col>
                    <Row alignItems="center" justifyContent="center">
                      <Text style={{ fontSize: 16, color: "#b21773", margin: 8 }}>
                        {"1"}
                      </Text>
                    </Row>
                    <Row alignItems="center" justifyContent="center">
                      <Thumbnail
                        style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                        source={{ uri: "https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg" }} />
                    </Row>
                    <Row alignItems="center" justifyContent="center">
                      <Text style={{ fontSize: 14, color: "#b21773" }}>
                        {"Felhasználó Neve"}
                      </Text>
                    </Row>
                    <Row alignItems="center" justifyContent="center">
                      <Text style={{ fontSize: 12, color: "#696969" }}>
                        {"123456"}
                      </Text>
                    </Row>
                    <Row>
                      <Col alignItems="center" justifyContent="center">
                        <TouchableOpacity>
                          <FontAwesome name="heartbeat" size={15} style={{ margin: 16 }}  color="#696969"/>
                        </TouchableOpacity>
                      </Col>
                      <Col alignItems="center" justifyContent="center">
                        <TouchableOpacity>
                          <AntDesign name="message1" size={15} style={{ margin: 16 }}  color="#696969"/>
                        </TouchableOpacity>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row style={{  borderRadius: 2,
                                    borderColor: '#ddd',
                                    borderBottomWidth: 0,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 2,
                                    elevation: 2,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    overflow: "hidden",
                                    marginTop: 10 }}>
                  <Col size={2}>
                    <Row alignItems="center" justifyContent="center">
                      <Text style={{ fontSize: 16, color: "#b21773", margin: 8 }}>
                        {"2"}
                      </Text>
                      <Thumbnail
                        style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
                        source={{ uri: "https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg" }} />
                    </Row>
                    <Row alignItems="center" justifyContent="center">
                      <Text style={{ fontSize: 12, color: "#b21773" }}>
                        {"Felhasználó Neve"}
                      </Text>
                    </Row>
                    <Row alignItems="center" justifyContent="center">
                      <Text style={{ fontSize: 12, color: "#696969" }}>
                        {"123456"}
                      </Text>
                    </Row>
                  </Col>
                  <Col size={1}>
                    <Row alignItems="center" justifyContent="center">
                      <TouchableOpacity>
                        <FontAwesome name="heartbeat" size={15} style={{ margin: 16 }} color="#696969" />
                      </TouchableOpacity>
                    </Row>
                    <Row alignItems="center" justifyContent="center">
                      <TouchableOpacity>
                        <AntDesign name="message1" size={15} style={{ margin: 8 }} color="#696969" />
                      </TouchableOpacity>
                    </Row>
                  </Col>
                </Row>
                <Row style={{  borderRadius: 2,
                                    borderColor: '#ddd',
                                    borderBottomWidth: 0,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 2,
                                    elevation: 2,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    overflow: "hidden",
                                    marginTop: 10 }}>
                  <Col size={2}>
                    <Row alignItems="center" justifyContent="center">
                      <Text style={{ fontSize: 16, color: "#b21773", margin: 8 }}>
                        {"3"}
                      </Text>
                      <Thumbnail
                        style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
                        source={{ uri: "https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg" }} />
                    </Row>
                    <Row alignItems="center" justifyContent="center">
                      <Text style={{ fontSize: 12, color: "#b21773" }}>
                        {"Felhasználó Neve"}
                      </Text>
                    </Row>
                    <Row alignItems="center" justifyContent="center">
                      <Text style={{ fontSize: 12, color: "#696969" }}>
                        {"123456"}
                      </Text>
                    </Row>
                  </Col>
                  <Col size={1}>
                    <Row alignItems="center" justifyContent="center">
                      <TouchableOpacity>
                        <FontAwesome name="heartbeat" size={15} style={{ margin: 16 }} color="#696969" />
                      </TouchableOpacity>
                    </Row>
                    <Row alignItems="center" justifyContent="center">
                      <TouchableOpacity>
                        <AntDesign name="message1" size={15} style={{ margin: 8 }} color="#696969" />
                      </TouchableOpacity>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            {list.map((item, index) => {
              return (
                <Row key={index} style={{  borderRadius: 2,
                                    borderColor: '#ddd',
                                    borderBottomWidth: 0,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 2,
                                    elevation: 2,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    overflow: "hidden",
                                    marginTop: 10 }}>
                  <Col>
                      <Row>
                        <Col size={1} alignItems="center" justifyContent="center">
                          <Text style={{ fontSize: 16, color: "#b21773", margin: 8 }}>
                            {index + 4}
                          </Text>
                        </Col>
                        <Col size={1}>
                          <Row>
                            <Col alignItems="center" justifyContent="center">
                              <Row style={{ padding: 4 }} alignItems="center" justifyContent="center">
                                <Thumbnail
                                  style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
                                  source={{ uri: index % 2 === 0 ? "https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg" : "https://icon-library.net/images/avatar-icon-png/avatar-icon-png-10.jpg" }} />
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={2}>
                          <Row>
                            <Col alignItems="center" justifyContent="center">
                              <Text style={{ padding: 4, color: "#7e1161", fontSize: 12 }}>
                                {item.name}
                              </Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={1} alignItems="center" justifyContent="center">
                          <Row>
                            <Col alignItems="center" justifyContent="center">
                              <Text style={{ padding: 4, color: "#696969", fontSize: 10 }}>
                                {123456}
                              </Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={1}>
                          <Row alignItems="center" justifyContent="center">
                            <TouchableOpacity>
                              <FontAwesome name="heartbeat" size={15} style={{ margin: 16 }} color="#696969" />
                            </TouchableOpacity>
                          </Row>
                        </Col>
                        <Col size={1}>
                          <Row alignItems="center" justifyContent="center">
                            <TouchableOpacity>
                              <AntDesign name="message1" size={15} style={{ margin: 8 }} color="#696969" />
                            </TouchableOpacity>
                          </Row>
                        </Col>
                      </Row>
                  </Col>
                </Row>)
            })}
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default (RankingScreen as React.ComponentClass<Props>);
