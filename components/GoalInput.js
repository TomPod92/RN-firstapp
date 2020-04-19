import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = (props) => {
    const [ newGoal, setNewGoal ] = useState('');

    const handleInputChange = (text) => setNewGoal(text);

    const handleButtonPress = () => {
        props.handleAddGoal(newGoal);
        setNewGoal('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                placeholder="Course Goal" 
                onChangeText={handleInputChange} 
                value={newGoal}
            />
            <Button title="ADD" onPress={handleButtonPress}/>
        </View> 
    );
}

const styles = StyleSheet.create({
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
});
 
export default GoalInput;