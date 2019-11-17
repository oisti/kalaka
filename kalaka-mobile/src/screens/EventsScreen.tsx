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
            {name:'The House Hackathon', time:'MOST TÖRTÉNIK', place: 'Magtár - Csíkszereda', going:'István és további 14 Hős ott lesz', latitude:46.3625103, longitude:25.7914388, picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/74441083_986849398320396_3747914902031826944_o.jpg?_nc_cat=109&_nc_oc=AQnQH7Rzh-zv_6vlwtPDHnT3gPN0zhxJH-MgLpPFIu3lw4nHhwiwsfkDF7yFbaltb84&_nc_ht=scontent-otp1-1.xx&oh=3b07a8cb16a09991f38147db3725be0f&oe=5E4B3DD9'},
            {name:'Filmtettfeszt', time:'OCT 3', place: 'Csíki Mozi', going:'10 Hős ott lesz', latitude:46.3601162, longitude:25.8048575, picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/s960x960/70186671_2545331012364975_8233144795363540992_o.jpg?_nc_cat=100&_nc_oc=AQk8aDpWzgp9Hs4WtcC7oDg4URAi3NbjkprivevztTkw2N0tLGGPIxV7-K_8iCwrLmU&_nc_ht=scontent-otp1-1.xx&oh=7085b0ece17604c8e64ce482eaf56077&oe=5E527189'},
            {name:'Csak a lényeg! ', time:'OCT 22', place: 'Hunguest Hotel Fenyo', going:'Mátyás és további 14 Hős ott lesz', latitude:46.3576849, longitude:25.8002691, picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-0/p180x540/71931051_132514544810360_923725088866435072_o.jpg?_nc_cat=102&_nc_oc=AQl5t_3K8STVCpqQGw2nlEs6y0eW2n3FaL7saD3sh2xqzKEVoIvKPlbJbTY3-gUATwE&_nc_ht=scontent-otp1-1.xx&oh=89191a48825e489f07d72a200e6178e0&oe=5E521F7D'},
            {name:'Tégy jót másokkal', time:'NOV 18', place: 'Csikszereda', going:'Ágoston és további 14 Hős ott lesz', latitude:46.358891, longitude:25.8017007, picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/74209813_133986418006693_2413209971773669376_n.jpg?_nc_cat=111&_nc_oc=AQmQQcr6oAR-yNVPoxH9MqUesfW_63GAbKZ1PWJbi15UPUoG01C4AH6ELOsNWq8FdaE&_nc_ht=scontent-otp1-1.xx&oh=927fd2c9107adfea799397a14448bcef&oe=5E46CD04'},
            {name:'Edvin Marton: The Rock Symphony - Sepsi Aréna', time:'NOV 30', place: 'Sepsi Aréna', going:'21 Hős ott lesz', latitude:45.8778702, longitude:25.7994279, picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/72487308_1431669476983637_4315064826662486016_o.jpg?_nc_cat=106&_nc_oc=AQnsvuICcRwB_5Nuv2VEJZfkmJnhHX3dZWIs7y7-i4Wg-77OVZPT6gu5JvhpsrQV4Mo&_nc_ht=scontent-otp1-1.xx&oh=4b85b980ad04d8b180af60ea09cdc66b&oe=5E43E090'},        ];
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
                                    elevation: 2,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    overflow: "hidden",
                                    marginTop: 10 }}>
                                    <Col>
                                        <Row>
                                            <Image
                                                style={{ width: "100%", height: 150 }}
                                                source={{ uri: item.picture }} />
                                        </Row>
                                        <Row>
                                            <Text style={{ paddingLeft: 8, paddingTop: 8, fontSize: 11, color: "#f73D10" }}>
                                                 {item.time}
                                            </Text>
                                        </Row>
                                        <Row>
                                            <Text style={{ paddingLeft: 8, color: "black", fontWeight: "bold", fontSize: 11 }}>
                                                {item.name}
                                            </Text>
                                        </Row>
                                        <Row>
                                            <Text style={{ paddingLeft: 8, fontSize: 10, color: "#666666" }}>
                                                {item.place}
                                            </Text>
                                        </Row>
                                        <Row style={{paddingLeft: 8, paddingTop: 4, flexDirection: "row"}}>
                                        <Image
                                                style={{ width: 15, height: 15 }}
                                                source={{ uri: "https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"}} />
                                        <Text style={{fontSize:10, marginLeft: 3, color: "#666666" }}>
                                            {item.going}
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
