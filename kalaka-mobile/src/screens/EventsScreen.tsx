import { AppHeader } from "components";
import { Content, Container, Grid, Row, Col, Text, Thumbnail } from "native-base";
import { CounterState } from "reducers/states";
import React from "react";
import { connect } from "react-redux";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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
                    headerText={"Események"}
                    leftButtonPress={this.onLeftButtonPress}
                />

                <Content padder>

                    <Grid>
                        {list.map((item, index) => {
                            return (
                                <Row key={index} style={{ borderColor: "grey", borderWidth: 1, borderRadius: 5, marginBottom: 10, elevation: 2 }}>
                                    <Col>
                                        <Row>
                                            <Image
                                                style={{ width: "100%", height: 120 }}
                                                source={{ uri: index%2 
                                                ? "https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/12/16131147/future-phone-mobile-live-events-technology-trends.png" 
                                                : "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg" }} />
                                        </Row>
                                        <Row>
                                            <Text style={{ paddingBottom: 4, paddingLeft: 8, fontSize: 14, color: "grey" }}>
                                                {"Esemény neve"}
                                            </Text>
                                        </Row>
                                        <Row>
                                            <Text style={{ paddingBottom: 4, paddingLeft: 8, fontSize: 10, color: "grey" }}>
                                                {"Vestibulum euismod eros a lectus malesuada dignissim. Fusce ac dui arcu. Proin sodales tristique vestibulum. Ut nec dui id tortor mollis dapibus. Ut eget hendrerit orci. Sed in porta metus. Donec ut elit at ante porta facilisis."}
                                            </Text>
                                        </Row>
                                        <Row>
                                            <Col alignItems="center" justifyContent="center">
                                                <TouchableOpacity>
                                                    <Ionicons name="ios-star-outline" size={20} color="grey" style={{ padding: 4, paddingTop: 0 }} />
                                                </TouchableOpacity>
                                            </Col>
                                            <Col alignItems="center" justifyContent="center">
                                                <TouchableOpacity>
                                                    <MaterialCommunityIcons name="share-outline" size={20} color="grey" style={{ padding: 4, paddingTop: 0 }} />
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
)(EventsScreen as React.ComponentClass<Props>);
