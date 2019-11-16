import { AppHeader } from "components";
import { Content, Container, Grid, Row, Col, Thumbnail, Text } from "native-base";
import { CounterState } from "reducers/states";
import React from "react";
import { connect } from "react-redux";

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

                <Content padder>
                    <Grid>
                        <Row>
                            <Col style={{ padding: 4 }} alignItems="center" justifyContent="center">
                                <Thumbnail
                                    source={{ uri: "https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg" }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ padding: 4 }} alignItems="center" justifyContent="center">
                                <Text>
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
)(ProfileScreen as React.ComponentClass<Props>);
