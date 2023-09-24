import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col} from 'react-native-table-component';
import { ListItem } from 'react-native-elements';
import App from './App';


const employeeData = [
  ['Alice', '95'],
  ['Bob', '88'],
  ['Charlie', '75'],
  ['David (You)', '82'],
  ['Emma', '91'],
  ['Frank', '79'],
  ['Grace', '86'],
  ['Henry', '78'],
];

const MonthlyRanking = () => {
  const tableHead = ['Rank', 'Name', 'Score'];
  const tableData = employeeData.map((row, index) => [index + 1, ...row]);
  const [showApp, setApp] = useState(false);

if (showApp) {
    return <App />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Monthly Ranking  </Text>
      <Table  borderStyle={{ borderWidth: 1, borderColor:'#ffffff' }}>
        <Row data={tableHead} style={styles.head}  textStyle={styles.headText}  />
        <Rows data={tableData} style={styles.row} textStyle={styles.text} />
      </Table>
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
    padding: 16,
    paddingTop: 200,
    backgroundColor: '#0066A4',
    color: '#ffffff',
    text: { margin: 10 },
    row: { borderBottomWidth: 1, borderColor: '#c8e1ff', borderWidth: 50}
  },

  header: { 
    fontSize: 35, 
    marginBottom: 40, 
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    },

  head: { 
    height: 40, 
},

  headText: {
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
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
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    fontFamily: 'bell-slim',
    padding: 15,
    marginTop: 30
   },

  text: { 
  margin: 6, 
  textAlign: 'center',
  color: '#ffffff'
},
});

export default MonthlyRanking;
