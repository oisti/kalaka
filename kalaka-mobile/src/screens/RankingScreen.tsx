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
      {name:'Zobor Emőke', points:'250', picture:'https://icon-library.net/images/avatar-icon-png/avatar-icon-png-10.jpg'},
      {name:'Sípos Albert', points:'246', picture:'https://img.pngio.com/avatar-user-computer-icons-software-deve-254409-png-images-pngio-avatarpng-900_540.png'},
      {name:'Bodnár Zalán', points:'242', picture:'https://mpng.pngfly.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg'},
      {name:'Lakatos Éva', points:'238', picture:'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png'},
      {name:'Fehér Dominik', points:'237', picture:'https://cdn.imgbin.com/24/16/4/imgbin-avatar-icon-fashion-men-avatar-man-illustration-yrsijCsUZh6ini7fz4sSSGFL0.jpg'},
      {name:'Barna Patrik', points:'230', picture:'https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg'},
      {name:'Máté Benedek', points:'226', picture:'https://img2.freepng.es/20180319/pde/kisspng-computer-icons-icon-design-avatar-flat-face-icon-5ab06e33bee962.122118601521511987782.jpg'},
      {name:'Molnár Zsombor', points:'222', picture:'https://asia.ifoam.bio/wp-content/uploads/2018/12/avatar__181424.png'},
      {name:'Soós Antal', points:'150', picture:'https://papierknippen.nl/wp-content/uploads/2017/03/photo.png'},
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
