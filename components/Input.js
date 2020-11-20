import React from 'react';
import {View,Text,StyleSheet, TextInput} from 'react-native';

const Input =props =>{
    return <TextInput {...props} style={{...styles.input,...props.style}}/>

};

const styles=StyleSheet.create({
    input:{
        height:30,
        borderBottomColor:'grey',
        borderRightWidth:1,
        marginVertical:18,
        
    }

});

export default Input;