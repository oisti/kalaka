import React, { Component, Fragment} from 'react';
import { Item, Input, Label, Text } from 'native-base';



export default class TextInput extends Component {
    render(){
        const { value, label, hideLabel, error, autoShowError, endAdornment, startAdornment, rounded, itemStyle,  ...childProps} = this.props;
        
        return (
            <>
                <Item floatingLabel={!hideLabel} rounded={rounded?true:false} error={error?true:false} style={itemStyle}>
                    {startAdornment ? startAdornment : <Fragment />}
                    {!hideLabel && <Label>{label}</Label>}
                    <Input 
                        value={value} 
                        placeholderTextColor={"#B8B8B8"} 
                        {...childProps}
                    /> 
                    {endAdornment ? endAdornment : <Fragment />}
                </Item>
                {error || (!autoShowError && <Text> </Text>)}
            </>
        )
    }
}