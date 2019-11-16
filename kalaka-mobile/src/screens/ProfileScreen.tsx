import { AppHeader } from "components";
import { Content, Container, Grid, Row, Col, Thumbnail, Text } from "native-base";
import React from "react";

interface PropsConnectedState {
    value: number;
}

interface Props extends PropsConnectedState {
    navigation: { goBack: () => void };
}

class ProfileScreen extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    onLeftButtonPress = () => {
        this.props.navigation.goBack();
    };

    render(): JSX.Element {
        const profileData = {};
        return (
            <Container>
                <AppHeader
                    showBackButton={true}
                    headerText={"Profil"}
                    leftButtonPress={this.onLeftButtonPress}
                />

                <Content padder style={{backgroundColor: "#e6e8e7"}}>
                    <Grid>
                        <Row>
                            <Col style={{ padding: 4 }} alignItems="center" justifyContent="center">
                                <Thumbnail
                                    source={{ uri: "https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg" }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ padding: 4 }} alignItems="center" justifyContent="center">
                                <Text style={{color: "#7e1161"}}>
                                    {"Fehasználó neve"}
                                </Text>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}


export default(ProfileScreen as React.ComponentClass<Props>);
