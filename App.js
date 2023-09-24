import React, { useState } from 'react';
import Quiz from './Quiz';
import GuidelinesScreen from './GuidelinesScreen';
import { StyleSheet, Text, Image, TouchableOpacity, View, Button } from 'react-native';
import MonthlyRanking from './MonthlyRanking';



const App = () => {
  const [showQuiz, setQuiz] = useState(false);
  const [showRanking, setRanking] = useState(false);
  const [showPersonalInfo, setPersonalInfo] = useState(false);
  const [showGuidelines, setGuidelines] = useState(false);
  const images = [
    require('./src/icons8-password-96.png'), 
  ];

    if (showQuiz) {
    return <Quiz />;
  }

  if (showGuidelines) {
    return <GuidelinesScreen />;
  }

  if (showRanking) {
    return <MonthlyRanking />;
  }

  if (showPersonalInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Personal Info</Text>
        <Text style={styles.content}>Your score is: 82! Congrats!</Text>
        <Text style={styles.content}>Name: David</Text>
        <Text style={styles.content}>Company: Bell</Text>
         <View style={styles.buttonBox}>
         <TouchableOpacity
          style={styles.buttonHome} 
          onPress={() => setPersonalInfo(false)}>
          <Text style={styles.buttonTextHome}>Home</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      {images.map((image) => (
          <Image source={image} style={styles.image}/>
      ))}
      <Text style={styles.title}>Bell Guardian</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => setQuiz(true)}>
          <Text style={styles.buttonText}>Daily Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setRanking(true)}>
          <Text style={styles.buttonText}>Ranking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setGuidelines(true)}>
          <Text style={styles.buttonText}>Security Guidelines</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setPersonalInfo(true)}>
          <Text style={styles.buttonText}>Personal Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066A4',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'bell-slim',
    paddingTop: 50,
  },

  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
    fontFamily: 'bell-slim',
  },

  content: {
    fontSize: 25,
    color: '#FFF',
    justifyContent: 'center',
    fontFamily: 'bell-slim',
  },

  image: {
    marginBottom: 50,
  },

  button: {
    width: 200,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#FFF',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
    justifyContent: 'center',
  },

  buttonText: {
    color: '#0066A4',
    textAlign: 'center',
    fontSize: 20,
  },

  buttonRow: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginBottom: 50,
    width: '100%',
    alignItems: 'center',
    fontFamily: 'bell-slim',
    display: 'block',
    padding: 15,
  },

buttonHome: {
    width: 100,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#FFF',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
    justifyContent: 'center',
  },

  buttonTextHome: {
    color: '#0066A4',
    textAlign: 'center',
    fontSize: 20,
  },

 buttonBox: {
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    fontFamily: 'bell-slim',
    padding: 15,
    marginTop: 30
   },

});

export default App;