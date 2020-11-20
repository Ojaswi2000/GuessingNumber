import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,Button,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
const StartGameScreen =props =>{

    const [enteredValue,setEnteredValue]=useState('');
    const [confirmed,setConfirmed]=useState(false);
    const [selectedNumber,setSelectedNumber]=useState();

    const numberInputHandler =inputText=>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''));

    };

    const resetInputHandler=()=>{
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler =()=>{
        const chosenNumer =parseInt(enteredValue);
        if(chosenNumer==NaN || chosenNumer<=0 || chosenNumer>99)
        return;
        setConfirmed(true);
        setSelectedNumber(chosenNumer);
        setEnteredValue('');

    };
    let confirmedOutput;
    if(confirmed)
    {
    confirmedOutput=<Text>Chosen Number: {selectedNumber}</Text>
    }

    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game !</Text>
            <Card style={styles.inputContainer}>
                <Text>Enter a Number</Text>
                <Input style={styles.input} 
                blurOnSubmit 
                autoCapitalize='none' 
                autoCorrect={false} 
                keyboardType='number-pad' 
                maxLength={2}  
                onChangeText={numberInputHandler} 
                value={enteredValue} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={colors.secondary}/></View>
                    <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={colors.primary}/></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );

};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
        
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',

    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15,

    },
    title:{
        fontSize:20,
        marginVertical: 10,
    },
    button:{
        width:100,
    },
    input:{
        width:50,
        textAlign:'center'
    }



});

export default StartGameScreen;
