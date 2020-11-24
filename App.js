import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
export default function App() {

  const [userNumber,setUserNumber]=useState();

  const startGameHandler = (selectedNumber)=>{
    setUserNumber(selectedNumber);

  };
  let content = <StartGameScreen/>;

  if(userNumber)
  {
    content =<GameScreen/>;
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess A number'/>
      {content};
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
  }
  
});
