import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { guidelines } from './mockData';
import App from './App';

const GuidelinesScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredGuidelines = guidelines.filter(guideline =>
    guideline.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
 const [showApp, setApp] = useState(false);

if (showApp) {
    return <App />;
  }
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for guidelines"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={filteredGuidelines}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.guidelineItem}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
       <View style={styles.buttonBox}><TouchableOpacity
          style={styles.button}
          onPress={() => setApp(true)}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
    backgroundColor:'#0066A4', 
  },

  searchInput: {
    height: 40,
    borderColor: 'white',
    color: 'white',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  guidelineItem: {
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 5,
  },

    button: {
    width: 100,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#FFF',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#0066A4',
    textAlign: 'center',
    fontSize: 20,
  },

   buttonBox: {
    alignItems: 'center',
    width: '100%',
    fontFamily: 'bell-slim',
    marginBottom: 100,
   }

});

export default GuidelinesScreen;