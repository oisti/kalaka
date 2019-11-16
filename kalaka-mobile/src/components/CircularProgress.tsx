import React from 'react';
import { ActivityIndicator } from 'react-native';


function CircularProgress(childProps) {
    return (
        <ActivityIndicator color="#9a519f" {...childProps} />
    )
}

export default (CircularProgress);