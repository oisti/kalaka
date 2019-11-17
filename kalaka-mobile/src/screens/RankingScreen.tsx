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
    const heroes = [
      { name: 'Oláh István', points: '1', picture: 'https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/s960x960/331655_10151309602704045_2142074936_o.jpg?_nc_cat=110&_nc_oc=AQn6NcQ3LTbF7v4tsNJPMfR6-ZFJow8QRWFDWlh1K9tlJ-eHvGHVqnKIuicPKLMhUVE&_nc_ht=scontent-otp1-1.xx&oh=cdd8531082a1977248e11f0006ea84a8&oe=5E453D52' },
      { name: 'Oláh István', points: '2', picture: 'https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/s960x960/331655_10151309602704045_2142074936_o.jpg?_nc_cat=110&_nc_oc=AQn6NcQ3LTbF7v4tsNJPMfR6-ZFJow8QRWFDWlh1K9tlJ-eHvGHVqnKIuicPKLMhUVE&_nc_ht=scontent-otp1-1.xx&oh=cdd8531082a1977248e11f0006ea84a8&oe=5E453D52' },
      { name: 'Oláh István', points: '3', picture: 'https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/s960x960/331655_10151309602704045_2142074936_o.jpg?_nc_cat=110&_nc_oc=AQn6NcQ3LTbF7v4tsNJPMfR6-ZFJow8QRWFDWlh1K9tlJ-eHvGHVqnKIuicPKLMhUVE&_nc_ht=scontent-otp1-1.xx&oh=cdd8531082a1977248e11f0006ea84a8&oe=5E453D52' },
      { name: 'Oláh István', points: '4', picture: 'https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/s960x960/331655_10151309602704045_2142074936_o.jpg?_nc_cat=110&_nc_oc=AQn6NcQ3LTbF7v4tsNJPMfR6-ZFJow8QRWFDWlh1K9tlJ-eHvGHVqnKIuicPKLMhUVE&_nc_ht=scontent-otp1-1.xx&oh=cdd8531082a1977248e11f0006ea84a8&oe=5E453D52' },
      { name: 'Oláh István', points: '5', picture: 'https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/s960x960/331655_10151309602704045_2142074936_o.jpg?_nc_cat=110&_nc_oc=AQn6NcQ3LTbF7v4tsNJPMfR6-ZFJow8QRWFDWlh1K9tlJ-eHvGHVqnKIuicPKLMhUVE&_nc_ht=scontent-otp1-1.xx&oh=cdd8531082a1977248e11f0006ea84a8&oe=5E453D52' },
      { name: 'Oláh István', points: '6', picture: 'https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/s960x960/331655_10151309602704045_2142074936_o.jpg?_nc_cat=110&_nc_oc=AQn6NcQ3LTbF7v4tsNJPMfR6-ZFJow8QRWFDWlh1K9tlJ-eHvGHVqnKIuicPKLMhUVE&_nc_ht=scontent-otp1-1.xx&oh=cdd8531082a1977248e11f0006ea84a8&oe=5E453D52' },
      { name: 'Oláh István', points: '7', picture: 'https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/s960x960/331655_10151309602704045_2142074936_o.jpg?_nc_cat=110&_nc_oc=AQn6NcQ3LTbF7v4tsNJPMfR6-ZFJow8QRWFDWlh1K9tlJ-eHvGHVqnKIuicPKLMhUVE&_nc_ht=scontent-otp1-1.xx&oh=cdd8531082a1977248e11f0006ea84a8&oe=5E453D52' },
      { name: 'Oláh István', points: '8', picture: 'https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/s960x960/331655_10151309602704045_2142074936_o.jpg?_nc_cat=110&_nc_oc=AQn6NcQ3LTbF7v4tsNJPMfR6-ZFJow8QRWFDWlh1K9tlJ-eHvGHVqnKIuicPKLMhUVE&_nc_ht=scontent-otp1-1.xx&oh=cdd8531082a1977248e11f0006ea84a8&oe=5E453D52' },
      { name: 'Oláh István', points: '9', picture: 'https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/s960x960/331655_10151309602704045_2142074936_o.jpg?_nc_cat=110&_nc_oc=AQn6NcQ3LTbF7v4tsNJPMfR6-ZFJow8QRWFDWlh1K9tlJ-eHvGHVqnKIuicPKLMhUVE&_nc_ht=scontent-otp1-1.xx&oh=cdd8531082a1977248e11f0006ea84a8&oe=5E453D52' },

    ]
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
                        source={{ uri: heroes[0].picture }} />
                    </Row>
                    <Row alignItems="center" justifyContent="center">
                      <Text style={{ fontSize: 14, color: "#b21773" }}>
                        {heroes[0].name}
                      </Text>
                    </Row>
                    <Row alignItems="center" justifyContent="center">
                      <Text style={{ fontSize: 12, color: "#696969" }}>
                        {heroes[0].points}
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
                        source={{ uri: heroes[1].picture }} />
                    </Row>
                    <Row alignItems="center" justifyContent="center">
                      <Text style={{ fontSize: 12, color: "#b21773" }}>
                        {heroes[1].name}
                      </Text>
                    </Row>
                    <Row alignItems="center" justifyContent="center">
                      <Text style={{ fontSize: 12, color: "#696969" }}>
                        {heroes[1].points}
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
                        source={{ uri: heroes[2].picture }} />
                    </Row>
                    <Row alignItems="center" justifyContent="center">
                      <Text style={{ fontSize: 12, color: "#b21773" }}>
                        {heroes[2].name}
                      </Text>
                    </Row>
                    <Row alignItems="center" justifyContent="center">
                      <Text style={{ fontSize: 12, color: "#696969" }}>
                        {heroes[2].points}
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
            {heroes.map((item, index) => {
              if(index > 2) { return (
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
                            {index + 1}
                          </Text>
                        </Col>
                        <Col size={1}>
                          <Row>
                            <Col alignItems="center" justifyContent="center">
                              <Row style={{ padding: 4 }} alignItems="center" justifyContent="center">
                                <Thumbnail
                                  style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
                                  source={{ uri: item.picture }} />
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
                                {item.points}
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
                </Row>)}
            })}
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default (RankingScreen as React.ComponentClass<Props>);
