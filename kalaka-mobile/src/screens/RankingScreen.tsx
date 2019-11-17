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
      {name:'Miklós Imre', points:'23255', picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-1/c0.0.960.960a/p960x960/54514937_2193388594055219_4808598221565722624_o.jpg?_nc_cat=101&_nc_oc=AQm72hM9En1me0AM0l6wdsjWsQW6XF7_6eNRnuAnbT45u5El_AEAX2nOH-BPSzhEK0c&_nc_ht=scontent-otp1-1.xx&oh=c7564b0c8259af594fd9db78f81abd84&oe=5E553480'},
      {name:'Oláh István', points:'12863', picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/s960x960/331655_10151309602704045_2142074936_o.jpg?_nc_cat=110&_nc_oc=AQn6NcQ3LTbF7v4tsNJPMfR6-ZFJow8QRWFDWlh1K9tlJ-eHvGHVqnKIuicPKLMhUVE&_nc_ht=scontent-otp1-1.xx&oh=cdd8531082a1977248e11f0006ea84a8&oe=5E453D52'},
      {name:'Zobor Emőke', points:'5842', picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/49239312_2107929095920181_3295575741055369216_n.jpg?_nc_cat=100&_nc_oc=AQnmE1uxLRP5G0Dz4prPsAzO0Fb9NFEr0D2uRDGOrQvZ2WXHxdfjnS8T3IDH-7as2n8&_nc_ht=scontent-otp1-1.xx&oh=cde7beb54ef3a7ccd1d18f0e171d30fe&oe=5E5A5F64'},
      {name:'Sípos Albert', points:'985', picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/10599553_586643431439554_1351395491206439448_n.jpg?_nc_cat=111&_nc_oc=AQmJT-OKmJtt5qlsh1iWmsuZ_7W3cNLriY4eYGUfe6alHA-bAhqPsFsBgVaFy26eqRc&_nc_ht=scontent-otp1-1.xx&oh=15389c734613bdbb948c542d5aedaed3&oe=5E485FC5'},
      {name:'Bodnár Zalán', points:'854', picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/57161037_331426277573504_5042907357785358336_o.jpg?_nc_cat=101&_nc_oc=AQm_lXGwzJMIq38upEZ2vCMwwaAF03qOFi6Em_mI4CrpMR5FGxI9U2go3g-ErGr6PO4&_nc_ht=scontent-otp1-1.xx&oh=33d2d9ee3daa95a0aa84e249ec7dc547&oe=5E514127'},
      {name:'Lakatos Éva', points:'655', picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-1/c6.0.160.160a/p160x160/20952926_1355894534529911_153644086909908440_n.jpg?_nc_cat=109&_nc_oc=AQnEu8huojI8_3zM6L0PvLsjusoudLNQ9L7TmGVru45yB2gxsgLEa-TwU6hdtisYDBY&_nc_ht=scontent-otp1-1.xx&oh=ef772dfb4934bdfce8a353d46cd8e724&oe=5E876F34'},
      {name:'Fehér Dominik', points:'358', picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-1/p160x160/68733654_1314529945392031_958989888512851968_n.jpg?_nc_cat=102&_nc_oc=AQnrRfT_xvAFYkEoKSssnXzVqCqJKZLGDLCwylWLZHg2cEOZPiajcwkEMbSRsQpOHPI&_nc_ht=scontent-otp1-1.xx&oh=06059fed8804c3665255f55a13a3ac41&oe=5E43DECA'},
      {name:'Barna Patrik', points:'356', picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-1/c0.30.160.160a/p160x160/69900104_2428154830603079_8350856358454624256_o.jpg?_nc_cat=106&_nc_oc=AQmzRAuaG-lTJbDGu95SoDqJf-MMwafTGITK7ioppaM-wBcuiDzGrdKX_xm3GVKVW6g&_nc_ht=scontent-otp1-1.xx&oh=d582220e3d642699d5bb59b5aaeddf8b&oe=5E4952A8'},
      {name:'Máté Benedek', points:'255', picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/69814515_2432235030196918_1521424110851194880_o.jpg?_nc_cat=104&_nc_oc=AQmoJRCuYA9YJMWNj1YgXozieSeYBNPMlfTv8LcSUp2pChgseFUZ6j57q9Xfr7iA9dE&_nc_ht=scontent-otp1-1.xx&oh=5e268912fe8811752e0fc07eb6542861&oe=5E5095FF'},
      {name:'Molnár Zsombor', points:'201', picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-1/p160x160/49490958_2378330838877589_5079748242925682688_n.jpg?_nc_cat=100&_nc_oc=AQnVfYHCKfdj-4DPDUW4j9tEXDdsAkMjlhkHdSNPmyDCT5x01JEMHmvl5kojdkFqOtQ&_nc_ht=scontent-otp1-1.xx&oh=0c24a2d7ecd34bcd9a26709982ef2344&oe=5E4FEB71'},
      {name:'Soós Antal', points:'150', picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/40790348_1960386010690274_2455897969556193280_o.jpg?_nc_cat=110&_nc_oc=AQnkQLye1ThXdJotFZXFhOviXpYNTONnxE6gF_TUtJ1Nc9pINVUEHtTPMCev4v1mNJU&_nc_ht=scontent-otp1-1.xx&oh=021c230fa54b93e53c3c2ad551eab155&oe=5E8B58E1'},
      {name:'Barna Edina', points:'125', picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-1/p160x160/69073086_2291729571157893_4781973118002397184_n.jpg?_nc_cat=104&_nc_oc=AQlMcoi2DayUPgSzHX3Y9nOukJWEHEglcqFD_usTspbqzlUOLadcEPihXk9WV_-ZM5s&_nc_ht=scontent-otp1-1.xx&oh=d6f7ff0ca854d5c05b3ebde4f2e89395&oe=5E482A05'},
      {name:'Pataki Bernadett', points:'100', picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-1/p160x160/24302092_1441968032518432_7643482720446761190_o.jpg?_nc_cat=109&_nc_oc=AQnJ6YdbQfcxfn3O3aNOTAFkHxvWMwdHrTV1cwT-GgkOT17nJ04PkdvwK2xbEaQZX9c&_nc_ht=scontent-otp1-1.xx&oh=d4944c35543cd30bc478f30f0783a7cd&oe=5E889C6E'},
      {name:'Novák Izabella', points:'85', picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-1/p160x160/72292231_2535186403236862_4192207746721906688_n.jpg?_nc_cat=107&_nc_oc=AQk3rHSclh32LQOAXM9XR3k0gTqYBo9HeCzgsaYrYmLgyqS8jEADovyegVTGy9E3Wl8&_nc_ht=scontent-otp1-1.xx&oh=78a7de8039ed9ac1d18f0eca82affa99&oe=5E8761F9'},
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
