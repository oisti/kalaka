import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { getDistance } from 'geolib';
import { round } from 'mathjs';

export const distanceCalc = async (latitude, longitude) => {
    const { status, permissions } = await  Permissions.askAsync(Permissions.LOCATION);
    let loca = null
    if (status === 'granted') {
        if (Location.hasServicesEnabledAsync()) {
            loca  = await Location.getCurrentPositionAsync({}).then(location=>{
                    return getDistance(
                        { latitude: location.coords.latitude , longitude: location.coords.longitude},
                        { latitude: latitude, longitude}
                    );
                }).catch(err => {
                    return Promise.reject('Location permission error')
                })
        } 
    } else {
        return Promise.reject('Location permission not granted')
    }
    if (loca > 1000){
        return Promise.resolve(round(loca / 1000) +' km')
    }else{
        return Promise.resolve(loca+' m')
    }
   
}

export const getCurrentPos = async () => {
    const { status, permissions } = await  Permissions.askAsync(Permissions.LOCATION);
    let loca = null
    if (status === 'granted') {
        if (Location.hasServicesEnabledAsync()) {
            loca  = await Location.getCurrentPositionAsync({}).then(location=>{
                    return { latitude: location.coords.latitude , longitude: location.coords.longitude};
                }).catch(err => {
                    console.log(err)
                    return Promise.reject('Location permission error')
                })
        } 
    } else {
        return Promise.reject('Location permission not granted')
    }
    return loca;
   
}