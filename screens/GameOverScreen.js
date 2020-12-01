import React from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/BodyText';

const GameOverScreen=props=>{
    return(
        <View style={styles.screen}>
            <TitleText>The Game is Over !!</TitleText>
            <View style={styles.imageContainer}>
            <Image 
            //source={require('../assets/success.png')} 
            source={{uri:'https://media.istockphoto.com/photos/ama-dablam-mount-in-the-nepal-himalaya-picture-id485966046?k=6&m=485966046&s=612x612&w=0&h=rpI0-lFzV1XwBNwV5stQy_cDeICYTN8xGn_O0dOlync='}} 
            style={styles.image} 
            resizeMode='contain' 
            />
            </View>
            <BodyText>The number of rounds :{props.roundsNumber}</BodyText>
            <BodyText>The number to be guessed was:{props.userNumber}</BodyText>
            <Button title='New Game' onPress={props.onRestart} />
        </View>
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        
        width:'100%',
       height:'100%'
    },
    imageContainer:{
        borderRadius:150,
        borderWidth:20,
        borderColor:'black',
        width:300,
        height:300,
        borderWidth:3,
        overflow:'hidden',
        marginVertical:30
    }

});

export default GameOverScreen;
