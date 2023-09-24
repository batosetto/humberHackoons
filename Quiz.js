import React, { useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import App from './App';

const questions = [
  {
    question: 'What does "Phishing" refer to in cybersecurity?',
    options: [
      'A technique to gain unauthorized access to a system',
      'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity',
      'A type of malware that encrypts files',
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which of the following is a strong password?',
    options: ['"password123"', '"P@ssw0rd!"', '"qwerty"'],
    correctAnswer: 1,
  },
  {
    question: 'What is the purpose of using a Virtual Private Network (VPN)?',
    options: [
      'To secure wireless network connections',
      'To hide your IP address and encrypt your data while browsing',
      'To protect against malware attacks',
    ],
    correctAnswer: 1,
  },
  {
    question: 'Why is it important to regularly update your software and applications?',
    options: [
      'To make your device run faster',
      'To add new features',
      'To patch security vulnerabilities and protect against cyber threats',
    ],
    correctAnswer: 2,
  },
  {
    question: 'If you receive an email requesting your login credentials or personal information, what should you do?',
    options: [
      'Provide the requested information to verify your account',
      'Delete the email without responding or clicking on any links',
      'Reply to the email and ask for more information',
    ],
    correctAnswer: 1,
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [showApp, setApp] = useState(false);
 



  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowNextButton(false);
      setSelectedOption(null);
      setIsAnswerCorrect(false);
    } else {
      setShowScore(true);
    }
  };

  const handleAnswer = (index) => {
    if (!selectedOption) {
      setSelectedOption(index);
      const correctAnswer = questions[currentQuestionIndex].correctAnswer;
      setIsAnswerCorrect(index === correctAnswer);
      if (index === correctAnswer) {
        setUserScore(userScore + 1);
      }
      setShowNextButton(true);
    }
  };

  useEffect(() => {
    setShowNextButton(false);
  }, [currentQuestionIndex]);
  
if (showApp) {
    return <App />;
  }

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Your Score: {userScore} / {questions.length}</Text>
            <View style={styles.buttonBox}><TouchableOpacity style={styles.button} onPress={() => setApp(true)}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity></View>
        </View>
      ) : (
        <View>
          <Text style={styles.questionText}>{questions[currentQuestionIndex].question}</Text>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAnswer(index)}
              style={[
                styles.optionButton,
                {
                  backgroundColor:
                    selectedOption === index
                      ? isAnswerCorrect
                        ? 'green'
                        : 'red'
                      : '#f0f0f0',
                },
              ]}
              disabled={selectedOption !== null}
            >
              <Text
                style={[
                  styles.optionText,
                  { color: selectedOption === index ? 'white' : 'black' },
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
      )}
       {showNextButton && !showScore && ( 
        <TouchableOpacity onPress={handleNextQuestion} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish!'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0066A4',
  },
  scoreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  questionText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'justify',
    color: '#ffffff'
  },

  optionButton: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    paddingTop: 10,
    height: 100,
    justifyContent: 'center'
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
    alignItems: 'center'
  },
  nextButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  nextButtonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },

   button: {
    width: 100,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#FFF',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 30,
    alignItems: 'center',
  },

  buttonText: {
    color: '#0066A4',
    textAlign: 'center',
    fontSize: 20,
  },

   buttonBox: {
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    fontFamily: 'bell-slim',
    padding: 15,
    marginTop:200
   },
});

export default Quiz;
