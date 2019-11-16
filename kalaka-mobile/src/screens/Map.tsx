import React from 'react';
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, Alert, Platform, Linking } from "react-native";
import { Content } from "native-base";
import { Text, Grid, Row, Col, Card } from 'native-base';
import { CircularProgress} from  "components";
import MapView, {Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

interface Props {
    navigation: { navigate: (screen: string) => void };
}

class Map extends React.Component<Props> {
    
    constructor(props){
        super(props);
        
        this.state = {
            showProducer: false,
            loading: true,
            distance: null,
            initialRegion: null
        }
    }

    componentDidMount() {
        this.getCurrentLoc();
    }

    getCurrentLoc = async () => {
        const { status, permissions } = await  Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            if (Location.hasServicesEnabledAsync()) {
                Location.getCurrentPositionAsync({}).then(location=>{
                    this.setState({initialRegion:{latitude: location.coords.latitude, longitude: location.coords.longitude}})

                }).catch(err => {
                    console.log(err)
                    this.setState({initialRegion:{latitude: 46.2916805, longitude: 25.2881355}})
                })
            }
        } 
    }

    mapClick = (e) => {
        const index = parseInt(e.nativeEvent.id, 10);
        if ( isNaN(index)) {
            //this.setState({showProducer: false});
        } else {
            //this.setState({showProducer: true, producer: this.state.producers[index]});
        }
    }

    markerClick = (i) => {
        if (Platform.OS == 'android') {
            //this.setState({showProducer: true, producer: this.state.producers[i]});
        }
    }

    render() : JSX.Element{
        return (
            <>
                <Content padder enableOnAndroid>
                <View style={styles.container}>

                    {(!this.state.initialRegion) &&
                        <CircularProgress size="large" style={{paddingTop: 100}} />
                    }

                    {this.state.initialRegion && 
                        <MapView style={ this.state.showProducer ? styles.mapStyle2 : styles.mapStyle }
                            onPress={(e) => this.mapClick(e)}
                            initialRegion={{
                                latitude: this.state.initialRegion.latitude,
                                longitude: this.state.initialRegion.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            provider={MapView.PROVIDER_GOOGLE}
                        >
                    </MapView>
                }
                </View> 
                </Content>
            </>
        );
    }
}

export default (Map as React.ComponentClass<Props>)

const styles = StyleSheet.create({ 
    colStyle: { 
        paddingBottom: 8, 
        paddingTop: 8 
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    mapStyle2: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-200,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    productorImage:{
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    imageView: {
        paddingLeft: 8,
        paddingRight: 16,
        marginTop: 0,
    },
    imageViewProductor:{
        padding: 5,
        marginTop: -15,
    },
    rating: {
        width: 25,
        maxWidth: 110
    },
    description:{
        color: "#666666",
        padding: 8,
        paddingLeft: 16,
        textAlign:'justify',
    },
    productorText:{
        color: "#9a519f",
        fontWeight: "bold",
        padding: 8,
        paddingTop: 16,
        width: "100%",
        paddingBottom: 0,
    },
    functionText:{
        paddingLeft: 8,
        color: "#666666",
    },
    locationAndDistanceText:{
        color: "#666666",
        paddingTop: 0,
        paddingLeft: 8,
    },
    actionText:{
        color: "#ec407a",
    },
    actionIcon:{
        fontSize: 20,
        color: "#ec407a",
    },
    actionCard: {
        borderRadius: 25,
        padding: 14,
        paddingTop: 10,
        paddingBottom: 10
    },
    actionCard2:{
        borderRadius: 25,
        padding: 16,
        paddingTop: 10,
        paddingBottom: 10
    },
    actionRow:{
        margin: 16,
        marginTop: 8,
        marginBottom: 24,
    }
})