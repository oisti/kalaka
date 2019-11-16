import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};


export default registerForPushNotificationsAsync = async () =>{
	if (firebase.apps.length){
		registerForPushNotificationsAsync2()
    }else{
		setTimeout(() =>{
			registerForPushNotificationsAsync()
		}, 0);
	}
}

registerForPushNotificationsAsync2 = async () =>{
	const { status: existingStatus } = await Permissions.getAsync(
		Permissions.NOTIFICATIONS
	);
	let finalStatus = existingStatus;

	// only ask if permissions have not already been determined, because
	// iOS won't necessarily prompt the user a second time.
	if (existingStatus !== 'granted') {
		// Android remote notification permissions are granted during the app
		// install, so this will only ask on iOS
		const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
		finalStatus = status;
	}

	// Stop here if the user did not grant permissions
	if (finalStatus !== 'granted') {
		return;
	}

	// Get the token that uniquely identifies this device
	let token = await Notifications.getExpoPushTokenAsync();


/*
	const dbh = firebase.firestore();
	dbh.collection("users").add({
		token
	}).catch((error) => {
		console.error("Error adding document: ", error);
	});
	*/
}