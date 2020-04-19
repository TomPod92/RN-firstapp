import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  const [ newGoal, setNewGoal ] = useState('');
  const [ goalList, setGoalList ] = useState([]);

  const handleInputChange = (text) => setNewGoal(text);

  const handleAddGoal = () => {
    setGoalList(currentState => [...currentState, newGoal]);
    setNewGoal('');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={handleInputChange} value={newGoal}/>
        <Button title="ADD" onPress={handleAddGoal}/>
      </View>

      <View style={styles.listContainer}>
        {goalList.map( (current, index) => <View  key={`${index}-${current}`} style={styles.listItem}><Text>{index+1}.{current}</Text></View> )}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    padding: 10,
    borderWidth: 1
  },
  listContainer: {
    marginTop: 20
  },
  listItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
  
});
