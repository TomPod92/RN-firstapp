import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalInput from './components/GoalInput.js';
import GoalItem from './components/GoalItem.js';

const App = () => {
  const [ goalList, setGoalList ] = useState([]);

  const handleAddGoal = (newGoal) => {
    setGoalList(currentState => [ ...currentState, {id: Math.random().toString(), value: newGoal} ]);
  };

  const handleDeleteGoal = (id) => {
    const newGoalList = goalList.filter(current => current.id !== id);

    setGoalList(newGoalList);
  }

  return (
    <View style={styles.screen}>
      <GoalInput handleAddGoal={handleAddGoal}/>

      <FlatList style={styles.listContainer} data={goalList} renderItem={itemData => <GoalItem goal={itemData.item} handleDeleteGoal={handleDeleteGoal}/>}/>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  listContainer: {
    marginTop: 20
  },
});

export default App;


