import React, { Component, Dispatch } from "react";
import getPushNotificationsTokenAsync from "./util/PushNotifications"
import { getCurrentPos } from "./util/LocationUtil"
import * as firebase from 'firebase';
import { connect } from "react-redux";
import { HeroeState } from "reducers/states";
import { Action } from "actions/interfaces";
import * as Actions from "actions";


interface PropsConnectedState {
	heroe: object;
}

interface PropsConnectedDispatcher {
	setHeroe: (payload: object) => void;
}

interface Props extends PropsConnectedState, PropsConnectedDispatcher {
	navigation: { navigate: (screen: string) => void };
}

class SmartUtil extends Component<Props> {
	constructor(props: any) {
		super(props);

	}

	componentDidMount() {
		this.regHeroe();
	}


	regHeroe = async () => {
		const token = await getPushNotificationsTokenAsync().catch();
		const dbh = firebase.firestore();

		var docRef = dbh.collection("heroe").doc(token);
		docRef.get().then((doc) => {
			if (doc.exists) {
				this.props.setHeroe({ id: token, ...doc.data() })

			} else {
				const data = {
					name: 'Csiki Titan',
					points: Math.round(Math.random() * 1000),
					active: false,
					avatar: null,
				}
				dbh.collection("heroe").doc(token).set(data).then(() =>{
					this.props.setHeroe({ id: token, ...data })
					console.log(data)
				}).catch((error) => {
					console.error("Error adding document: ", error);
				});

			}
		}).catch((error) => {
			console.log("Error getting document:", error);
		});


		//const currentPos = await getCurrentPos().catch(e=>{});

		// console.log(currentPos)
	}

	render() {
		//console.log(this.props.heroe)
		return null
	}
}


const mapStateToProps = ({
	heroe
}: {
	heroe: HeroeState;
}): PropsConnectedState => {
	return {
		heroe: heroe
	};
};


const mapDispatchToProps = (
	dispatch: Dispatch<Action<any>>
): PropsConnectedDispatcher => {
	return {
		setHeroe: (payload) => {
			return dispatch(Actions.setHeroe(payload));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SmartUtil as React.ComponentClass<Props>);


