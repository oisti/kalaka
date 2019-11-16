import { AppHeader } from "components";
import { Content, Container, Grid, Row, Col, Text, Thumbnail } from "native-base";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface PropsConnectedState {
    value: number;
}

interface Props extends PropsConnectedState {
    navigation: { goBack: () => void };
}

class EventsScreen extends React.Component<Props> {
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

                <Content padder style={{backgroundColor: "#FFFFFF"}}>

                    <Grid>
                        {list.map((item, index) => {
                            return (
                                <Row key={index} 
                                style={{   borderWidth: 1,
                                    borderRadius: 2,
                                    borderColor: '#ddd',
                                    borderBottomWidth: 0,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 2,
                                    elevation: 1,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    overflow: "hidden",
                                    marginTop: 10 }}>
                                    <Col>
                                        <Row>
                                            <Image
                                                style={{ width: "100%", height: 120 }}
                                                source={{ uri: index%2 
                                                ? "https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/12/16131147/future-phone-mobile-live-events-technology-trends.png" 
                                                : "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg" }} />
                                        </Row>
                                        <Row>
                                            <Text style={{ paddingLeft: 8, paddingTop: 8, fontSize: 11, color: "#f73D10" }}>
                                                {"MOST TÖRTÉNIK"}
                                            </Text>
                                        </Row>
                                        <Row>
                                            <Text style={{ paddingLeft: 8, color: "black", fontWeight: "bold", fontSize: 11 }}>
                                                {"The House Hackathon"}
                                            </Text>
                                        </Row>
                                        <Row>
                                            <Text style={{ paddingLeft: 8, fontSize: 10, color: "#666666" }}>
                                                {"Magtár - Csíkszereda"}
                                            </Text>
                                        </Row>
                                        <Row style={{paddingLeft: 8, paddingTop: 4, flexDirection: "row"}}>
                                        <Image
                                                style={{ width: 15, height: 15 }}
                                                source={{ uri: "https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"}} />
                                        <Text style={{fontSize:10, marginLeft: 3, color: "#666666" }}>
                                            {"Ervin és további 14 Hős ott lesz"}
                                        </Text> 
                                        </Row>
                                        <Row style={{borderBottomColor: "#666666", borderBottomWidth: 1, margin: 8, marginBottom: 4}}></Row>
                                        <Row style={{ padding: 8, paddingTop: 0 }}>
                                            <Col alignItems="center" justifyContent="center">
                                                <TouchableOpacity>
                                                    <Row alignItems="center" justifyContent="center">  
                                                    <Ionicons name="ios-star-outline" size={20} color="#666666" />
                                                    <Text style={{fontSize: 9, color: "#666666", marginLeft: 4}}>
                                                        {"Érdekel"}
                                                    </Text>
                                                    </Row>
                                                </TouchableOpacity>
                                            </Col>
                                            <Col alignItems="center" justifyContent="center">
                                                <TouchableOpacity>
                                                <Row alignItems="center" justifyContent="center">  
                                                    <AntDesign name="sharealt" size={20} color="#666666" />
                                                    <Text style={{fontSize: 9, color: "#666666", marginLeft: 4}}>
                                                        {"Megosztás"}
                                                    </Text>
                                                </Row>
                                                </TouchableOpacity>
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

export default (EventsScreen as React.ComponentClass<Props>);
