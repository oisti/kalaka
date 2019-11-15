import { AppHeader } from "components";
import { Content, Container, Grid, Row, Col, Text, Thumbnail } from "native-base";
import { CounterState } from "reducers/states";
import React from "react";
import { connect } from "react-redux";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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
          headerText={"Rangsor"}
          leftButtonPress={this.onLeftButtonPress}
        />

        <Content padder>

          <Grid>
            {list.map((item, index) => {
              return (
                <Row key={index} style={{ borderColor: "grey", borderWidth: 1, borderRadius: 5, marginBottom: 10, elevation: 2 }}>
                  <Col>
                    <TouchableOpacity>
                      <Row>
                        <Col size={3}>
                          <Row>
                            <Col alignItems="center" justifyContent="center">
                              <Row style={{ padding: 4 }} alignItems="center" justifyContent="center">
                                <Thumbnail
                                  source={{ uri: index % 2 === 0 ? "https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg" : "https://icon-library.net/images/avatar-icon-png/avatar-icon-png-10.jpg" }} />
                              </Row>
                              <Row alignItems="center" justifyContent="center">
                                <Text style={{ padding: 4, color: "grey" }}>
                                  {item.name}
                                </Text>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={4} alignItems="center" justifyContent="center">
                          <Row alignItems="center" justifyContent="center">
                            <Col style={{flexDirection: "row", paddingTop: 8}}>
                              <MaterialCommunityIcons name="heart-pulse" size={25} color="#98002E"/>
                              <Text style={{ padding: 4, color: "grey" }}>
                                {index+1}
                              </Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Text style={{fontSize: 12}}>
                                {"Segített: " + (index * 3)}
                              </Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Text style={{fontSize: 12}}>
                                {"Isten fizesse: " + (index * 2)}
                              </Text>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </TouchableOpacity>
                  </Col>
                </Row>)
            })}
          </Grid>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({
  counter
}: {
  counter: CounterState;
}): PropsConnectedState => {
  return {
    value: counter.value
  };
};

export default connect(
  mapStateToProps,
  null
)(RankingScreen as React.ComponentClass<Props>);
