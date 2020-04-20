import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = (props) => {
    const [ newGoal, setNewGoal ] = useState('');

    const handleInputChange = (text) => setNewGoal(text);

    const handleButtonPress = () => {
        if(!newGoal.trim()) {
            return
        }
        
        props.handleAddGoal(newGoal);
        props.closeModal(false);
        setNewGoal('');
    }

    const handleCancel = () => {
        setNewGoal('');
        props.closeModal(false)
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Course Goal" 
                    onChangeText={handleInputChange} 
                    value={newGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="ADD" onPress={handleButtonPress}/></View>
                    <View style={styles.button}><Button title="CANCEL" color="red" onPress={handleCancel}/></View>
                </View>
            </View>
        </Modal> 
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1
    },
    buttonContainer: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    button: {
        marginRight: 10,
        width: 100,
    }
});
 
export default GoalInput;