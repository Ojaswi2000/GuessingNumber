import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const GameOverScreen=props=>{
    return(
        <View style={styles.screen}>
            <Text>The Game is Over !!</Text>
            <Text>The number of rounds :{props.roundsNumber}</Text>
            <Text>The number to be guessed was:{props.userNumber}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }

});

export default GameOverScreen;
