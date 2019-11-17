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
            {name:'The House Hackathon', time:'MOST TÖRTÉNIK', place: 'Magtár - Csíkszereda', going:'Mátyás, Ágoston, István és további 53 Hős ott lesz', latitude:46.3625103, longitude:25.7914388, picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/74441083_986849398320396_3747914902031826944_o.jpg?_nc_cat=109&_nc_oc=AQnQH7Rzh-zv_6vlwtPDHnT3gPN0zhxJH-MgLpPFIu3lw4nHhwiwsfkDF7yFbaltb84&_nc_ht=scontent-otp1-1.xx&oh=3b07a8cb16a09991f38147db3725be0f&oe=5E4B3DD9'},
            {name:'Tégy jót másokkal', time:'November 18', place: 'Csikszereda', going:'Ágoston és további 14 Hős ott lesz', latitude:46.358891, longitude:25.8017007, picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/74209813_133986418006693_2413209971773669376_n.jpg?_nc_cat=111&_nc_oc=AQmQQcr6oAR-yNVPoxH9MqUesfW_63GAbKZ1PWJbi15UPUoG01C4AH6ELOsNWq8FdaE&_nc_ht=scontent-otp1-1.xx&oh=927fd2c9107adfea799397a14448bcef&oe=5E46CD04'},
            {name:'Játssz ma! - társasjátékest', time:'November 22', place: 'Szent Imre Ifjúsági Központ', going:'10 Hős ott lesz', latitude:46.3586352, longitude:25.8055, picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-0/p180x540/74159591_1002728790068998_5880216785533272064_o.jpg?_nc_cat=101&_nc_oc=AQm5TiyzLe2pDMGAryhPRZ5760s0CI9YMFo1QXgNOAqeG2mw1gRjGbLgYe7JqiMSzA8&_nc_ht=scontent-otp1-1.xx&oh=5113b944f40581c692222eb40dcefcea&oe=5E502DFC'},
            {name:'Katalin-bál a jótékonyság jegyében', time:'November 23', place: 'Hargita Vendégváró', going:'Mátyás és további 3 Hős ott lesz', latitude:46.3564423, longitude:25.812852, picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/s960x960/74453223_2851232088229791_3088605931395612672_o.jpg?_nc_cat=108&_nc_oc=AQlsDTNx1_qwdjoe92kv5uVXOfa3HXOqby1c2NXP_1kDQq0rs7qVx98i2E2PX0sNKcA&_nc_ht=scontent-otp1-1.xx&oh=eea75e6d9cf6698345b90b7191400684&oe=5E86ABD2'},
            {name:'VR Playhouse', time:'November 30', place: 'VR Friends Petőfi Sándor 37', going:'32 Hős ott lesz', latitude:46.3588295, longitude:25.8055259, picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-0/p180x540/70562769_408812526437585_7772616141070925824_o.jpg?_nc_cat=102&_nc_oc=AQnvrSuYb-SQENW3mLOtDVtvBB_8WRAkJ2SXagleafhWekhWwfM0wg9aFRGvUQTq5yk&_nc_ht=scontent-otp1-1.xx&oh=0ef96508a16e7ca54e623312b2beaac4&oe=5E59FAE9'},
            {name:'Edvin Marton: The Rock Symphony - Sepsi Aréna', time:'November 30', place: 'Sepsi Aréna', going:'21 Hős ott lesz', latitude:45.8778702, longitude:25.7994279, picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/72487308_1431669476983637_4315064826662486016_o.jpg?_nc_cat=106&_nc_oc=AQnsvuICcRwB_5Nuv2VEJZfkmJnhHX3dZWIs7y7-i4Wg-77OVZPT6gu5JvhpsrQV4Mo&_nc_ht=scontent-otp1-1.xx&oh=4b85b980ad04d8b180af60ea09cdc66b&oe=5E43E090'},
            {name:'Harmadik Karácsonyi jótékonysági Koncert a Jó Arcok Egyesülettel', time:'December 21', place: 'Szakszervezetek Mūvelõdèsi Hàza - Csikszereda', going:'Ágoston és további 104 Hős ott lesz', latitude:46.3612375, longitude:25.8032701, picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/75424508_441450739846302_8962364868527128576_n.jpg?_nc_cat=106&_nc_oc=AQkTa2TQCEZmujI07y0NnJwpsmId5hrZloqkuJFloiogTMlRvsqoR_oDVEnEm-_QPmk&_nc_ht=scontent-otp1-1.xx&oh=4ad79a09dc7ab8c6c63228dc2c045928&oe=5E52550C'},
            {name:'Célkitűzés lépésről-lépésre', time:'Január 8', place: 'Jakab Antal Ház - Csíksomlyó', going:'3 Hős ott lesz', latitude:46.3800611, longitude:25.8257966, picture:'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/s960x960/72745288_398472724181242_4473621266745524224_o.jpg?_nc_cat=101&_nc_oc=AQnbXFhOGCJpZ6gYAvUK-qmauw5JHavwq9wZEeSWqMKwNXgjMRQKlQMcyV9p1_VKQMk&_nc_ht=scontent-otp1-1.xx&oh=04df81cf06d18b3682f08c1c7298e8a3&oe=5E53F141'},        
        ];
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
                                            <Text style={{ paddingLeft: 16, paddingTop: 8, fontSize: 14, color: "#f73D10" }}>
                                                 {item.time}
                                            </Text>
                                        </Row>
                                        <Row>
                                            <Text style={{ paddingLeft: 16, color: "black", fontWeight: "bold", fontSize: 14 }}>
                                                {item.name}
                                            </Text>
                                        </Row>
                                        <Row>
                                            <Text style={{ paddingLeft: 16, fontSize: 12, color: "#666666" }}>
                                                {item.place}
                                            </Text>
                                        </Row>
                                        <Row style={{paddingLeft: 16, paddingTop: 4, paddingBottom: 8, flexDirection: "row"}}>
                                        <Image
                                                style={{ width: 15, height: 15 }}
                                                source={{ uri: "https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"}} />
                                        <Text style={{fontSize:12, marginLeft: 3, color: "#666666" }}>
                                            {item.going}
                                        </Text> 
                                        </Row>
                                        <Row style={{borderBottomColor: "#666666", borderBottomWidth: 1, marginBottom: 4}}></Row>
                                        <Row style={{ padding: 8, paddingTop: 0 }}>
                                            <Col alignItems="center" justifyContent="center">
                                                <TouchableOpacity>
                                                    <Row alignItems="center" justifyContent="center">  
                                                    <Ionicons name="ios-star-outline" size={20} color="#666666" />
                                                    <Text style={{fontSize: 12, color: "#666666", marginLeft: 4}}>
                                                        {"Érdekel"}
                                                    </Text>
                                                    </Row>
                                                </TouchableOpacity>
                                            </Col>
                                            <Col alignItems="center" justifyContent="center">
                                                <TouchableOpacity>
                                                <Row alignItems="center" justifyContent="center">  
                                                    <AntDesign name="sharealt" size={20} color="#666666" />
                                                    <Text style={{fontSize: 12, color: "#666666", marginLeft: 4}}>
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
